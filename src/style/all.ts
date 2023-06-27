import {BaseTheme} from '../theme';
import {bg, BgProps} from './bg';
import {color, ColorProps} from './color';
import {layout, LayoutProps} from './layout';

export const all = [color, bg, ...layout];

export type AllProps<Theme extends BaseTheme> = ColorProps<Theme> &
  BgProps<Theme> &
  LayoutProps<Theme>;
