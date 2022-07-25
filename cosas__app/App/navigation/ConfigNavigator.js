import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

// Screens
import {
  Settings,
  ShippingData,
  ChangePassword,
  AccountSettings,
} from "../screens/ConfigScreens";
const ConfigStack = createNativeStackNavigator();

const MyConfigStack = () => {
  return (
    <ConfigStack.Navigator screenOptions={{ headerShown: false }}>
      <ConfigStack.Screen name="Configuracion" component={Settings} />
      <ConfigStack.Screen name="DatosCuenta" component={AccountSettings} />
      <ConfigStack.Screen name="DatosEnvio" component={ShippingData} />
      <ConfigStack.Screen name="CambiarContraseña" component={ChangePassword} />
    </ConfigStack.Navigator>
  );
};

export default MyConfigStack;
