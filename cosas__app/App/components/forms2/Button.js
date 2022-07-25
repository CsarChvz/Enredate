import React from "react";
import { NativeBaseProvider, Pressable } from "native-base";
import colors from "../../config/colors";
function Button({ title, onPress, color = "primary" }) {
  return (
    <NativeBaseProvider>
      <Pressable
        size={"sm"}
        onPress={onPress}
        bg={colors[color]}
        padding={5}
        width={"100%"}
        textAlign={"center"}
      >
        {title}
      </Pressable>
    </NativeBaseProvider>
  );
}

export default Button;
