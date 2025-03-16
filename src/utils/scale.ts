import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

/**
 * 기준이 될 스크린의 사이즈
 */
export const basicDimensions = {
  screenHeight: 932,
  screenWidth: 430,
};

const guideScale = Math.sqrt(
  basicDimensions.screenWidth * basicDimensions.screenHeight,
);

export const scaled = Math.sqrt(width * height) / guideScale;

const horizontalPer = width / basicDimensions.screenWidth;
const verticalPer = height / basicDimensions.screenHeight;

/**
 * 너비 비율로 변경 -> 사용법: scaledWidth(width: 기준 너비 값)
 */
export const scaledWidth = (size: number) => horizontalPer * size;

/**
 * 높이 비율로 변경 -> 사용법: scaledHeight(height: 기준 높이 값)
 */
export const scaledHeight = (size: number) => verticalPer * size;

/**
 * 높이, 너비 비율 고려해서 변경 -> 사용법: scaledModerate(size: 기준 값)
 */
export const scaledModerate = (size: number) => scaled * size;
