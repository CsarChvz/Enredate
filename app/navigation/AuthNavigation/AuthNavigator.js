import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas de autenticación
import { LoginScreen, WelcomeScreen } from "../../screens/AuthScreens";
// Stack Register
import { RegisterStack } from ".";
const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterStack} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
