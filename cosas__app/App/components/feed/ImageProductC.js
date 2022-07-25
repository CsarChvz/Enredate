import React from "react";
import {
  Box,
  NativeBaseProvider,
  Center,
  Pressable,
  View,
  Text,
} from "native-base";
function ImageProductC({ backgroundColor = "blue.300", name, onPress }) {
  return (
    <Center marginBottom={5} padding={4}>
      <Pressable
        bg={backgroundColor}
        size={[78, 108, 138, 190]}
        margin={[1, 10, 20, 32]}
        borderRadius={[12, 16, 20]}
        onPress={onPress}
        _pressed={{
          bg: "gray.600",
        }}
      >
        {/* Aqui debera poner el icono que debe */}
      </Pressable>
      <View width={"80%"}>
        <Text fontWeight={"bold"} fontSize={[12, 18, 24]} textAlign={"center"}>
          {name}
        </Text>
      </View>
    </Center>
  );
}

export default ImageProductC;
