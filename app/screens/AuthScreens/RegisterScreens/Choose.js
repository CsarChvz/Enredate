import { Center, NativeBaseProvider, Text } from "native-base";
import React from "react";

export default class Choose extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        <Center>
          <Text>Choose Screen</Text>
        </Center>
      </NativeBaseProvider>
    );
  }
}
