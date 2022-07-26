import {
  Center,
  NativeBaseProvider,
  Text,
  View,
  Button,
  Stack,
} from "native-base";
import React from "react";

export default class Welcome extends React.Component {
  goWindow(windowName) {
    this.props.navigation.navigate(windowName);
  }

  render() {
    return (
      <NativeBaseProvider>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Stack space={5} width={"sm"}>
            <Button onPress={() => this.goWindow("Login")}>Login</Button>
            <Button onPress={() => this.goWindow("RegisterStack")}>
              Register
            </Button>
          </Stack>
        </View>
      </NativeBaseProvider>
    );
  }
}
