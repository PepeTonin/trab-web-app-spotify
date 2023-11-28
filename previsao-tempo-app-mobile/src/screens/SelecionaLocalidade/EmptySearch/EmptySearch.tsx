import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../../../global/colors";

import { styles } from "./style";

export default function EmptySearch() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nenhuma localidade encontrada</Text>
      <Entypo name="emoji-sad" size={26} color={Colors.red_500} />
    </View>
  );
}
