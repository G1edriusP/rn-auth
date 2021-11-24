import React from "react";

// Styling
import styles from "styles/screens/login";

// Components
import { View, Text } from "react-native";
import { Logo } from "assets/svg";

// Other
import { LoginScreenProps } from "constants/types";
import { NAV } from "constants/navigation";
import { aBlack, fontMedium, fontRegular, RT } from "constants/brand";

export default ({ route, navigation }: LoginScreenProps) => {
  return (
    <View style={styles.wrap}>
      <Logo size={RT(48)} />
      <Text>Login screen</Text>
    </View>
  );
};
