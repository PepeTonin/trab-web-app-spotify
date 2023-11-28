import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  redirectToAuthCodeFlow,
  getAccessToken,
} from "./src/utils/authSpotifyAPI";
import "react-native-url-polyfill/auto";
import * as Linking from "expo-linking";

export default function App() {
  const clientId = "ed2c3fc814af4707b6daf380cf133298";

  let url = Linking.useURL();

  const [isFetchingData, setIsFetchingData] = useState(true);
  const [authToken, setAuthToken] = useState("");
  const [redirectedFromAuthCodeFlow, setRedirectedFromAuthCodeFlow] =
    useState(false);
  const [code, setCode] = useState<string | null>(null);

  const getSearchParamFromURL = (url: string, param: string) => {
    const include = url.includes(param);
    if (!include) return null;
    const params = url.split(/([&,?,=])/);
    const index = params.indexOf(param);
    const value = params[index + 2];
    return value;
  };

  useEffect(() => {
    async function initialize() {
      if (!code) {
        redirectToAuthCodeFlow(clientId);
        setRedirectedFromAuthCodeFlow(true);
      } else {
        const accessToken = await getAccessToken(clientId, code);
        console.log(accessToken);
        setIsFetchingData(false);
      }
    }
    initialize();
  }, [code]);

  useEffect(() => {
    if (typeof url === "string") {
      const parsedCode = getSearchParamFromURL(url, "code");
      setCode(parsedCode);
    }
  }, [redirectedFromAuthCodeFlow, url]);

  return (
    <View style={styles.container}>
      <Text>SPOTIFY APP MOBILE</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#400073",
    alignItems: "center",
    justifyContent: "center",
  },
});
