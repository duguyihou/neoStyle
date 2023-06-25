import {useContext} from 'react';
import {ThemeContext} from './context';
import {BaseTheme} from './types';

export function useTheme<Theme extends BaseTheme = BaseTheme>() {
  const theme = useContext(ThemeContext) as Theme;
  return theme;
}
