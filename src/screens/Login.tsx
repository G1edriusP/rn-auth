import React, { useState } from "react";
import { useCallbackOne } from "use-memo-one";

// Styling
import styles from "styles/screens/login";

// Components
import { View } from "react-native";
import { Input, Button } from "components";
import { Logo } from "assets/svg";

// Other
import { LoginScreenProps, UserInfo } from "constants/types";
import { NAV } from "constants/navigation";
import { RT } from "constants/brand";
import { Client } from "utils/api/Client";
import { AxiosError, AxiosResponse } from "axios";
import { getToken, setToken } from "utils/helpers/token";

enum Fields {
  username = "username",
  password = "password",
}

export default ({ route, navigation: { navigate } }: LoginScreenProps) => {
  const [user, setUser] = useState<UserInfo>({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Change loading state
  const onLoadingChange = useCallbackOne(value => setIsLoading(value), []);

  // On input text change write new value to user state field depending on which input it's being typed on
  const onChangedText = useCallbackOne((field: string, text: string) => {
    setUser(old => ({ ...old, [field]: text }));
  }, []);

  // If login returned success then navigate to home screen
  const onLoginSuccess = useCallbackOne(async (response: AxiosResponse) => {
    const { token } = response;
    await setToken(token, "accessToken").catch(e => console.log(e));
    navigate(NAV.HOME);
    onLoadingChange(false);
  }, []);

  // If logind returned error show alert
  const onLoginError = useCallbackOne((error: AxiosError) => {
    // TODO: show alert
    console.log(error);
    onLoadingChange(false);
  }, []);

  // Send API request to try to login user
  const onLoginPress = useCallbackOne(() => {
    onLoadingChange(true);
    // Get Singleton instance
    const client = Client.getInstance();
    // Make a request
    client.getCredentials(user).then(onLoginSuccess, onLoginError);
  }, [user]);

  return (
    <View style={styles.wrap}>
      <View style={styles.content}>
        <Logo size={RT(48)} />
        <View style={styles.inputs}>
          <Input
            value={user.username}
            onChangeText={text => onChangedText(Fields.username, text)}
            editable={!isLoading}
            placeholder={"Email"}
            loading={isLoading}
          />
          <Input
            value={user.password}
            onChangeText={text => onChangedText(Fields.password, text)}
            editable={!isLoading}
            placeholder={"Password"}
            secureTextEntry
            loading={isLoading}
          />
        </View>
      </View>
      <Button title={"Login"} onPress={onLoginPress} style={styles.button} loading={isLoading} />
    </View>
  );
};
