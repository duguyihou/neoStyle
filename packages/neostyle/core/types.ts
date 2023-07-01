import {PropsWithChildren} from 'react';
import {BaseTheme, Dimensions} from '../theme';
import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {AllProps} from '../style';

export type Context<Theme> = {
  theme: Theme;
  dimensions: Dimensions | null;
};

export type StyleFn<
  TProps extends {[key: string]: any} = {[key: string]: any},
  Theme extends BaseTheme = BaseTheme,
  S extends keyof any = string,
> = (
  props: TProps,
  context: Context<Theme>,
) => {
  [key in S]?: any;
};

export interface StyleFns<
  TProps extends {[key: string]: any},
  Theme extends BaseTheme = BaseTheme,
  P extends keyof TProps = keyof TProps,
> {
  property: P;
  fn: StyleFn<TProps, Theme>;
}

export type RNStyleProperty =
  | keyof ViewStyle
  | keyof TextStyle
  | keyof ImageStyle;

export type RNStyle =
  | ViewStyle
  | TextStyle
  | ImageStyle
  | ((...args: any[]) => StyleProp<ViewStyle>);

export type BaseResponsiveValue<
  Value,
  B extends BaseTheme['breakpoints'],
  R = {[Key in keyof B]: {[key in Key]: Value}},
> = Partial<{
  [K in keyof B]: Value;
}> &
  R[keyof R];

export type ResponsiveValue<Value, B extends BaseTheme['breakpoints']> =
  | Value
  | BaseResponsiveValue<Value, B>;

export type PropValue = string | number | undefined | null;

export type TRawProps = {[key: string]: any; style?: StyleProp<RNStyle>};

export type Parser<
  Theme extends BaseTheme,
  TProps extends PropsWithChildren<TRawProps>,
> = {
  parse: (props: TProps, context: Context<Theme>) => RNStyle;
  properties: (keyof TProps)[];
};

export type ParserConfig<
  Theme extends BaseTheme,
  TProps extends AllProps<Theme>,
> = {
  fns: {[key in keyof TProps]: StyleFn};
  properties: (keyof TProps)[];
};
