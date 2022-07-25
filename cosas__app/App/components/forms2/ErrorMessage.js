import React from "react";
import { NativeBaseProvider, Text } from "native-base";
function ErrorMessage({ error, visible }) {
  if (!visible || !error) {
    return null;
  }
  return (
    <NativeBaseProvider>
      <Text color={"red.400"} fontSize={18}>
        {error}
      </Text>
    </NativeBaseProvider>
  );
}

export default ErrorMessage;
