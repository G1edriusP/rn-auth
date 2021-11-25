import { KeychainConst } from "constants/types";
import {
  setInternetCredentials,
  getInternetCredentials,
  resetInternetCredentials,
  Result,
  SharedWebCredentials,
} from "react-native-keychain";

const Types: KeychainConst = {
  accessToken: "RN-AUTH_ACCESS-TOKEN",
};

const keychainSetToken = (token: string, type: string): Promise<false | Result> =>
  setInternetCredentials(type, type, token);
const keychainRemoveToken = (type: string): Promise<void> => resetInternetCredentials(type);
const keychainGetToken = async (type: string): Promise<string | null> => {
  const result: false | SharedWebCredentials = await getInternetCredentials(type);
  return result ? result.password : null;
};

export const setToken = async (token: string, type: string): Promise<void> => {
  if (type && token) {
    await keychainSetToken(token, Types[type as keyof KeychainConst]);
  }
};

export const removeToken = async (type: string): Promise<void> => {
  if (type) {
    await keychainRemoveToken(Types[type as keyof KeychainConst]);
  }
};

export const getToken = async (type: string): Promise<string | null> => {
  if (type) {
    return keychainGetToken(Types[type as keyof KeychainConst]);
  }
  return null;
};
