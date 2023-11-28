import { View, Text } from "react-native";

import { styles } from "./style";

import { NavigationProps } from "../../routes/Routes";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

export default function Home({ navigation }: NavigationProps) {
  function handleIniciar() {
    navigation.navigate("BuscaLocal");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bem vindo ao aplicativo de previsão do tempo
      </Text>

      <PrimaryButton innerText="Iniciar" onPress={handleIniciar} />
    </View>
  );
}
