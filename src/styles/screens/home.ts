import { StyleSheet, ViewStyle } from "react-native";
import { aWhite, sideMargin } from "constants/brand";

interface Styles {
  wrap: ViewStyle;
}

export default StyleSheet.create<Styles>({
  wrap: {
    flex: 1,
    backgroundColor: aWhite,
    padding: sideMargin,
  },
});
