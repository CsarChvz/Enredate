import { Center, NativeBaseProvider, Text, View, Button } from "native-base";
import React from "react";

export default class Register extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
      </NativeBaseProvider>
    );
  }
}
