import { Box, NativeBaseProvider, Image, Pressable } from "native-base";
import React, { useEffect, useState } from "react";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePickerUwU from "expo-image-picker";
import { Alert } from "react-native";

function ImagePicker({ imageUri, onChangeImage }) {
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
    const { granted } =
      await ImagePickerUwU.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePickerUwU.launchImageLibraryAsync({
        mediaTypes: ImagePickerUwU.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };
  return (
    <NativeBaseProvider>
      <Pressable onPress={handlePress}>
        <Box
          alignItems={"center"}
          bg={colors.light}
          borderRadius={15}
          height={100}
          justifyContent={"center"}
          width={100}
          overflow={"hidden"}
        >
          {!imageUri && (
            <MaterialCommunityIcons
              color={colors.medium}
              name="camera"
              size={40}
            />
          )}
          {imageUri && (
            <Image
              source={{ uri: imageUri }}
              height={"100%"}
              width={"100%"}
              alt="Imagen"
            />
          )}
        </Box>
      </Pressable>
    </NativeBaseProvider>
  );
}

export default ImagePicker;
