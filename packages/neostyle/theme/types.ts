export interface Dimensions {
  width: number;
  height: number;
}

export type Breakpoint = number | Dimensions;

export interface BaseTheme {
  colors: {
    [key: string]: string;
  };
  breakpoints?: {
    [key: string]: Breakpoint;
  };
  [key: string]: any;
}
export interface ResponsiveTheme extends BaseTheme {
  breakpoints: {
    [key: string]: Breakpoint;
  };
}
