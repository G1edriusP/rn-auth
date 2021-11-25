import React, { useEffect, useLayoutEffect, useState, memo } from "react";
import { useCallbackOne } from "use-memo-one";

// Styling
import styles from "styles/screens/home";

// Components
import { View, ActivityIndicator, ScrollView } from "react-native";
import { AxiosError } from "axios";
import { LabelText, Image } from "components";

// Other
import { HomeScreenProps, User } from "constants/types";
import { Client } from "utils/api/Client";
import { showAlert } from "utils/helpers/other";
import { aBlack } from "constants/brand";
import { sessionsExpired } from "constants/alert";

const initialParams: User = {
  uuid: "",
  image: "",
  firstName: "",
  lastName: "",
  address: "",
  phone: "",
};

export default ({ route, navigation: { dispatch, setOptions } }: HomeScreenProps) => {
  const [user, setUser] = useState<User>(initialParams);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const onLoadingChange = useCallbackOne(value => setIsLoading(value), []);

  // If request returned success then save info to state
  const onGetSuccess = useCallbackOne(async (response: User) => {
    setUser(response);
    onLoadingChange(false);
  }, []);

  // If request returned error show alert
  const onGetError = useCallbackOne(async (error: AxiosError) => {
    setUser({} as User);
    onLoadingChange(false);
    showAlert(sessionsExpired(dispatch));
  }, []);

  // Get user info on screen mount
  useLayoutEffect(() => {
    onLoadingChange(true);
    const client = Client.getInstance();
    client.getUser().then(onGetSuccess, onGetError);
  }, []);

  useEffect(() => {
    if (Object.keys(user).length) setOptions({ loading: isLoading });
  }, [isLoading, user]);

  // If session not expired and user state has info return content
  const Content: React.FC<{}> = memo(
    (): JSX.Element =>
      Object.keys(user).length ? (
        <>
          <Image uri={user.image} style={styles.image} />
          <LabelText label='Name' text={`${user.firstName} ${user.lastName}`} />
          <LabelText label='Address' text={user.address} />
          <LabelText label='Phone' text={user.phone} />
        </>
      ) : (
        <></>
      ),
  );

  return (
    <ScrollView style={styles.wrap} contentContainerStyle={styles.content}>
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size='large' color={aBlack} />
        </View>
      ) : (
        <Content />
      )}
    </ScrollView>
  );
};
