import {View, StyleProp, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {
  bg,
  BgProps,
  border,
  BorderProps,
  compose,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  useStyle,
} from 'neostyle';
import {Theme} from '../theme';

type StyleProps = {
  style?: StyleProp<ViewStyle>;
} & BgProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  BorderProps<Theme>;

const styleParser = compose<Theme, StyleProps>([bg, layout, spacing, border]);

type Props = PropsWithChildren<StyleProps>;

const NeoView = (props: Props) => {
  const styles = useStyle(styleParser, props);

  return <View {...styles} />;
};

export default NeoView;
