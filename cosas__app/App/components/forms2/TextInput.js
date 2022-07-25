import React, { useState } from "react";
import { NativeBaseProvider, Input, Button } from "native-base";
function TextInput({ value, showPassword, placeholder, ...otherProps }) {
  // Poner un icono si es que se necesita
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);
  return (
    <NativeBaseProvider>
      <Input
        width={"100%"}
        defaultValue={value}
        variant={"filled"}
        borderRadius={15}
        padding={4}
        fontSize={16}
        placeholder={placeholder}
        {...otherProps}
      />
    </NativeBaseProvider>
  );
}

export default TextInput;


