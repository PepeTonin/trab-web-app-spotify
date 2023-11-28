import { useState } from "react";
import { View, Text, TextInput, StyleProp, ViewStyle } from "react-native";

import { styles } from "./style";

interface PrimaryTextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  value: string;
  onChangeText: (text: string) => void;
}

export default function PrimaryTextInput({
  value,
  onChangeText,
  containerStyle,
}: PrimaryTextInputProps) {
  return (
    <View style={containerStyle ? containerStyle : null}>
      <Text style={styles.label}>Nome da cidade:</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={styles.inputText}
        />
      </View>
    </View>
  );
}
