import React from "react";
import { Center, View, Text, Pressable } from "native-base";

// Parametros explicados:
// El name es para el nombre, el cua aparecera debajo del cuadro,
// uri ---> Este va a ser el link o el source el cual se va a usar para la fotografia de la tienda
// key ---> Para la llave pero no creo que sirva
// onPress ---> Se puso para el evento que se quiera hacer segun en donde se ponga
function SquareStoreC({ name, uri, key, onPress }) {
  return (
    <Center marginBottom={5} marginX={[2, 3]} key={key} padding={4}>
      <Pressable
        bg={"gray.400"}
        size={[120, 170, 220]}
        borderRadius={[21, 40, 60]}
        onPress={onPress}
        _pressed={{
          bg: "gray.600",
        }}
      ></Pressable>
      <View width={"80%"}>
        <Text fontWeight={"bold"} fontSize={[16, 22, 30]} textAlign={"center"}>
          {name}
        </Text>
      </View>
    </Center>
  );
}

export default SquareStoreC;
