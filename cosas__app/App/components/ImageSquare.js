import React from "react";
import { Box, NativeBaseProvider, View, Image } from "native-base";
function ImageSquare({ imageUri }) {
  return (
    <NativeBaseProvider>
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          size={[65, 90]}
          padding={4}
          borderRadius={10}
          borderWidth={3}
          borderColor={"white"}
          alt="imagen del Drawer"
        ></Image>
      )}
      {!imageUri && (
        <Box
          size={[65, 90]}
          bg={"gray.700"}
          padding={4}
          borderRadius={10}
          borderWidth={3}
          borderColor={"white"}
        />
      )}
    </NativeBaseProvider>
  );
}

export default ImageSquare;
