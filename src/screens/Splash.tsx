import React, { useLayoutEffect } from "react";

// Styling
import styles from "styles/screens/splash";
import { RT } from "constants/brand";

// Components
import { View } from "react-native";
import { Logo } from "assets/svg";

// Other
import { SplashScreenProps } from "constants/types";
import { checkIfLoggedIn } from "utils/helpers/other";

export default ({ route, navigation: { dispatch } }: SplashScreenProps) => {
  useLayoutEffect(() => {
    checkIfLoggedIn(dispatch);
  }, []);

  return (
    <View style={styles.wrap}>
      <Logo size={RT(57)} />
    </View>
  );
};
