import React, { memo } from "react";

// Styling
import styles from "styles/components/button";

// Components
import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from "react-native";

export const Button: React.FC<{
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}> = memo(({ title, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.wrap, style]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
});
