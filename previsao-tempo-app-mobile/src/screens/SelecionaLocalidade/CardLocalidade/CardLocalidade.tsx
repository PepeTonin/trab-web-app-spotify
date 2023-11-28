import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { styles } from "./style";

import { Colors } from "../../../global/colors";

interface CardLocalidadeProps {
  onPress: (id: string) => void;
  codigo: string;
  nomeCidade: string;
  ufLocalidade: string;
}
export default function CardLocalidade({
  onPress,
  codigo,
  nomeCidade,
  ufLocalidade,
}: CardLocalidadeProps) {
  return (
    <Pressable style={styles.container} onPress={() => onPress(codigo)}>
      <Text style={styles.ufLocalidade}>{ufLocalidade}</Text>
      <View style={styles.innerContainer}>
        <Text style={styles.nomeCidade}>{nomeCidade}</Text>
        <Text style={styles.codigo}>Código: {codigo}</Text>
      </View>
      <AntDesign name="arrowright" size={32} color={Colors.gray_100} />
    </Pressable>
  );
}
