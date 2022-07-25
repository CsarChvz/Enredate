import React from "react";
import {
  Box,
  NativeBaseProvider,
  Center,
  Pressable,
  View,
  Text,
} from "native-base";
function ProductStore({ backgroundColor = "blue.300", name, onPress }) {
  return (
    <NativeBaseProvider>
      <Center marginBottom={5} padding={4}>
        <Pressable
          borderWidth={2}
          borderColor={"white"}
          bg={backgroundColor}
          width={100}
          height={125}
          borderRadius={[12, 16, 20]}
          onPress={onPress}
          _pressed={{
            bg: "gray.600",
          }}
        >
          {/* Aqui debera poner el icono que debe */}
        </Pressable>
        <View width={"80%"}>
          <Text
            fontWeight={"bold"}
            fontSize={[12, 18, 24]}
            textAlign={"center"}
          >
            {name}
          </Text>
        </View>
      </Center>
    </NativeBaseProvider>
  );
}

export default ProductStore;
