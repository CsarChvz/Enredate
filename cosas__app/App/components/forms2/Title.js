import React from "react";
import { NativeBaseProvider, Text, Divider } from "native-base";
function Title({ title }) {
  return (
    <NativeBaseProvider>
      <Text fontSize={50} fontWeight={"bold"} color={"white"}>
        {title}
      </Text>
      <Divider />
    </NativeBaseProvider>
  );
}

export default Title;
