import React from "react";
import { StyleSheet, View } from "react-native";
import ScreenC from "../../components/ScreenC";

// DIseños
import CIrclesD from "../../designs/CIrclesD";
// Import Components
import Title from "../../components/Title";
import AppButton from "../../components/AppButton";

function HomeScreen({ navigation }) {
  const goLogin = () => {
    navigation.navigate("Login");
  };
  const goRegister = () => {
    navigation.navigate("ChoseAccount");
  };
  return (
    <ScreenC style={styles.a}>
      <CIrclesD></CIrclesD>
      <View style={styles.titleContainer}>
        <Title title="Bienvenido a SquareCo" />
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Crear cuenta"
          color="naranja"
          onPress={goRegister}
        ></AppButton>
        <View style={styles.separacion} />
        <AppButton
          title="Iniciar sesión"
          color="azul"
          onPress={goLogin}
        ></AppButton>
      </View>
    </ScreenC>
  );
}
const styles = StyleSheet.create({
  a: {
    alignItems: "center",
  },
  titleContainer: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 40,
  },
  buttonsContainer: {
    flex: 1,
    marginTop: -120,
    justifyContent: "center",
    width: "70%",
    paddingHorizontal: 30,
  },
  separacion: {
    padding: 10,
  },
});
export default HomeScreen;
