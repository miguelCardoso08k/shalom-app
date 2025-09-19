import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    // Aqui você faria a requisição para sua API
    console.log("Login:", { email, password });
    if (email === email && password === "0000") {
      router.push("/home");
    } else {
      Alert.alert("Senha incorreta", "Tente novamente");
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#40916C", "#B7E4C7"]}
        start={{ x: 0, y: 0 }}
        style={styles.block1}
        end={{ x: 1, y: 1 }}
      ></LinearGradient>
      <LinearGradient
        colors={["#40916C", "#B7E4C7"]}
        start={{ x: 0, y: 0 }}
        style={styles.block2}
        end={{ x: 1, y: 1 }}
      ></LinearGradient>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />

      <View>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
        <Text style={{ color: "#ffffff", fontSize: 25 }}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.forgotPassword}>
        <Text style={{ fontSize: 10 }}>Esqueceu sua senha?</Text>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("Esqueceu a senha né?");
          }}
        >
          <Text style={{ textDecorationLine: "underline", fontSize: 9 }}>
            Clique aqui
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 1,
  },
  block1: {
    position: "absolute",
    top: -490,
    left: -175,
    height: 720,
    width: 460,
    transform: [{ rotate: "220deg" }],
  },
  block2: {
    position: "absolute",
    bottom: -480,
    right: -175,
    height: 720,
    width: 460,
    transform: [{ rotate: "40deg" }],
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    width: 300,
  },
  logo: {
    width: 250,
    height: 250,
  },
  btnLogin: {
    backgroundColor: "#40916C",
    width: 160,
    height: 60,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPassword: {
    marginTop: 10,
    flexDirection: "row",
    gap: 3,
  },
});
