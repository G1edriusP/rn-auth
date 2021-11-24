import React from "react";

// Components
import { View, Text } from "react-native";

// Other
import { HomeScreenProps } from "constants/types";

export default ({ route, navigation }: HomeScreenProps) => {
  return (
    <View>
      <Text>Home screen</Text>
    </View>
  );
};
