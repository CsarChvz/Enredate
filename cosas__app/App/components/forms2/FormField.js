import React from "react";
import { useFormikContext } from "formik";

// Componentes
import TextInput from "./TextInput";
import ErrorMessage from "./ErrorMessage";
function FormField({ value, name, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched, showPassword } =
    useFormikContext();
  return (
    <>
      <TextInput
        value={value}
        showPassword={showPassword}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormField;
