import { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";

import { styles } from "./style";

import { NavigationProps } from "../../routes/Routes";
import { buscaPrevisaoTempo7Dias } from "../../utils/apiRequests";
import CardPrevisaoDia from "./CardPrevisaoDia/CardPrevisaoDia";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { Colors } from "../../global/colors";

export default function Resultado({ navigation, route }: NavigationProps) {
  const [isLoading, setIsLoading] = useState(true);

  const [dados7Dias, setDados7Dias] = useState([]);

  useEffect(() => {
    async function iniciliazaDados() {
      const params: { id: string } = route.params as {
        id: string;
      };
      const previsao7Dias = await buscaPrevisaoTempo7Dias(params.id);
      setDados7Dias(previsao7Dias);
      setIsLoading(false);
    }
    iniciliazaDados();
  }, []);

  function handleNovaBusca() {
    navigation.navigate("BuscaLocal");
  }

  if (isLoading) {
    return (
      <ActivityIndicator
        style={{ marginTop: 50 }}
        size="large"
        color={Colors.blue_800}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={dados7Dias}
        renderItem={({ item }) => <CardPrevisaoDia item={item} />}
        keyExtractor={(item: any) => item.dia}
        ListFooterComponent={() => (
          <PrimaryButton innerText="Nova Busca" onPress={handleNovaBusca} />
        )}
      />
    </View>
  );
}
