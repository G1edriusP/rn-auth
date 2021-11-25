import React, { useLayoutEffect, useState } from "react";

// Styling
import styles from "styles/screens/home";

// Components
import { View, Text } from "react-native";

// Other
import { HomeScreenProps, User } from "constants/types";
import { Client } from "utils/api/Client";
import { useCallbackOne } from "use-memo-one";
import { AxiosError } from "axios";
import { LabelText, Image } from "components";

const initialParams: User = {
  uuid: "",
  image: "",
  firstName: "",
  lastName: "",
  address: "",
  phone: "",
};

export default ({ route, navigation }: HomeScreenProps) => {
  const [user, setUser] = useState<User>(initialParams);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onLoadingChange = useCallbackOne(value => setIsLoading(value), []);

  // If request returned success then save info to state
  const onGetSuccess = useCallbackOne((response: User) => {
    setUser(response);
    onLoadingChange(false);
  }, []);

  // If request returned error show alert
  const onGetError = useCallbackOne((error: AxiosError) => {
    // TODO: show alert
    console.log(error);
    onLoadingChange(false);
  }, []);

  useLayoutEffect(() => {
    onLoadingChange(true);
    const client = Client.getInstance();
    client.getUser().then(onGetSuccess, onGetError);
  }, []);

  console.log(user);

  return (
    <View style={styles.wrap}>
      <Image />
      <LabelText label='Name' text={`${user.firstName} ${user.lastName}`} />
      <LabelText label='Address' text={user.address} />
      <LabelText label='Phone' text={user.phone} />
    </View>
  );
};
