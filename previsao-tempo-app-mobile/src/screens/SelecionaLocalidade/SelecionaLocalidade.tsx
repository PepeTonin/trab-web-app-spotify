import { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";

import { styles } from "./style";

import { NavigationProps } from "../../routes/Routes";
import { buscaLocalidades } from "../../utils/apiRequests";
import CardLocalidade from "./CardLocalidade/CardLocalidade";
import { Colors } from "../../global/colors";
import EmptySearch from "./EmptySearch/EmptySearch";

interface Localidade {
  id: string;
  uf: string;
  nome: string;
}

export default function SelecionaLocalidade({
  navigation,
  route,
}: NavigationProps) {
  const [isLoading, setIsLoading] = useState(true);

  const [localidades, setLocalidades] = useState<Localidade[] | Localidade>([]);

  useEffect(() => {
    async function iniciliazaDados() {
      const params: { localidade: string } = route.params as {
        localidade: string;
      };
      const resultado = await buscaLocalidades(params.localidade);
      setLocalidades(resultado);
      setIsLoading(false);
    }
    iniciliazaDados();
  }, []);

  async function selecaoItemHandler(id: string) {
    navigation.navigate("Resultado", { id: id });
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

  if (!localidades) {
    return <EmptySearch />;
  }

  if (Array.isArray(localidades)) {
    return (
      <View style={styles.container}>
        <FlatList
          data={localidades}
          renderItem={({ item }) => (
            <CardLocalidade
              onPress={selecaoItemHandler}
              codigo={item.id}
              nomeCidade={item.nome}
              ufLocalidade={item.uf}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CardLocalidade
        onPress={selecaoItemHandler}
        codigo={localidades.id}
        nomeCidade={localidades.nome}
        ufLocalidade={localidades.uf}
      />
    </View>
  );
}
