import React, { useEffect, useLayoutEffect, useState } from "react";
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
import { NAV } from "constants/navigation";
import { removeToken } from "utils/helpers/token";
import { resetNavigation } from "utils/helpers/other";
import { aBlack } from "constants/brand";

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
    // TODO: show alert
    await removeToken("accessToken")
      .then(() => {
        dispatch(resetNavigation(NAV.LOGIN));
      })
      .catch(e => console.log(e));
    onLoadingChange(false);
  }, []);

  useLayoutEffect(() => {
    onLoadingChange(true);
    const client = Client.getInstance();
    client.getUser().then(onGetSuccess, onGetError);
  }, []);

  useEffect(() => {
    setOptions({ loading: isLoading });
  }, [isLoading]);

  return (
    <ScrollView style={styles.wrap} contentContainerStyle={styles.content}>
      {isLoading ? (
        <View style={styles.loading}>
          <ActivityIndicator size='large' color={aBlack} />
        </View>
      ) : (
        <>
          <Image uri={user.image} style={styles.image} />
          <LabelText label='Name' text={`${user.firstName} ${user.lastName}`} />
          <LabelText label='Address' text={user.address} />
          <LabelText label='Phone' text={user.phone} />
        </>
      )}
    </ScrollView>
  );
};
