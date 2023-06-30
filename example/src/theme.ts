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
  spacing: {
    s1: 4,
    s2: 8,
    s3: 12,
  },
  borderRadii: {
    b1: 10,
    b2: 20,
    b3: 30,
  },
});

export type Theme = typeof theme;
export default theme;
