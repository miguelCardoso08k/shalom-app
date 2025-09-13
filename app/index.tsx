import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const router = useRouter();

  const style = StyleSheet.create({
    block1: {
      position: "absolute",
      top: -280,
      left: -175,
      height: 720,
      width: 460,
      transform: [{ rotate: "220deg" }],
    },
    block2: {
      position: "absolute",
      bottom: -230,
      right: -175,
      height: 720,
      width: 460,
      transform: [{ rotate: "40deg" }],
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5f5f5",
      gap: 20,
    },
    logo: {
      width: 300,
      height: 300,
    },
    loginBtn: {
      backgroundColor: "#2D6A4F",
      width: 220,
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 40,
    },
  });
  return (
    <View style={style.container}>
      <LinearGradient
        colors={["#40916C", "#B7E4C7"]}
        start={{ x: 0, y: 0 }}
        style={style.block1}
        end={{ x: 1, y: 1 }}
      ></LinearGradient>
      <LinearGradient
        colors={["#40916C", "#B7E4C7"]}
        start={{ x: 0, y: 0 }}
        style={style.block2}
        end={{ x: 1, y: 1 }}
      ></LinearGradient>
      <Image
        source={require("../assets/images/logo.png")}
        style={style.logo}
        resizeMode="contain"
      />
      <TouchableOpacity
        style={style.loginBtn}
        onPress={() => router.push("/signin")}
      >
        <Text style={{ color: "#ffffff", fontSize: 35 }}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
