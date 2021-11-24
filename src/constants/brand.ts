import { Dimensions, Platform, PixelRatio } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("screen");

export const RT = (size: number, sameForAll: boolean = false): number => {
  const brandSize = size * 0.846;
  const scale = SCREEN_WIDTH / 320;
  const newSize = Math.min(brandSize * scale, brandSize * 2); // Max x2
  if (Platform.OS === "ios" || sameForAll) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.max(brandSize, Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2);
};

export const sideMargin = RT(16);

// Fonts
export const fontRegular = "Montserrat-Regular";
export const fontMedium = "Montserrat-Medium";

// Colors
export const aBlack = "#000000";
export const aWhite = "#FFFFFF";
export const aOrange = "#F58840";
export const aRed = "#B85252";
