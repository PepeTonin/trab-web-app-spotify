import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Linking from "expo-linking";
import * as Crypto from "expo-crypto";
import * as encoding from "text-encoding";
import { decode as atob, encode as btoa } from "base-64";

export async function redirectToAuthCodeFlow(clientId: string) {
  const verifier = generateCodeVerifier(128);

  const challenge = await generateCodeChallenge(verifier);

  await AsyncStorage.setItem("verifier", verifier);

  const params = new URLSearchParams();
  params.append("client_id", clientId);
  params.append("response_type", "code");
  params.append("redirect_uri", "exp://192.168.1.130:8081");
  params.append(
    "scope",
    "user-read-private user-read-email user-top-read playlist-read-collaborative"
  );
  params.append("code_challenge_method", "S256");
  params.append("code_challenge", challenge);

  Linking.openURL(
    `https://accounts.spotify.com/authorize?${params.toString()}`
  );
}

function generateCodeVerifier(length: number) {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier: string) {
  const data = new encoding.TextEncoder().encode(codeVerifier);
  const digest = await Crypto.digest(Crypto.CryptoDigestAlgorithm.SHA256, data);
  return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function getAccessToken(
  clientId: string,
  code: string
): Promise<string> {
  const verifier = await AsyncStorage.getItem("verifier");

  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", "exp://192.168.1.130:8081");
  params.append("client_id", clientId);
  params.append("code_verifier", verifier!);

  console.log(params.toString());

  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });
  return await result.json();
  // const { access_token } = await result.json();
  // return access_token;
}
