import { Center, NativeBaseProvider, Text, View, Button } from "native-base";
import React from "react";

export default class Welcome extends React.Component {
  goBack() {
    this.props.navigation.navigate("Register");
  }
  componentDidMount() {
    console.log(console.log(this.props));
  }
  render() {
    return (
      <NativeBaseProvider>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Button onPress={() => this.goBack()} title="Go back home" />
        </View>
      </NativeBaseProvider>
    );
  }
}
