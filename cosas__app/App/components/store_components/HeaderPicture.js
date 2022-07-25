import { NativeBaseProvider, Box, Image } from "native-base";
import React from "react";

function HeaderPicture({ imageUri, onChangeImage }) {
  return (
    <NativeBaseProvider>
      <Box
        bg="purple.900"
        _text={{ color: "white", alignSelf: "center" }}
        //   { Poner otro valor que sea menor para adaptar el valor }

        w={"100%"}
        h={[150, 230, 260, 400]}
        rounded={"2xl"}
        justifyContent="flex-end"
        alignItems="center"
      ></Box>
    </NativeBaseProvider>
  );
}

export default HeaderPicture;
