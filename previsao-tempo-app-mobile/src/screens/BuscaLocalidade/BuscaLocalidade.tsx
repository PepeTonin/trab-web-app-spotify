import { useEffect, useState } from "react";
import { View } from "react-native";

import { styles } from "./style";

import { NavigationProps } from "../../routes/Routes";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import PrimaryTextInput from "../../components/TextInput/PrimaryTextInput";

export default function BuscaLocalidade({ navigation }: NavigationProps) {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setValue("");
    });
    return unsubscribe;
  }, [navigation]);

  function onChangeText(text: string) {
    setValue(text);
  }

  function handleBuscar() {
    navigation.navigate("SelecionaLocal", {
      localidade: value.toLowerCase().replace(" ", "%20"),
    });
  }

  return (
    <View style={styles.container}>
      <PrimaryTextInput
        value={value}
        onChangeText={onChangeText}
        containerStyle={styles.inputContainer}
      />
      <PrimaryButton onPress={handleBuscar} innerText="Buscar" />
    </View>
  );
}
