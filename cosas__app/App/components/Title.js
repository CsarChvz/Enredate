import React from "react";
import { View, StyleSheet, Text } from "react-native";
import colors from "../config/colors";
import ScreenC from "./ScreenC";

function Title({ title, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  screenA: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    padding: 10,
    width: "100%",
    borderRadius: 70,
  },
  text: {
    color: colors.white,
    fontSize: 33,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Title;
