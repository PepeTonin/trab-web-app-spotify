import { Colors } from "./../../../global/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Colors.blue_800,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  ufLocalidade: {
    fontFamily: "Bold",
    fontSize: 32,
    color: Colors.gray_100,
  },
  innerContainer: {
    marginLeft: 16,
    flex: 1
  },
  nomeCidade: {
    fontFamily: "Bold",
    fontSize: 18,
    color: Colors.gray_100,
  },
  codigo: {
    fontFamily: "Medium",
    fontSize: 14,
    color: Colors.blue_200,
  },
});
