import React, { memo } from "react";

// Styling
import styles from "styles/components/labelText";

// Components
import { View, Text } from "react-native";

interface Props {
  label: string;
  text: string;
}

export const LabelText: React.FC<Props> = memo(({ label, text }): JSX.Element => {
  return (
    <View style={styles.wrap}>
      <Text numberOfLines={1} style={styles.label}>
        {label}
      </Text>
      <Text numberOfLines={2} style={styles.text}>
        {text}
      </Text>
    </View>
  );
});
