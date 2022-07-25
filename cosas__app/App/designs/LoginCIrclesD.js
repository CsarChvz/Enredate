import React from "react";
import { View, StyleSheet } from "react-native";

function LoginCirclesD(props) {
  return (
    <View style={{ position: "absolute", width: "100%", height: "100%" }}>
      <View style={styles.headerGraphic}>
        <View style={styles.leftCircle2} />
        <View style={styles.leftCircle} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headerGraphic: {
    position: "absolute",
    width: "100%",
    top: -50,
    zIndex: -100,
  },
  leftCircle: {
    backgroundColor: "#FA8C47",
    position: "absolute",
    borderRadius: 150,
    width: 300,
    height: 300,
    top: -50,
    left: -160,
    opacity: 0.8,
  },
  leftCircle2: {
    backgroundColor: "#6A4BD8",
    position: "absolute",
    borderRadius: 200,
    width: 325,
    height: 400,
    top: -240,
    left: -70,
    opacity: 0.85,
  },
});
export default LoginCirclesD;
