import {typography, TypographyProps} from './typography';
import {BaseTheme} from '../theme';
import {bg, BgProps} from './bg';
import {border, BorderProps} from './border';
import {color, ColorProps} from './color';
import {layout, LayoutProps} from './layout';
import {spacing, SpacingProps} from './space';

export const all = [color, bg, ...layout, ...spacing, border, ...typography];

export type AllProps<Theme extends BaseTheme> = ColorProps<Theme> &
  BgProps<Theme> &
  LayoutProps<Theme> &
  SpacingProps<Theme> &
  BorderProps<Theme> &
  TypographyProps<Theme>;
