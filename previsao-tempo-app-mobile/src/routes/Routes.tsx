import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import Home from "../screens/Home/Home";
import BuscaLocalidade from "../screens/BuscaLocalidade/BuscaLocalidade";
import SelecionaLocalidade from "../screens/SelecionaLocalidade/SelecionaLocalidade";
import Resultado from "../screens/Resultado/Resultado";

const Stack = createNativeStackNavigator<NativeStackRoutesParamList>();

type NativeStackRoutesParamList = {
  Home: any;
  BuscaLocal: any;
  SelecionaLocal: any;
  Resultado: any;
};

export type NavigationProps =
  NativeStackScreenProps<NativeStackRoutesParamList>;

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: { fontFamily: "Bold", fontSize: 26 },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Previsão do Tempo" }}
      />
      <Stack.Screen
        name="BuscaLocal"
        component={BuscaLocalidade}
        options={{ title: "Busca Localidade" }}
      />
      <Stack.Screen
        name="SelecionaLocal"
        component={SelecionaLocalidade}
        options={{ title: "Seleciona Localidade" }}
      />
      <Stack.Screen
        name="Resultado"
        component={Resultado}
        options={{ title: "Resultado da pesquisa" }}
      />
    </Stack.Navigator>
  );
}
