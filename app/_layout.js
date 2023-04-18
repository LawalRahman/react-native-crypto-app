import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider } from "native-base";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded] = useFonts({
    ManropeBold: require("../assets/fonts/Manrope-Bold.ttf"),
    ManropeMedium: require("../assets/fonts/Manrope-Medium.ttf"),
    ManropeRegular: require("../assets/fonts/Manrope-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) await SplashScreen.hideAsync();
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;
  return (
    <NativeBaseProvider>
      <Stack onLayout={onLayoutRootView} />
    </NativeBaseProvider>
  );
};

export default Layout;
