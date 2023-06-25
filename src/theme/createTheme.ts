import {BaseTheme} from './types';

export function createTheme<T extends BaseTheme>(configuration: T): T {
  return configuration;
}
