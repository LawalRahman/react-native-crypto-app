import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { Spinner } from "native-base";
import { useEffect, useState } from "react";
import { View } from "react-native";

const Index = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  useEffect(() => {
    (async () => {
      const appData = await AsyncStorage.getItem("isAppFirstLaunched");
      if (appData === null) {
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem("isAppFirstLaunched", "false");
      } else {
        setIsAppFirstLaunched(false);
      }
    })();
  }, []);
  if (isAppFirstLaunched === null) {
    return <Spinner />;
  }
  return (
    <View>
      {isAppFirstLaunched === true ? (
        <Redirect href="/onboarding" />
      ) : (
        <Redirect href="/login" />
      )}
    </View>
  );
};

export default Index;
