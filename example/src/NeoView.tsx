import {View, StyleProp, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {bg, BgProps, compose, useStyle} from 'neostyle';
import {Theme} from './theme';

type StyleProps = BgProps<Theme> & {
  style?: StyleProp<ViewStyle>;
};
const styleParser = compose<Theme, StyleProps>([bg]);

type Props = PropsWithChildren<StyleProps>;

const NeoView = (props: Props) => {
  const styles = useStyle(styleParser, props);

  return <View {...styles} />;
};

export default NeoView;
