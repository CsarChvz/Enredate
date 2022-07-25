import { Center, NativeBaseProvider, Text } from "native-base";
import React from "react";

export default class Welcome extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        <Center>
          <Text>Welcome Screen</Text>
        </Center>
      </NativeBaseProvider>
    );
  }
}
