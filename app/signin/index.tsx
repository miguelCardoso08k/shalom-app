import { StyleSheet, Text, View } from "react-native";

export default function SignIn() {
  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      fontSize: 12,
    },
  });
  return (
    <View style={style.container}>
      <Text>Tela para login</Text>
    </View>
  );
}
