import React from "react";
import { View, StyleSheet } from "react-native";

function CIrclesD(props) {
  return (
    <View style={{ position: "absolute", width: "100%", height: "100%" }}>
      <View style={styles.headerGraphic}>
        <View style={styles.leftCircle} />
      </View>
      <View style={styles.footerGraph}>
        <View style={styles.bottomCircle} />
        <View style={styles.bottomCircle2} />
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
    backgroundColor: "#6A4BD8",
    position: "absolute",
    borderRadius: 200,
    width: 400,
    height: 400,
    top: -100,
    left: -160,
    opacity: 0.5,
  },
  footerGraph: {
    position: "absolute",
    width: "100%",
    bottom: -100,
  },
  bottomCircle: {
    backgroundColor: "#3CA49A",
    position: "absolute",
    borderRadius: 100,
    width: 200,
    height: 200,
    bottom: 10,
    right: -80,
    opacity: 0.5,
  },
  bottomCircle2: {
    backgroundColor: "#3CA49A",
    position: "absolute",
    borderRadius: 100,
    width: 200,
    height: 200,
    bottom: -30,
    right: 10,
    opacity: 0.5,
  },
});
export default CIrclesD;
