import React, { useState } from "react";
import { useCallbackOne } from "use-memo-one";

// Styling
import styles from "styles/screens/login";

// Components
import { View } from "react-native";
import { Input, Button } from "components";
import { Logo } from "assets/svg";

// Other
import { LoginScreenProps } from "constants/types";
import { NAV } from "constants/navigation";
import { RT } from "constants/brand";

interface UserInfo {
  email: string;
  password: string;
}

enum Fields {
  email = "email",
  password = "password",
}

export default ({ route, navigation }: LoginScreenProps) => {
  const [user, setUser] = useState<UserInfo>({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChangedText = useCallbackOne((field: string, text: string) => {
    setUser(old => ({ ...old, [field]: text }));
  }, []);

  const onLoginPress = useCallbackOne(() => {
    console.log("Login");
  }, []);

  console.log(user);

  return (
    <View style={styles.wrap}>
      <View style={styles.content}>
        <Logo size={RT(48)} />
        <View style={styles.inputs}>
          <Input
            value={user.email}
            onChangeText={text => onChangedText(Fields.email, text)}
            editable={!isLoading}
            placeholder={"Email"}
          />
          <Input
            value={user.password}
            onChangeText={text => onChangedText(Fields.password, text)}
            editable={!isLoading}
            placeholder={"Password"}
            secureTextEntry
          />
        </View>
      </View>
      <Button title={"Login"} onPress={onLoginPress} style={styles.button} />
    </View>
  );
};
