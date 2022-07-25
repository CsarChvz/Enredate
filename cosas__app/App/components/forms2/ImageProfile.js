import React, { useEffect } from "react";
import {
  Box,
  Center,
  NativeBaseProvider,
  View,
  Button,
  Image,
  Text,
} from "native-base";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
// Configuracion para integrar el degradado en el cuadro
const config = {
  dependencies: {
    // For Expo projects (Bare or managed workflow)
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
    // For non expo projects
    // 'linear-gradient': require('react-native-linear-gradient').default,
  },
};
function ImageProfile({ imageUri, onChangeImage, ...otherProps }) {
  useEffect(() => {
    requestPermission();
  }, []);
  const handlePress = () => {
    if (imageUri) {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
    } else {
      selectImage();
    }
  };

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };
  return (
    <NativeBaseProvider config={config}>
      <Center>
        <View size={[120, 150]} overflow={"hidden"}>
          {/* Si es que no existe una image vamos a renderizar un cuadro con un degradado */}
          {!imageUri && (
            <Box
              width={"100%"}
              height={"100%"}
              borderRadius={20}
              bg={{
                linearGradient: {
                  colors: ["violet.100", "violet.800"],
                  start: [0, 0],
                  end: [0, 1],
                },
              }}
            ></Box>
          )}
          {/* Pero si existe, entonces vamos a mostrar una imagen */}
          {imageUri && (
            <Image
              source={{ uri: imageUri }}
              width={"100%"}
              height={"100%"}
              borderRadius={20}
              alt={imageUri}
            />
          )}
        </View>
        <Text>{imageUri}</Text>
        <Button
          borderRadius={50}
          px={7}
          margin={5}
          fontWeight={"bold"}
          onPress={handlePress}
        >
          Cambiar foto
        </Button>
      </Center>
    </NativeBaseProvider>
  );
}

export default ImageProfile;
