import React, { memo } from "react";

// Styling
import styles from "styles/components/button";

// Components
import {
  View,
  Text,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
} from "react-native";
import { aWhite } from "constants/brand";

interface Props {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  loading?: boolean;
}

export const Button: React.FC<Props> = memo(({ title, onPress, style, loading }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={loading}>
      <View style={[styles.wrap, style]}>
        {!loading ? (
          <Text style={styles.title}>{title}</Text>
        ) : (
          <View style={styles.loader}>
            <ActivityIndicator size={"small"} color={aWhite} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
});
