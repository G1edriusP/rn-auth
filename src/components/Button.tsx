import React, { memo } from "react";

import { View, Text } from "react-native";

export const Button: React.FC<{ title: string }> = memo(({ title }) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
});
