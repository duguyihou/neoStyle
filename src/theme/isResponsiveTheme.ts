import {BaseTheme, ResponsiveTheme} from './types';

export function isResponsiveTheme(
  theme: BaseTheme | ResponsiveTheme,
): theme is ResponsiveTheme {
  return !!theme.breakpoints;
}
