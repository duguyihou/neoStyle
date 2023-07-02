import {TextStyle} from 'react-native';
import {ResponsiveValue, createParserConfig} from '../core';
import {BaseTheme} from '../theme';

const typographyProperties = {
  fontFamily: true,
  fontSize: true,
  fontStyle: true,
  fontWeight: true,
  includeFontPadding: true,
  fontVariant: true,
  letterSpacing: true,
  lineHeight: true,
  textAlign: true,
  textAlignVertical: true,
  textDecorationStyle: true,
  textDecorationLine: true,
  textTransform: true,
  verticalAlign: true,
  writingDirection: true,
};

export const typography = Object.keys(typographyProperties).map(property =>
  createParserConfig({property: property as keyof typeof typographyProperties}),
);

export type TypographyProps<Theme extends BaseTheme> = {
  [Key in keyof typeof typographyProperties]?: ResponsiveValue<
    TextStyle[Key],
    Theme['breakpoints']
  >;
};
