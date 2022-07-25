import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, ViewProduct } from "../screens/HomeScreens";

const HomeStack = createNativeStackNavigator();

const MyHomeStack = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="ViewProduct" component={ViewProduct} />
    </HomeStack.Navigator>
  );
};

export default MyHomeStack;
