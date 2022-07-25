import { NativeBaseProvider, View } from "native-base";
import React, { useRef } from "react";
import ImagePicker from "./ImagePicker";
import { ScrollView } from "react-native";

function ImagePickerList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();

  return (
    <NativeBaseProvider>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View flexDirection={"row"}>
          {imageUris.map((uri) => (
            <View key={uri} margin={2}>
              <ImagePicker
                imageUri={uri}
                key={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImagePicker onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default ImagePickerList;
