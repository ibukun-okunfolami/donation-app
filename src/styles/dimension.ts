import { Dimensions, PixelRatio } from 'react-native';

// 👇 baseline dimensions (e.g. iPhone X)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const maxScaleWidth = 500; // cap for phones/phablets to prevent tablet/ipad blowup

// --- Scaling helpers ---
const scale = (size: number) => {
  let { width, height } = Dimensions.get('window');
  const screenWidth = Math.min(width, height, maxScaleWidth); // use smaller dimension
  return (screenWidth / guidelineBaseWidth) * size;
};

const verticalScale = (size: number) => {
  let { width, height } = Dimensions.get('window');
  const screenHeight = Math.max(width, height); // use larger dimension
  return (screenHeight / guidelineBaseHeight) * size;
};

const moderateScale = (size: number, factor = 0.3) =>
  Math.round(size + (scale(size) - size) * factor);

// --- Font scaling (accounts for pixel density) ---
const responsiveFontScale = (size: number) => {
  const scaledSize = moderateScale(size);
  return Math.round(PixelRatio.roundToNearestPixel(scaledSize));
};

const responsiveWidth = (size: number) => {
  return Math.round(PixelRatio.roundToNearestPixel(size));
};

const responsiveHeight = (size: number) => {
  return Math.round(PixelRatio.roundToNearestPixel(size));
};

const responsiveSize = (
  size: number,
  axis: 'horizontal' | 'vertical' | 'moderate' = 'moderate',
): number => {
  switch (axis) {
    case 'horizontal':
      return scale(size); // width-based scaling
    case 'vertical':
      return verticalScale(size); // height-based scaling
    case 'moderate':
    default:
      return moderateScale(size); // smooth scaling
  }
};

const Size = responsiveSize;
const FontSize = responsiveFontScale;
const Width = responsiveWidth;
const Height = responsiveHeight;

export { Size, FontSize, Width, Height };
