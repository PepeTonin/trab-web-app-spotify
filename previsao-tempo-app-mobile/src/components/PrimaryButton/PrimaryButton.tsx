import { TouchableOpacity, Text, StyleProp, ViewStyle } from "react-native";

import { styles } from "./style";

interface PrimaryButtonProps {
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  innerText: string;
}

export default function PrimaryButton({
  onPress,
  innerText,
  containerStyle,
}: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle ? containerStyle : null]}
    >
      <Text style={styles.text}>{innerText}</Text>
    </TouchableOpacity>
  );
}
