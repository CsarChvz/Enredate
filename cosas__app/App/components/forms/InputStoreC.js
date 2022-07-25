import React from "react";
import {
  NativeBaseProvider,
  Input,
  FormControl,
  KeyboardAvoidingView,
  Text,
} from "native-base";
function InputStoreC({ title, ...otherProps }) {
  return (
    <NativeBaseProvider>
      <KeyboardAvoidingView>
        {/* Tal vez el FormControl no sea tan necesario para el componente */}
        <FormControl>
          <Text fontWeight={"bold"} fontSize={16} padding={2}>
            {title}
          </Text>
          <Input
            padding={4}
            {...otherProps}
            borderRadius={15}
            fontSize={15}
            borderColor={"black"}
          />
        </FormControl>
      </KeyboardAvoidingView>
    </NativeBaseProvider>
  );
}

export default InputStoreC;
