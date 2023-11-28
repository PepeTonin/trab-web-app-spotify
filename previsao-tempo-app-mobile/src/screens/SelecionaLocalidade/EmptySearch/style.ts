import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../../global/colors";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: height / 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Bold",
    fontSize: 20,
    color: Colors.red_500,
    marginRight: 6
  },
});
