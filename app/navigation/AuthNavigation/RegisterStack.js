import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  ChooseScreen,
  CreateStoreScreen,
  RegisterScreen,
} from "../../screens/AuthScreens/RegisterScreens";

const RegisterStack = createNativeStackNavigator();

const RegisterNavigator = () => {
  return (
    <RegisterStack.Navigator screenOptions={{ headerShown: false }}>
      <RegisterStack.Screen name="Register" component={RegisterScreen} />
      <RegisterStack.Screen name="Choose" component={ChooseScreen} />
      <RegisterStack.Screen name="CreateStore" component={CreateStoreScreen} />
    </RegisterStack.Navigator>
  );
};

export default RegisterNavigator;
