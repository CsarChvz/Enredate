import React from "react";
import { NativeBaseProvider, Text, Divider } from "native-base";
function TitleForm({ title }) {
  return (
    <>
      <Text fontSize={50} fontWeight={"bold"} color={"white"}>
        ACCESO
      </Text>
      <Divider />
    </>
  );
}

export default TitleForm;
