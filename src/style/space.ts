import {ResponsiveValue, createParserConfig} from '../core';
import {BaseTheme} from '../theme';

const spacingProperties = {
  margin: true,
  marginTop: true,
  marginRight: true,
  marginBottom: true,
  marginLeft: true,
  marginHorizontal: true,
  marginVertical: true,
  marginStart: true,
  marginEnd: true,
  padding: true,
  paddingTop: true,
  paddingRight: true,
  paddingBottom: true,
  paddingLeft: true,
  paddingHorizontal: true,
  paddingVertical: true,
  paddingStart: true,
  paddingEnd: true,
  columnGap: true,
  rowGap: true,
  gap: true,
};

export const spacing = Object.keys(spacingProperties).map(property =>
  createParserConfig({
    property: property as keyof typeof spacingProperties,
    themeKey: 'spacing',
  }),
);

export type SpacingProps<Theme extends BaseTheme> = {
  [Key in keyof typeof spacingProperties]?: ResponsiveValue<
    keyof Theme['spacing'],
    Theme['breakpoints']
  >;
};
