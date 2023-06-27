import {FlexStyle} from 'react-native';
import {createParserConfig, ResponsiveValue} from '../core';
import {BaseTheme} from '../theme';

const layoutProperties = {
  width: true,
  height: true,
  minWidth: true,
  maxWidth: true,
  minHeight: true,
  maxHeight: true,
  overflow: true,
  aspectRatio: true,
  alignContent: true,
  alignItems: true,
  alignSelf: true,
  justifyContent: true,
  flex: true,
  flexBasis: true,
  flexDirection: true,
  flexGrow: true,
  flexShrink: true,
  flexWrap: true,
};

export const layout = Object.keys(layoutProperties).map(property =>
  createParserConfig({property: property as keyof typeof layoutProperties}),
);

export type LayoutProps<Theme extends BaseTheme> = {
  [Key in keyof typeof layoutProperties]?: ResponsiveValue<
    FlexStyle[Key],
    Theme['breakpoints']
  >;
};
