import { StyleSheet } from "react-native";
import { Colors } from "../../../global/colors";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.blue_200,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
  outerContainer: {
    flexDirection: "row",
  },
  innerContainer: {},
  dia: {
    fontFamily: "Bold",
    color: Colors.blue_800,
    fontSize: 22
  },
  temperaturas: {
    fontSize: 16,
    fontFamily: "Medium",
    color: Colors.blue_800,
  },
  tempo: {
    fontSize: 18,
    fontFamily: "Regular",
    color: Colors.blue_800,
    flex: 1,
    textAlignVertical: "bottom",
  },
});
