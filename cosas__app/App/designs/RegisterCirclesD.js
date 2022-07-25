import React from "react";
import { View, StyleSheet } from "react-native";

function RegisterCirclesD(props) {
  return (
    <View style={{ position: "absolute", width: "100%", height: "100%" }}>
      <View style={styles.headerGraphic}>
        <View style={styles.rightCircle} />
        <View style={styles.rightCircle2} />
      </View>
      <View style={styles.footerGraphic}>
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
  rightCircle: {
    backgroundColor: "#6A4BD8",
    position: "absolute",
    borderRadius: 150,
    width: 300,
    height: 300,
    top: -60,
    right: -160,
  },
  rightCircle2: {
    backgroundColor: "#3388FF",
    position: "absolute",
    borderRadius: 90,
    width: 180,
    height: 180,
    top: -40,
    right: 30,
  },
  footerGraphic: {
    position: "absolute",
    width: "100%",
    bottom: -150,
    zIndex: -100,
  },
  leftCircle: {
    backgroundColor: "#33AAFF",
    position: "absolute",
    borderRadius: 150,
    width: 300,
    height: 300,
    bottom: 60,
    left: -140,
    opacity: 0.6,
  },
  leftCircle2: {
    backgroundColor: "#6A4BD8",
    position: "absolute",
    borderRadius: 115,
    width: 230,
    height: 230,
    top: -220,
    left: 20,
    opacity: 0.48,
  },
});
export default RegisterCirclesD;
