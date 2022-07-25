import React from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
// Designs
import RegisterCirclesD from "../../designs/RegisterCirclesD";
// Components
import ScreenC from "../../components/ScreenC";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/AppTextInput";

// Colores
import colors from "../../config/colors";

function RecoverPasswordScreen(props) {
  return (
    <ScreenC style={styles.loginScreen}>
      {/* Se utiliza el mismo diseño de circulos para register */}
      <RegisterCirclesD></RegisterCirclesD>
      <KeyboardAvoidingView style={styles.container} enabled={true}>
        <View style={styles.textContainer}>
          <Text style={styles.texto}>Recuperar contraseña</Text>
          <View style={styles.ada} />
        </View>
        <View style={styles.formContainer}>
          <AppTextInput
            placeholder="Nombre"
            icon="account-circle-outline"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <AppTextInput
            placeholder="Email"
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title="Recuperar" color="naranja" />
        </View>
      </KeyboardAvoidingView>
    </ScreenC>
  );
}
const styles = StyleSheet.create({
  loginScreen: {
    backgroundColor: "#000",
    overflow: "hidden",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  textContainer: {
    paddingHorizontal: 30,
    width: "100%",
    padding: 10,
  },
  texto: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 45,
    textTransform: "uppercase",
    // borderColor: colors.white,
    // borderBottomWidth: 5,
    textAlign: "center",
  },
  ada: {
    height: 4,
    backgroundColor: colors.white,
    width: "100%",
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 30,
  },
  buttonContainer: {
    width: "100%",
    paddingTop: 20,
    paddingHorizontal: 60,
    alignItems: "center",
  },
  link: {
    color: "#4626E8",
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
});
export default RecoverPasswordScreen;
