import React from "react";
import { Platform, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import colors from "../config/colors";
function ScreenC({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      {children}

      {/* { Quitar el status bar si se ve feo} */}
      {/* <StatusBar barStyle="light-content" /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? 24 : 0,
    flex: 1,
  },
});
export default ScreenC;
