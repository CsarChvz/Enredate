import React from "react";
import { useFormikContext } from "formik";
// Componentes
import ImageProfile from "./ImageProfile";
import { ErrorMessage } from "formik";
function FormImageProfile({ name }) {
  const { setFieldTouched, handleChange, errors, touched, values } =
    useFormikContext();
  return (
    <>
      <ImageProfile />
      <ErrorMessage />
    </>
  );
}

export default FormImageProfile;
