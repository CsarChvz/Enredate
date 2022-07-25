import { Center, NativeBaseProvider, Text } from "native-base";
import React from "react";

export default class Register extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        <Center>
          <Text>Register Screen</Text>
        </Center>
      </NativeBaseProvider>
    );
  }
}
