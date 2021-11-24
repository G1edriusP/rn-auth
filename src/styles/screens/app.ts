import { StyleSheet, ViewStyle } from "react-native";
import { aWhite } from "constants/brand";

interface Styles {
  root: ViewStyle;
  content: ViewStyle;
}

export default StyleSheet.create<Styles>({
  root: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: aWhite,
  },
  content: {
    flex: 1,
    backgroundColor: aWhite,
  },
});
