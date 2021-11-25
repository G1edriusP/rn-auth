// Navigation
import { NavigationContainer } from "@react-navigation/native";

import {
  CardStyleInterpolators,
  createStackNavigator,
  StackCardInterpolationProps,
  StackCardStyleInterpolator,
  StackHeaderProps,
  StackNavigationOptions,
} from "@react-navigation/stack";

// Components
import { Platform } from "react-native";
import { Header } from "components";

// Screens
import HomeScreen from "screens/Home";
import LoginScreen from "screens/Login";

// Other
import { NAV } from "constants/navigation";
import { RootStackParams } from "constants/types";
import React from "react";

// Navigators
const RootStack = createStackNavigator<RootStackParams>();

// Utils
const forFade: StackCardStyleInterpolator = ({ current }: StackCardInterpolationProps) => ({
  cardStyle: { opacity: current.progress },
});
const cardStyleInterpolator: StackCardStyleInterpolator = Platform.select({
  android: CardStyleInterpolators.forFadeFromBottomAndroid,
  default: forFade,
});
const noHeader: StackNavigationOptions = { headerShown: false, gestureEnabled: false };
const customHeader: StackNavigationOptions = {
  cardStyleInterpolator,
  gestureEnabled: false,
  header: (props: StackHeaderProps) => <Header {...props} />,
};

const InitNavigator = () => (
  <RootStack.Navigator>
    <RootStack.Screen name={NAV.LOGIN} component={LoginScreen} options={noHeader} />
    <RootStack.Screen name={NAV.HOME} component={HomeScreen} options={customHeader} />
  </RootStack.Navigator>
);

export default () => {
  return (
    <NavigationContainer>
      <InitNavigator />
    </NavigationContainer>
  );
};
