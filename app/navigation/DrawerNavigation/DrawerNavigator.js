//import { Button, NativeBaseProvider, View } from "native-base";
import React from "react";
import { View, Button } from "react-native";
// Navigation
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { signOutUser, auth } from "../../utils/auth.client";


import { signOut } from "firebase/auth";
// --- Pantallas de ejemplo ---
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("MyStore")}
        title="Go to notifications"
      />
    </View>
  );
}

function MyStoreScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function OrderScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function CartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function ConfigurationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function LogoutScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => signOut(auth)} title="SignOut" />
    </View>
  );
}
const Drawer = createDrawerNavigator();

// Se crea un componente de clase o un COMPONENTE CLASS
export default class DrawerNavigator extends React.Component {
  render() {
    return (
      <Drawer.Navigator initialRouteName="Home">
        {/* En cada Screen va a estar un stack, para acceder a las pantallas */}

        {/* --- En cada Item del Drawer debe de haber un stack */}
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="MyStore" component={MyStoreScreen} />
        <Drawer.Screen name="Orders" component={OrderScreen} />
        <Drawer.Screen name="Cart" component={CartScreen} />
        <Drawer.Screen name="Configuration" component={ConfigurationScreen} />
        {/* --- En cada Item del Drawer debe de haber un stack */}

        {/* Faltaría  el logout -- Se pone como si fuera un componente para tener noción */}
        {/* <Drawer.Screen name="Logout" component={LogoutScreen} /> */}
        <Drawer.Screen name="Logout" component={LogoutScreen} />  


        {/* --- Usar el flujo de autenticación --- */}
        {/* https://reactnavigation.org/docs/auth-flow */}
      </Drawer.Navigator>
    );
  }
}
