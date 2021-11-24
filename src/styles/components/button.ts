import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { aBlack, aRed, aWhite, fontMedium, RT, SCREEN_WIDTH, sideMargin } from "constants/brand";

interface Styles {
  wrap: ViewStyle;
  title: TextStyle;
}

export default StyleSheet.create<Styles>({
  wrap: {
    width: SCREEN_WIDTH - sideMargin * 2,
    height: RT(46),
    backgroundColor: aRed,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RT(8),
  },
  title: {
    fontFamily: fontMedium,
    fontSize: RT(16),
    lineHeight: RT(24),
    color: aWhite,
  },
});
