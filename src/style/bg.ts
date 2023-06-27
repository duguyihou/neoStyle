import {createParserConfig, ResponsiveValue} from '../core';
import {BaseTheme} from '../theme';

export const bg = createParserConfig({
  property: 'bg',
  styleProperty: 'backgroundColor',
  themeKey: 'colors',
});

export interface BgProps<Theme extends BaseTheme> {
  bg?: ResponsiveValue<keyof Theme['colors'], Theme['breakpoints']>;
}
