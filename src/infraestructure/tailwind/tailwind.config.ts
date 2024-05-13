import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from './colors';


export const FONT_SIZES = {
  xxxxs: RFValue(8),
  xxxs: RFValue(9),
  xxs: RFValue(10),
  xs: RFValue(11),
  sm: RFValue(12),
  base: RFValue(13),
  lg: RFValue(14),
  xl: RFValue(15),
  '2xl': RFValue(16),
  '3xl': RFValue(17),
  '4xl': RFValue(18),
  '5xl': RFValue(19),
  '6xl': RFValue(20),
  '7xl': RFValue(21),
  '8xl': RFValue(22),
  '9xl': RFValue(23),
  '10xl': RFValue(24),
  '11xl': RFValue(25),
};
import {PADDING_CONTAINER} from './padding';

const padding = {
  container: '20px',
  separator: '20px',
};

const fontFamily = {
  black: ['Poppins-Black'],
  blackItalic: ['Poppins-BlackItalic'],
  bold: ['Poppins-Bold'],
  boldItalic: ['Poppins-BoldItalic'],
  extraBold: ['Poppins-ExtraBold'],
  extraBoldItalic: ['Poppins-ExtraBoldItalic'],
  extraLight: ['Poppins-ExtraLight'],
  extraLightItalic: ['Poppins-ExtraLightItalic'],
  italic: ['Poppins-Italic'],
  light: ['Poppins-Light'],
  lightItalic: ['Poppins-LightItalic'],
  medium: ['Poppins-Medium'],
  mediumItalic: ['Poppins-MediumItalic'],
  regular: ['Poppins-Regular'],
  semiBold: ['Poppins-SemiBold'],
  semiBoldItalic: ['Poppins-SemiBoldItalic'],
  thin: ['Poppins-Thin'],
  thinItalic: ['Poppins-ThinItalic'],
};

// const height = {
//   header: '6rem',
//   banner: '200px',
// };

// const margin = {
//   separator: '20px',
// };

const theme = {
  extend: {
    colors,
    fontFamily,
    padding,
    margin: padding,
    fontSize: {
      xxxs: [FONT_SIZES.xxxs, {lineHeight: '1.2'}],
      xxs: [FONT_SIZES.xxs, {lineHeight: '1.2'}],
      xs: [FONT_SIZES.xs, {lineHeight: '1.4'}],
      sm: [FONT_SIZES.sm, {lineHeight: '1.4'}],
      base: [FONT_SIZES.base, {lineHeight: '1.4' }],
      lg: [FONT_SIZES.lg, {lineHeight: '32px'}],
      xl: [FONT_SIZES.xl, {lineHeight: '1.5'}],
      '2xl': [FONT_SIZES['2xl'], {lineHeight: '1.2'}],
      '3xl': [FONT_SIZES['3xl'], {lineHeight: '1.2'}],
      '4xl': [FONT_SIZES['4xl'], {lineHeight: '1.2'}],
      '5xl': [FONT_SIZES['5xl'], {lineHeight: '1.2'}],
      '6xl': [FONT_SIZES['6xl'], {lineHeight: '1.2'}],
      '7xl': [FONT_SIZES['7xl'], {lineHeight: '1.2'}],
      '8xl': [FONT_SIZES['8xl'], {lineHeight: '1.2'}],
      '9xl': [FONT_SIZES['9xl'], {lineHeight: '1.2'}],
      '10xl': [FONT_SIZES['10xl'], {lineHeight: '1.2'}],
      '11xl': [FONT_SIZES['11xl'], {lineHeight: '1.2'}],
    }
  },
};

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    ...theme,
  },
};
