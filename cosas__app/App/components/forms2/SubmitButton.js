import React from "react";
import { useFormikContext } from "formik";
import { NativeBaseProvider, Button } from "native-base";
function SubmitButton({ title, bg }) {
  const { handleSubmit } = useFormikContext();
  return (
    <NativeBaseProvider>
      <Button
        bg={bg}
        borderRadius={45}
        px={5}
        _text={{ color: "white", fontWeight: "bold" }}
        margin={10}
        fontWeight={"bold"}
        onPress={handleSubmit}
      >
        {title}
      </Button>
    </NativeBaseProvider>
  );
}

export default SubmitButton;
