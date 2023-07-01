import {PropsWithChildren, useMemo} from 'react';
import {useWindowDimensions} from 'react-native';
import {BaseTheme, useTheme} from '../theme';
import {Parser, TRawProps} from './types';

export function useStyle<
  Theme extends BaseTheme,
  TProps extends PropsWithChildren<TRawProps>,
>(parser: Parser<Theme, TProps>, props: TProps) {
  const {parse, properties} = parser;
  const theme = useTheme<Theme>();
  const dimensions = useWindowDimensions();
  const parsedProps: TProps = useMemo(() => {
    const styleProps = {} as TProps;
    const noneStyleProps = {} as TProps;
    for (const key in props) {
      properties.includes(key)
        ? (styleProps[key] = props[key])
        : (noneStyleProps[key] = props[key]);
    }
    const {style: styleProp, ...restProps} = noneStyleProps;

    const parsedStyle = parse(styleProps, {theme, dimensions});
    return {
      style: [parsedStyle, styleProp].filter(Boolean),
      ...restProps,
    } as TProps;
  }, [theme, dimensions, parse, props, properties]);

  return parsedProps;
}
