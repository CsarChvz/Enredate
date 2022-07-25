import React from "react";
import { View, StyleSheet, Image } from "react-native";

// Componentes
import ScreenC from "../../components/ScreenC";
import colors from "../../config/colors";
import { Entypo } from "@expo/vector-icons";
function LoadingScreen(props) {
  return (
    <ScreenC style={styles.screenB}>
      <View style={styles.containerImage}>
        <Image
          source={require("../../assets/logo-squareco.jpeg")}
          style={styles.imageU}
        />
        <View style={styles.loader}>
          <Entypo name="dots-three-horizontal" size={50} color={colors.white} />
        </View>
      </View>
    </ScreenC>
  );
}
const styles = StyleSheet.create({
  screenB: {
    backgroundColor: colors.primary,
  },
  containerImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 80,
  },
  imageU: {
    overflow: "hidden",
    width: 150,
    height: 150,
    borderWidth: 5,
    borderRadius: 40,
    borderColor: colors.white,
  },
  loader: {
    marginTop: 20,
  },
});
export default LoadingScreen;
