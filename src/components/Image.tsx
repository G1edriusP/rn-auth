import React, { memo } from "react";

// Components
import { StyleProp } from "react-native";
import FastImage, { ResizeMode, ImageStyle } from "react-native-fast-image";

interface Props {
  uri: string;
  style: StyleProp<ImageStyle>;
  resizeMode: ResizeMode;
}

export const Image: React.FC<Props> = memo(({ uri, style, resizeMode }): JSX.Element => {
  return (
    <FastImage
      style={style}
      source={{ uri: uri }}
      resizeMode={resizeMode || FastImage.resizeMode.cover}
    />
  );
});
