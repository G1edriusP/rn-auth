import React, { memo, useState } from "react";
import { useCallbackOne } from "use-memo-one";

// Styling
import styles from "styles/components/header";
import { RT, sideMargin } from "constants/brand";

// Components
import { View, TouchableOpacity } from "react-native";
import { Logout } from "assets/svg";
import { CommonActions } from "@react-navigation/routers";

// Other
import { removeToken } from "utils/helpers/token";
import { StackHeaderProps } from "@react-navigation/stack";
import { NAV } from "constants/navigation";

export const Header = memo(({ route, navigation: { dispatch }, options }: StackHeaderProps) => {
  const { loading = true } = options;

  const [isLoading, setIsLoading] = useState(false);

  const onLoadingChange = useCallbackOne(value => setIsLoading(value), []);

  const resetNavigation = useCallbackOne(
    (): CommonActions.Action =>
      CommonActions.reset({
        index: 0,
        routes: [{ name: NAV.LOGIN }],
      }),
    [],
  );

  const onLogoutPress = useCallbackOne(async () => {
    onLoadingChange(true);
    await removeToken("accessToken")
      .then(() => {
        dispatch(resetNavigation);
        onLoadingChange(false);
      })
      .catch(e => console.log(e));
  }, []);

  return (
    <View style={styles.wrap}>
      <View style={styles.button}>
        {loading ? null : (
          <TouchableOpacity onPress={onLogoutPress} disabled={isLoading}>
            <Logout size={RT(24)} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
});
