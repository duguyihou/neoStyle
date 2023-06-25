import hash from 'stable-hash';
import {BaseTheme} from '../theme';
import {cache} from './cache';
import {getStyleValue} from './getStyleValue';
import {StyleFn, RNStyleProperty} from './types';

export function createParserConfig<
  Theme extends BaseTheme,
  TProps extends {[key: string]: any},
  P extends keyof TProps,
  K extends keyof Theme | undefined,
  S extends RNStyleProperty,
>({
  property,
  styleProperty,
  themeKey,
}: {
  property: P;
  styleProperty?: S;
  themeKey?: K;
}) {
  const fn: StyleFn<TProps, Theme, S> = (props, context) => {
    const {theme, dimensions} = context;
    if (!cache.has(theme)) {
      cache.set(theme, {});
    }

    const cacheKey = hash({themeKey, property, props, dimensions});

    const cachedStyle = cache.get(theme)[cacheKey];
    if (cachedStyle) {
      return cachedStyle;
    }

    const styleKey = styleProperty || property.toString();
    const styleValue = getStyleValue(props, {
      theme,
      dimensions,
      property,
      themeKey,
    });
    const style = {
      [styleKey]: styleValue,
    } as {
      [key in S | P]?: typeof styleValue;
    };

    cache.get(theme)[cacheKey] = style;

    return style;
  };

  return {
    property,
    fn,
  };
}
