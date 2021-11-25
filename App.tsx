import "react-native-gesture-handler";
import React from "react";

// Styling
import styles from "styles/screens/app";

// Components
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import Navigator from "utils/navigation/Navigator";

const App = (): JSX.Element => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.root}>
      <View style={styles.content}>
        <Navigator />
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
);

export default App;
