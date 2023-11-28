import { View, Text } from "react-native";

import { styles } from "./style";

import { conversaoPrevisaoTempo } from "../../../utils/convertePrevisaoTempo";

interface CardPrevisaoDiaProps {
  item: Previsao;
}

interface Previsao {
  dia: string;
  minima: string;
  maxima: string;
  iuv: string;
  tempo: string;
}

export default function CardPrevisaoDia({ item }: CardPrevisaoDiaProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.dia}>{item.dia.replaceAll("-", "/")}</Text>
      <View style={styles.outerContainer}>
        <Text style={styles.tempo}>{conversaoPrevisaoTempo(item.tempo)}</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.temperaturas}>Mínima: {item.minima} C°</Text>
          <Text style={styles.temperaturas}>Máxima: {item.maxima} C°</Text>
        </View>
      </View>
    </View>
  );
}
