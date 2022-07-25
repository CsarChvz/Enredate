import { Center, Heading, NativeBaseProvider, Text, View } from "native-base";
import React from "react";

export default class Login extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Heading
            size={"2xl"}
            color="emerald.500"
            padding={10}
            background={"amber.100"}
          >
            Login
          </Heading>
        </View>
      </NativeBaseProvider>
    );
  }
}
