import React from "react";
import {
  Box,
  Text,
  NativeBaseProvider,
  Divider,
  Center,
  ScrollView,
  VStack,
  FormControl,
  Link,
  Input,
  Button,
  HStack,
  Switch,
  KeyboardAvoidingView,
} from "native-base";
import ReturnArrow from "../../components/ReturnArrow";
import TextInput from "../../components/forms2/TextInput";

// Faltaria poner la flecha de regreso, pero eso cuando se hagan todos los stacksS

// Configuracion para integrar el degradado en el cuadro
const config = {
  dependencies: {
    // For Expo projects (Bare or managed workflow)
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
    // For non expo projects
    // 'linear-gradient': require('react-native-linear-gradient').default,
  },
};

function AccountSettingsScreen({ navigation }) {
  const pressHandler = () => {
    console.log("Pressing");
    navigation.goBack();
  };
  return (
    <NativeBaseProvider config={config}>
      <ScrollView>
        <ReturnArrow onPress={pressHandler} />
        <KeyboardAvoidingView>
          <Box flex={1} padding={6} marginTop={-10}>
            <Text
              fontSize={"4xl"}
              fontWeight={"bold"}
              color={"black"}
              textAlign={"center"}
              padding={2}
            >
              Cuenta
            </Text>
            <Divider bg={"black"} h={1} />
            <Center pt={4}>
              <Box
                size={[120, 150]}
                bg={{
                  linearGradient: {
                    colors: ["violet.100", "violet.800"],
                    start: [0, 0],
                    end: [0, 1],
                  },
                }}
                borderRadius={20}
              ></Box>
              {/* Boton para cambiar la fotografia */}
              <Button borderRadius={50} px={7} margin={5} fontWeight={"bold"}>
                Cambiar foto
              </Button>
            </Center>

            {/* Checar la documentacion de como estan los formularios
        Se cambio su forma original, antes en vez de un Text Habia un Form.Label */}
            <VStack space={2} mt="0">
              <FormControl>
                <Text fontWeight={"bold"} fontSize={16} padding={2}>
                  Nombre de la cuenta
                </Text>
                {/* <Input
                  value=""
                  padding={4}
                  backgroundColor={"gray.300"}
                  placeholder="Nombre de la cuenta"
                  borderRadius={15}
                  fontSize={15}
                /> */}
                <TextInput placeholder={"Nombre de la cuenta"} />
              </FormControl>
              <FormControl>
                <Text fontWeight={"bold"} fontSize={16} padding={2}>
                  Correo Electronico
                </Text>
                <Input
                  backgroundColor={"gray.300"}
                  padding={4}
                  placeholder="Correo Electronico"
                  borderRadius={15}
                  fontSize={15}
                />
              </FormControl>
            </VStack>

            {/* En vez de un switch - Se debe de usar un Segment Component o un Tab View */}
            <HStack>
              <VStack>
                <Text fontWeight={"bold"} fontSize={16} padding={2}>
                  Tipo de Cuenta
                </Text>
              </VStack>
              <Switch></Switch>
            </HStack>
          </Box>
          <Center>
            <Button
              paddingY={4}
              paddingX={10}
              borderRadius={50}
              marginBottom={4}
              fontWeight={"bold"}
            >
              Guardar Cambios
            </Button>
          </Center>
        </KeyboardAvoidingView>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default AccountSettingsScreen;
