import React from "react";
import { NativeBaseProvider, Button, FlatList, Box, Text } from "native-base";

const confOptions = [
  { item: 1, name: "Datos de la cuenta", go: "DatosCuenta" },
  { item: 2, name: "Datos de envio", go: "DatosEnvio" },
  { item: 3, name: "Cambiar contraseña", go: "CambiarContraseña" },
];
export default function SettingsScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box background={"purple.600"} h={12} justifyContent={"center"}>
        <Text padding={2} color={"white"} fontSize={20} fontWeight={"bold"}>
          Configuracion
        </Text>
      </Box>
      <Box p={3}>
        <FlatList
          data={confOptions}
          keyExtractor={(item) => item.item}
          renderItem={({ item }) => (
            <Button
              bg={"#D1D1D1"}
              width={"100%"}
              padding={5}
              marginY={5}
              borderColor={"black"}
              borderWidth={3}
              justifyContent={"flex-start"}
              fontWeight={"extrabold"}
              borderRadius={20}
              _text={{
                fontWeight: "bold",
                fontSize: "lg",
              }}
              shadow={(10, 5, 3, 5)}
              onPress={() => {
                navigation.navigate(item.go);
              }}
            >
              {item.name}
            </Button>
          )}
        />
      </Box>
    </NativeBaseProvider>
  );
}
