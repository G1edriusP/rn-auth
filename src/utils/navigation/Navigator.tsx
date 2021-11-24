// Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import HomeScreen from "screens/Home";
import LoginScreen from "screens/Login";

// Other
import { NAV } from "constants/navigation";
import { RootStackParams } from "constants/types";
import React from "react";

// Navigators
const RootStack = createNativeStackNavigator<RootStackParams>();

const InitNavigator = () => (
  <RootStack.Navigator>
    <RootStack.Screen name={NAV.LOGIN} component={LoginScreen} />
    <RootStack.Screen name={NAV.HOME} component={HomeScreen} />
  </RootStack.Navigator>
);

export default () => {
  return (
    <NavigationContainer>
      <InitNavigator />
    </NavigationContainer>
  );
};
