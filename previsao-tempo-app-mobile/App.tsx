import * as React from "react";
import { SafeAreaView } from "react-native";
import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/Routes";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Black: require("./src/assets/fonts/Roboto-Black.ttf"),
    Bold: require("./src/assets/fonts/Roboto-Bold.ttf"),
    Medium: require("./src/assets/fonts/Roboto-Medium.ttf"),
    Regular: require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}
