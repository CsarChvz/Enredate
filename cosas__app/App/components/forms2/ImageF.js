import React, { useEffect, useState, useContext } from "react";
import {
  Box,
  Center,
  NativeBaseProvider,
  View,
  Button,
  Text,
} from "native-base";
import { Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ProfileContext } from "../../auth/context";
import { getDownloadURL, uploadBytes, ref, getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../database/firebaseConfig";
import { Image } from "react-native";
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// Configuracion para integrar el degradado en el cuadro
const config = {
  dependencies: {
    // For Expo projects (Bare or managed workflow)
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
    // For non expo projects
    // 'linear-gradient': require('react-native-linear-gradient').default,
  },
};
function ImageF({ imageUri, onChangeImage, ...otherProps }) {
  const profileContext = useContext(ProfileContext);
  const { uid } = profileContext.profile;

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
      if (!result.cancelled) {
        uploadImage(result.uri);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  // UploadFunction
  async function uploadImage(uri) {
    const imageRef = ref(storage, `users/${uid}`);
    const response = await fetch(uri);
    const blob = await response.blob();
    if (uri == null) {
      return null;
    } else {
      uploadBytes(imageRef, blob).then((snapshot) => {
        snapshot.ref.toString();
        getDownloadURL(imageRef).then((url) => {
          onChangeImage(url);
          console.log("Url get download", url);
        });
      });
      console.log(imageUri);
      // return (await infoImage).toString();
    }
  }

  return (
    <NativeBaseProvider config={config}>
      <Center>
        <View size={[120, 150]} overflow={"hidden"}>
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
            />
          )}
          {imageUri && (
            <Image
              source={{
                uri: imageUri,
              }}
              style={{ width: "100%", height: "100%", borderRadius: 20 }}
            />
          )}
        </View>
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

export default ImageF;
