import {StyleSheet, ViewStyle} from 'react-native';
import {AllProps} from '../style';
import {BaseTheme} from '../theme';
import {Context, ParserConfig, RNStyle} from './types';

export function createParser<
  Theme extends BaseTheme,
  TProps extends AllProps<Theme>,
>(config: ParserConfig<Theme, TProps>) {
  const {fns, properties} = config;
  const parse = (props: TProps, context: Context<Theme>): RNStyle => {
    const styles: ViewStyle = {};

    for (const key in props) {
      const prop = fns[key](props, context);
      for (const styleKey in prop) {
        styles[styleKey as keyof ViewStyle] = prop[styleKey];
      }
    }

    const {stylesheet} = StyleSheet.create({stylesheet: styles});
    return stylesheet;
  };
  return {parse, properties};
}
