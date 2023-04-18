import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";

const Index = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  useEffect(() => {
    (async () => {
      const appData = await AsyncStorage.getItem("isAppFirstLaunched");
      if (appData === null) {
        console.log(appData);
        setIsAppFirstLaunched(true);
        AsyncStorage.setItem("isAppFirstLaunched", "false");
      } else {
        setIsAppFirstLaunched(false);
      }
    })();
  }, []);
  return (
    <View>
      {isAppFirstLaunched !== null ? (
        <Redirect href="/onboarding" />
      ) : (
        <Redirect href="/login" />
      )}
    </View>
  );
};

export default Index;
