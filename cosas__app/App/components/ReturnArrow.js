import React from "react";
import { NativeBaseProvider, Icon, Pressable } from "native-base";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
function ReturnArrow({ onPress }) {
  return (
    <NativeBaseProvider>
      <Icon
        as={Entypo}
        name="arrow-bold-left"
        color={"purple.700"}
        size={50}
        onPress={onPress}
      />
    </NativeBaseProvider>
  );
}

export default ReturnArrow;
