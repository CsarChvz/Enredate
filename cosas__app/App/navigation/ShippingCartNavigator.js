import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pantallas
import { Cart } from "../screens/ShippingCartScreens";

const CartStack = createNativeStackNavigator();
const MyCartStack = () => {
  return (
    <CartStack.Navigator screenOptions={{ headerShown: false }}>
      <CartStack.Screen name="Cart" component={Cart} />
    </CartStack.Navigator>
  );
};

export default MyCartStack;
