import React, { memo } from "react";

// Components
import { StyleProp } from "react-native";
import FastImage, { ResizeMode, ImageStyle } from "react-native-fast-image";

interface Props {
  uri: string;
  style: StyleProp<ImageStyle>;
  resizeMode?: ResizeMode;
  onLoadEnd?: () => void;
}

export const Image: React.FC<Props> = memo(({ uri, style, resizeMode, onLoadEnd }): JSX.Element => {
  return (
    <FastImage
      style={style}
      source={{ uri: uri }}
      onLoadEnd={onLoadEnd}
      resizeMode={resizeMode || FastImage.resizeMode.cover}
    />
  );
});
