import {createTheme} from 'neostyle';

const palette = {
  red: 'red',
  blue: 'blue',
  yellow: 'yellow',
  white: 'white',
  grey: '#DEDEDE',
  black: '#1A1B26',
};

const theme = createTheme({
  colors: {
    primaryBg: palette.grey,
    secondaryBg: palette.red,
    tertiaryBg: palette.yellow,
  },
  breakpoints: {
    sm: 375,
    md: 425,
    lg: 768,
    xl: 1024,
  },
});

export type Theme = typeof theme;
export default theme;
