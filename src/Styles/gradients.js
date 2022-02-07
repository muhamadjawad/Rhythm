import Colors from './Colors';
import {
  COLOR_BLUE,
  COLOR_PEACH,
  COLOR_PURPLE,
  COLOR_SKIN,
  COLOR_WHITE,
} from './Colors/colorConstants';

export const GRADIENT_PURPLE_BLUE = [
  {color: COLOR_PURPLE, offset: '0', opacity: '1'},
  {color: COLOR_BLUE, offset: '1', opacity: '1'},
];

export const GRADIENT_SKIN_PURPLE = [
  {color: COLOR_SKIN, offset: '0', opacity: '1'},
  {color: COLOR_PURPLE, offset: '1', opacity: '1'},
];

export const GRADIENT_BLUE_PURPLE = [
  // {color: COLOR_BLUE, offset: '0', opacity: '1'},
  {color: COLOR_PEACH, offset: '1', opacity: '1'},
];

export const GRADIENT_TEAL_GREY = [
  {color: Colors.COLOR_SECONDARY, offset: '0', opacity: '1'},
  {color: Colors.COLOR_TERTIARY, offset: '1', opacity: '1'},
];

export const GRADIENT_CORAL_GREY = [
  {color: Colors.COLOR_PRIMARY, offset: '0', opacity: '1'},
  {color: Colors.COLOR_SECONDARY, offset: '1', opacity: '1'},
];

export const GRADIENT_CORAL = [
  {color: Colors.COLOR_PRIMARY, offset: '0', opacity: '1'},
  {color: Colors.COLOR_PRIMARY, offset: '1', opacity: '1'},
];

export const GRADIENT_WHITE = [
  {color: Colors.COLOR_WHITE, offset: '0', opacity: '1'},
  {color: Colors.COLOR_WHITE, offset: '1', opacity: '1'},
];

export const GRADIENT_TURTOISE = [
  {color: Colors.COLOR_LIGHT_SECONDARY, offset: '0', opacity: '1'},
  {color: Colors.COLOR_LIGHT_SECONDARY, offset: '1', opacity: '1'},
];

export const GRADIENT_GREY = [
  {color: Colors.COLOR_TERTIARY, offset: '0', opacity: '1'},
  {color: Colors.COLOR_TERTIARY, offset: '1', opacity: '1'},
];

export const GRADIENT_SKIN = [
  {color: Colors.COLOR_SKIN, offset: '0', opacity: '1'},
  {color: Colors.COLOR_SKIN, offset: '1', opacity: '1'},
];
