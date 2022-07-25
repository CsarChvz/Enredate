import React from "react";
import {
  HStack,
  Box,
  Container,
  Text,
  VStack,
  Center,
  Button,
  NativeBaseProvider,
} from "native-base";
function ProductoInShippingCart({ name, price }) {
  return (
    <NativeBaseProvider>
      <HStack
        space={3}
        bg={"gray.800"}
        height={100}
        width={350}
        marginTop={2}
        marginBottom={2}
        borderRadius={12}
      >
        <Box
          bg={"gray.500"}
          // El tamaño correcto deberia de ser 70, pero el boton de eliminar se ve mal por el espacio a su derecha
          size={65}
          alignSelf={"center"}
          marginLeft={4}
          borderRadius={10}
        />
        <VStack justifyContent={"space-between"}>
          <Container width={168} height={"100%"}>
            <Text
              color={"white"}
              marginTop={3}
              fontSize={16}
              fontWeight={"bold"}
              numberOfLines={2}
            >
              {name}
            </Text>

            <Text color={"white"} marginBottom={4} fontSize={15} italic>
              {price}
            </Text>
          </Container>
        </VStack>
        <Center justifyContent={"flex-end"}>
          <Button
            borderRadius={7}
            py={1.2}
            px={2}
            marginBottom={3}
            marginRight={3}
          >
            Eliminar
          </Button>
        </Center>
      </HStack>
    </NativeBaseProvider>
  );
}

export default ProductoInShippingCart;
