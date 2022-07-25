import React, { useState } from "react";
import { useFormikContext } from "formik";
import ImageF from "./ImageF";
import ErrorMessage from "./ErrorMessage";
function FormImage({ name }) {
  const { handleChange, errors, touched, values } = useFormikContext();
  const [imageUri, setimageUri] = useState();
  return (
    <>
      {/* <ImageF imageUri={imageUri} onChangeImage={handleChange(name)} /> */}
      <ImageF
        imageUri={imageUri}
        onTextLayout={handleChange(name)}
        onChangeImage={(uri) => setimageUri(uri)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImage;
