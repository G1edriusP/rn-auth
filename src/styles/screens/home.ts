import { StyleSheet, ViewStyle } from "react-native";
import { aWhite, RT, SCREEN_WIDTH, sideMargin } from "constants/brand";
import { ImageStyle } from "react-native-fast-image";

interface Styles {
  wrap: ViewStyle;
  content: ViewStyle;
  image: ImageStyle;
  loading: ViewStyle;
}

const imageSize = SCREEN_WIDTH - sideMargin * 2;

export default StyleSheet.create<Styles>({
  wrap: {
    backgroundColor: aWhite,
  },
  content: {
    flexGrow: 1,
    padding: sideMargin,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: RT(8),
    marginBottom: sideMargin / 1.5,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
