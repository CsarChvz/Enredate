import React from "react";
import {
  NativeBaseProvider,
  Box,
  KeyboardAvoidingView,
  VStack,
  ScrollView,
  Center,
  Select,
  Button,
  Container,
  Text,
  Divider,
} from "native-base";
function ViewProductScreen(props) {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Box flex={1} padding={6} marginTop={5}>
          <Text>[Nombre del producto]</Text>
          <Text>[Nombre de la tienda]</Text>
          <Box
            bg="gray.400"
            _text={{ color: "white", alignSelf: "center" }}
            //   { Poner otro valor que sea menor para adaptar el valor }

            w={"100%"}
            h={[200, 280, 310, 400]}
            rounded={"2xl"}
            justifyContent="flex-end"
            alignItems="center"
          ></Box>
          <Text>[Nombre del producto]</Text>
          <Text>[Nombre de la tienda]</Text>

          <Center>
            <Button>Agrerar al carrito</Button>
          </Center>

          <Divider marginY={4} />
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default ViewProductScreen;
