import { StyleSheet } from "react-native";
import { Colors } from "../../global/colors";

export const styles = StyleSheet.create({
  label: {
    color: Colors.blue_800,
    fontFamily: "Bold",
    fontSize: 18,
    marginBottom: 4,
  },
  inputContainer: {
    backgroundColor: Colors.blue_200,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  inputText: {
    color: Colors.blue_800,
    fontFamily: "Medium",
    fontSize: 16,
  },
});
