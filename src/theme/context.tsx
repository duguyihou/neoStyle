import React, {PropsWithChildren} from 'react';
import {BaseTheme} from './types';

export const ThemeContext = React.createContext({
  colors: {},
});

export const ThemeProvider = ({
  theme,
  children,
}: PropsWithChildren<{theme: BaseTheme}>) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);
