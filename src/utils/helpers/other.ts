import { getToken } from "./token";
import { NAV } from "constants/navigation";
import SplashScreen from "react-native-splash-screen";
import { CommonActions } from "@react-navigation/routers";
import { Alert } from "react-native";
import { AlertParams } from "constants/types";

export const showAlert = ({ title, message, buttons }: AlertParams): void => {
  Alert.alert(title, message, buttons);
};

export const resetNavigation = (screen: string): CommonActions.Action =>
  CommonActions.reset({
    index: 0,
    routes: [{ name: screen }],
  });

export const checkIfLoggedIn = async (dispatch: any) => {
  const accessToken = await getToken("accessToken").catch(e => console.log(e));
  if (accessToken) {
    dispatch(resetNavigation(NAV.HOME));
  } else {
    dispatch(resetNavigation(NAV.LOGIN));
  }
  SplashScreen.hide();
};
