import { Center, NativeBaseProvider, Text } from "native-base";
import React from "react";

export default class Login extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        <Center>
          <Text>Login Screen</Text>
        </Center>
      </NativeBaseProvider>
    );
  }
}
