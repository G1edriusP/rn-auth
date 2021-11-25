import { StyleSheet, ViewStyle } from "react-native";
import { aWhite } from "constants/brand";

interface Styles {
  wrap: ViewStyle;
}

export default StyleSheet.create<Styles>({
  wrap: {
    flex: 1,
    backgroundColor: aWhite,
  },
});
