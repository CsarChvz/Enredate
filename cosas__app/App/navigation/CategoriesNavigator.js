import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas
import { Categories, CategoryShops } from "../screens/CategoryScreens";
const CategStack = createNativeStackNavigator();

const MyCategStack = () => {
  return (
    <CategStack.Navigator screenOptions={{ headerShown: false }}>
      <CategStack.Screen name="Categories" component={Categories} />
      <CategStack.Screen name="CategoryShops" component={CategoryShops} />
    </CategStack.Navigator>
  );
};

export default MyCategStack;
