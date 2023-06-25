import {createParserConfig, ResponsiveValue} from '../core';
import {BaseTheme} from '../theme';

export const color = createParserConfig({
  property: 'color',
  themeKey: 'colors',
});

export interface ColorProps<Theme extends BaseTheme> {
  color?: ResponsiveValue<keyof Theme['colors'], Theme['breakpoints']>;
}
