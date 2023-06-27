import {BaseTheme} from '../theme';
import {bg, BgProps} from './bg';
import {color, ColorProps} from './color';

export const all = [color, bg];

export type AllProps<Theme extends BaseTheme> = ColorProps<Theme> &
  BgProps<Theme>;
