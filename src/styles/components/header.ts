import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { aBlack, fontMedium, RT, SCREEN_WIDTH, sideMargin } from "constants/brand";

interface Styles {
  wrap: ViewStyle;
  button: ViewStyle;
}

export default StyleSheet.create<Styles>({
  wrap: {
    shadowColor: aBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 6,
    backgroundColor: aBlack,
  },
  button: {
    width: "100%",
    height: RT(60),
    alignItems: "flex-end",
    justifyContent: "center",
    paddingHorizontal: sideMargin,
    backgroundColor: "white",
  },
});
