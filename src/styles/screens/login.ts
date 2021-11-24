import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { aWhite, sideMargin } from "constants/brand";

interface Styles {
  wrap: ViewStyle;
}

export default StyleSheet.create<Styles>({
  wrap: {
    flex: 1,
    backgroundColor: aWhite,
    alignItems: "center",
    padding: sideMargin,
  },
});
