import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NAV } from "constants/navigation";

// Navigators
export type RootStackParams = {
  [NAV.LOGIN]: undefined;
  [NAV.HOME]: undefined;
};

// Screen props
export type LoginScreenProps = NativeStackScreenProps<RootStackParams, NAV.LOGIN>;
export type HomeScreenProps = NativeStackScreenProps<RootStackParams, NAV.HOME>;

// Svg props
export interface SvgProps {
  size: number;
  color?: string;
}
