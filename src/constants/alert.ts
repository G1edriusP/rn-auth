import { AlertButton } from "react-native";
import { resetNavigation } from "utils/helpers/other";
import { removeToken } from "utils/helpers/token";
import { NAV } from "./navigation";
import { AlertParams } from "./types";

export const wrongLogin = (): AlertParams => ({
  title: "Unsuccessful login",
  message: "There was an error while logging in. Email or password could be wrong.",
  buttons: [{ text: "Try again" }] as AlertButton[],
});

export const sessionsExpired = (dispatch: any): AlertParams => ({
  title: "Session has expired",
  message: "Try logging in again.",
  buttons: [
    {
      text: "Ok",
      onPress: async () => {
        await removeToken("accessToken")
          .then(() => {
            dispatch(resetNavigation(NAV.LOGIN));
          })
          .catch(e => console.log(e));
      },
    },
  ] as AlertButton[],
});
