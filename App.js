//import { Button, NativeBaseProvider, View } from "native-base";
import React from "react";
import { Drawer } from "./app/navigation/DrawerNavigation";
import { AuthNavigation } from "./app/navigation/AuthNavigation";
import { NavigationContainer } from "@react-navigation/native";
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    );
  }
}
