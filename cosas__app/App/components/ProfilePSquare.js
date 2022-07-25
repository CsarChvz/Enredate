import { View, Box } from "native-base";
import React from "react";

function ProfilePSquare({ child }) {
  return (
    <View
      bg={"gray.500"}
      // El tamaño correcto deberia de ser 70, pero el boton de eliminar se ve mal por el espacio a su derecha
      size={[65, 90]}
      // alignSelf={"center"}
      marginTop={1}
      padding={4}
      borderRadius={10}
    ></View>
  );
}

export default ProfilePSquare;
