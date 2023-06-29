import {ViewStyle} from 'react-native';
import {ResponsiveValue, createParserConfig} from '../core';
import {BaseTheme} from '../theme';

const borderProperties = {
  borderBottomWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  borderStyle: true,
  borderTopWidth: true,
  borderStartWidth: true,
  borderEndWidth: true,
  borderWidth: true,
};

const borderRadiusProperties = {
  borderRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderBottomStartRadius: true,
  borderBottomEndRadius: true,
  borderTopStartRadius: true,
  borderTopEndRadius: true,
};

const borderColorProperties = {
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderLeftColor: true,
  borderBottomColor: true,
  borderStartColor: true,
  borderEndColor: true,
};

export const border = {
  ...Object.keys(borderProperties).map(property =>
    createParserConfig({
      property: property as keyof typeof borderProperties,
    }),
  ),
  ...Object.keys(borderColorProperties).map(property =>
    createParserConfig({
      property: property as keyof typeof borderProperties,
      themeKey: 'colors',
    }),
  ),
  ...Object.keys(borderRadiusProperties).map(property =>
    createParserConfig({
      property: property as keyof typeof borderProperties,
      themeKey: 'borderRadii',
    }),
  ),
};

export type BorderProps<Theme extends BaseTheme> = {
  [Key in keyof typeof borderProperties]?: ResponsiveValue<
    ViewStyle[Key],
    Theme['breakpoints']
  >;
} & {
  [Key in keyof typeof borderColorProperties]?: ResponsiveValue<
    keyof Theme['colors'],
    Theme['breakpoints']
  >;
} & {
  [Key in keyof typeof borderRadiusProperties]?: ResponsiveValue<
    Theme['borderRadii'] extends object ? keyof Theme['borderRadii'] : number,
    Theme['breakpoints']
  >;
};
