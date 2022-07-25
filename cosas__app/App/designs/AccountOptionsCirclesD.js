import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function AccountOptionsCircle(props) {
  return (
    <View style={{ position: "absolute", width: "100%", height: "100%" }}>
      <View style={styles.headerGraphic}>
        <View style={styles.rightCircle3} />
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
    top: -40,
    zIndex: -400,
  },
  rightCircle: {
    backgroundColor: colors.naranja,
    position: "absolute",
    borderRadius: 100,
    width: 200,
    height: 200,
    top: -40,
    right: -100,
    opacity: 0.6,
  },
  rightCircle2: {
    backgroundColor: colors.naranja,
    position: "absolute",
    borderRadius: 100,
    width: 200,
    height: 200,
    top: -100,
    right: 0,
    opacity: 0.6,
  },
  rightCircle3: {
    backgroundColor: "#7A59F0",
    position: "absolute",
    borderRadius: 250,
    width: 500,
    height: 500,
    top: -140,
    left: -250,
    opacity: 0.6,
  },

  footerGraphic: {
    position: "absolute",
    width: "100%",
    bottom: -30,
    zIndex: -100,
  },
  leftCircle: {
    backgroundColor: colors.azulCeleste,
    position: "absolute",
    borderRadius: 100,
    width: 200,
    height: 200,
    bottom: -100,
    right: -20,
    opacity: 0.6,
  },
  leftCircle2: {
    backgroundColor: colors.azulCeleste,
    position: "absolute",
    borderRadius: 100,
    width: 200,
    height: 200,
    bottom: -20,
    right: -100,
    opacity: 0.8,
  },
});
export default AccountOptionsCircle;
