import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { aBlack, fontMedium, fontRegular, RT, sideMargin } from "constants/brand";

interface Styles {
  wrap: ViewStyle;
  label: TextStyle;
  text: TextStyle;
}

export default StyleSheet.create<Styles>({
  wrap: {
    flexDirection: "column",
    marginVertical: sideMargin,
  },
  label: {
    fontFamily: fontRegular,
    fontSize: RT(16),
    lineHeight: RT(20),
    color: aBlack,
    opacity: 0.7,
  },
  text: {
    fontFamily: fontMedium,
    fontSize: RT(18),
    lineHeight: RT(24),
    color: aBlack,
  },
});
