import {BaseTheme} from '../theme';
import {StyleFn, StyleFns, ParserConfig} from './types';
import {AllProps} from '../style';
import {createParser} from './createParser';

export function compose<
  Theme extends BaseTheme,
  TProps extends AllProps<Theme>,
>(configs: (StyleFns<TProps> | StyleFns<TProps>[])[]) {
  const config = (() => {
    const flattenedConfigs = configs.flat();
    const properties = flattenedConfigs.flatMap(each => each.property);
    const fns = flattenedConfigs.reduce(
      (acc, each) => ({[each.property]: each.fn, ...acc}),
      {} as {[key in keyof TProps]: StyleFn},
    );
    return {fns, properties};
  })() as ParserConfig<Theme, TProps>;

  const parser = createParser(config);
  return parser;
}
