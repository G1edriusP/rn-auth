import { StyleSheet, ViewStyle, TextStyle } from "react-native";
import { aWhite, sideMargin } from "constants/brand";

interface Styles {
  wrap: ViewStyle;
  logo: ViewStyle;
  inputs: ViewStyle;
  content: ViewStyle;
  button: ViewStyle;
}

export default StyleSheet.create<Styles>({
  wrap: {
    flex: 1,
    backgroundColor: aWhite,
    alignItems: "center",
    justifyContent: "space-between",
    padding: sideMargin,
    paddingTop: sideMargin * 3,
  },
  logo: {
    justifyContent: "center",
  },
  content: {
    flex: 0.6,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputs: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  button: {
    marginTop: sideMargin,
  },
});
