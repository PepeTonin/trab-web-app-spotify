import { StyleSheet } from "react-native";

import { Colors } from "../../global/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue_500,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 15,
  },
  text: {
    color: Colors.gray_100,
    fontFamily: "Bold",
    fontSize: 18,
  },
});
