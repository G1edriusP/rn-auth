import { StyleSheet, TextStyle } from "react-native";
import { aBlack, fontMedium, RT, SCREEN_WIDTH, sideMargin } from "constants/brand";

interface Styles {
  input: TextStyle;
}

export default StyleSheet.create<Styles>({
  input: {
    borderWidth: RT(1),
    borderRadius: RT(8),
    borderColor: aBlack,
    width: "100%",
    height: RT(46),
    fontFamily: fontMedium,
    fontSize: RT(16),
    paddingHorizontal: sideMargin,
    marginBottom: sideMargin,
  },
});
