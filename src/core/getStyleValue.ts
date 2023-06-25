import {
  BaseTheme,
  Breakpoint,
  Dimensions,
  ResponsiveTheme,
  isResponsiveTheme,
  isThemeKey,
} from '../theme';
import {BaseResponsiveValue, PropValue, ResponsiveValue} from './types';

/**
 * Returns true if the value can be used for responsive, false otherwise.
 * @param value `prop value`
 * @param theme `theme`
 * @returns `true` or `false`
 */
function isResponsiveValue<TValue, Theme extends ResponsiveTheme>(
  value: ResponsiveValue<TValue, Theme['breakpoints']>,
  theme: Theme,
): value is BaseResponsiveValue<TValue, Theme['breakpoints']> {
  if (!value || typeof value !== 'object') {
    return false;
  }
  return Object.keys(value).every(key => theme.breakpoints[key] !== undefined);
}

function getWidth(bkp: Breakpoint) {
  return typeof bkp === 'object' ? bkp.width : bkp;
}

/**
 * Returns value given `responsiveValue`, `breakpoints`, and current `dimensions`
 * @param responsiveValue `responsiveValue`
 * @param config `{breakpoints, dimensions}`
 * @returns value
 */
export function getValueForBreakpoint<TValue, Theme extends ResponsiveTheme>(
  responsiveValue: BaseResponsiveValue<TValue, Theme['breakpoints']>,
  config: {
    breakpoints: Theme['breakpoints'];
    dimensions: Dimensions;
  },
): TValue | undefined {
  const {
    breakpoints,
    dimensions: {width, height},
  } = config;

  const sortedBreakpoints = Object.entries(breakpoints).sort(
    (bkpA, bkpB) => getWidth(bkpA[1]) - getWidth(bkpB[1]),
  );
  const value = sortedBreakpoints.reduce<TValue | undefined>(
    (acc, [key, bkp]) => {
      if (typeof bkp === 'object') {
        if (
          width >= bkp.width &&
          height >= bkp.height &&
          responsiveValue[key] !== undefined
        ) {
          return responsiveValue[key];
        }
      } else if (width >= bkp && responsiveValue[key] !== undefined) {
        return responsiveValue[key];
      }
      return acc;
    },
    undefined,
  );

  return value;
}

/**
 * Returns value from the theme given a `themeKey`
 * @param value the value of `prop`
 * @param config `{theme, themeKey}`
 * @returns theme value
 */
function getThemeValue<
  TValue extends PropValue,
  Theme extends BaseTheme,
  K extends keyof Theme | undefined,
>(
  value: TValue | undefined,
  {
    theme,
    themeKey,
  }: {
    theme: Theme;
    themeKey?: K;
  },
) {
  if (isThemeKey(theme, themeKey)) {
    if (value && theme[themeKey][value] === undefined) {
      throw new Error(
        `Value '${value}' does not exist in theme['${String(themeKey)}']`,
      );
    }

    return value ? theme[themeKey][value] : value;
  }

  return value;
}
/**
 * Returns the style value
 * @param props pass to component
 * @param config `{theme, dimensions, property, themeKey}`
 * @returns style value
 */
export function getStyleValue<
  Theme extends BaseTheme = BaseTheme,
  TProps extends {[key: string]: any} = {[key: string]: any},
  P extends keyof TProps = keyof TProps,
  K extends keyof Theme | undefined = undefined,
>(
  props: TProps,
  {
    theme,
    dimensions,
    property,
    themeKey,
  }: {
    theme: Theme;
    dimensions: Dimensions | null;
    property: P;
    themeKey: K;
  },
) {
  const propValue = (() => {
    if (!isResponsiveTheme(theme) || !dimensions) {
      return props[property];
    }
    const value = isResponsiveValue(props[property], theme)
      ? (getValueForBreakpoint(props[property], {
          breakpoints: theme.breakpoints,
          dimensions,
        }) as PropValue)
      : props[property];
    return value;
  })();
  const styleValue = getThemeValue(propValue, {theme, themeKey}) ?? {};
  return styleValue;
}
