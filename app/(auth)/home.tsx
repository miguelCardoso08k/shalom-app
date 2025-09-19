import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Menu</Text>
      </View>
      <View>
        <Text>Notificações</Text>
      </View>
      <View>
        <Text>Atendimentos</Text>
      </View>
      <View>
        <Text>Botões</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
