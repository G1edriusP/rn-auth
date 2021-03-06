import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NAV } from "constants/navigation";
import { AlertButton } from "react-native";

// Navigators
export type RootStackParams = {
  [NAV.SPLASH]: undefined;
  [NAV.LOGIN]: undefined;
  [NAV.HOME]: undefined;
};

// Screen props
export type SplashScreenProps = NativeStackScreenProps<RootStackParams, NAV.SPLASH>;
export type LoginScreenProps = NativeStackScreenProps<RootStackParams, NAV.LOGIN>;
export type HomeScreenProps = NativeStackScreenProps<RootStackParams, NAV.HOME>;

// Svg props
export interface SvgProps {
  size: number | string;
  color?: string;
}

// Api request objects
export type UserInfo = {
  username: string;
  password: string;
};

// Api response objects
export type Credentials = {
  token: string;
  refreshToken: string;
};
export type User = {
  uuid: string;
  image: string;
  firstName: string;
  lastName: string;
  address: string;
  phone: string;
};

export type KeychainConst = {
  accessToken: string;
};
export type AuthConfig = {
  Authorization: string;
};

export type AlertParams = {
  title: string;
  message: string;
  buttons: AlertButton[];
};
