import { Center, NativeBaseProvider, Text } from "native-base";
import React from "react";

export default class CreateStore extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        <Center>
          <Text>CreateStore Screen</Text>
        </Center>
      </NativeBaseProvider>
    );
  }
}
