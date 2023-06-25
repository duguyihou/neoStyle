import {BaseTheme} from '../theme';
import { color, ColorProps } from './color'

export const all = [color];

export type AllProps<Theme extends BaseTheme> = ColorProps<Theme>
