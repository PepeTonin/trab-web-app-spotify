import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../global/colors";

const { height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: height/8,
  },
  title: {
    textAlign: "center",
    color: Colors.blue_800,
    fontFamily: "Bold",
    fontSize: 24,
    marginBottom: 20,
  }
})