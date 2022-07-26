import {
  Center,
  Container,
  Heading,
  Input,
  NativeBaseProvider,
  Text,
  View,
  Stack,
  Button,
} from "native-base";
import React from "react";
{
  /* Podemos usar ya sea AsyncStorage o SecureStore para guardar el token del usuario 
  https://github.com/firebase/firebase-admin-node/issues/1488 */
}

import { Formik } from "formik";
import * as Yup from "yup";

import { signUp } from "../../../utils/auth.client";
// Esquema de validación
const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  name: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters") // .required("Required")
    .required("Required"),
});

export default class Register extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        <View justifyContent={"center"} alignItems={"center"}>
          <Heading
            size={"3xl"}
            color="emerald.500"
            padding={2}
            background={"amber.100"}
          >
            Register
          </Heading>
          <Text fontSize={"lg"} px={"2rem"} py={5}>
            Esta pantalla es para Registrarse
          </Text>

          {/* Mejorar los componentes para que sean reutilizables y se vea limpio el código */}
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            onSubmit={async (values) => {
              const pendejada = await signUp(values.email, values.password, values.name)
              pendejada.user.getIdToken().then(token => {
                console.log(token)
              })
            }}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <Container width={"100%"}>
                  {/* Nombre */}
                  <Text>Name</Text>
                  <Input
                    onChangeText={handleChange("name")}
                    placeholder={"name"}
                    onBlur={() => setFieldTouched("name")}
                    width={"100%"}
                  ></Input>
                  {touched.name && (
                    <Text style={{ color: "red" }}>{errors.name}</Text>
                  )}

                  {/* Email */}
                  <Text>Email</Text>
                  <Input
                    onChangeText={handleChange("email")}
                    placeholder={"name"}
                    width={"100%"}
                    onBlur={() => setFieldTouched("email")}
                  ></Input>
                  {touched.email && (
                    <Text style={{ color: "red" }}>{errors.email}</Text>
                  )}

                  {/* Password */}
                  <Text>COntraseña</Text>
                  <Input
                    onChangeText={handleChange("password")}
                    placeholder={"name"}
                    width={"100%"}
                    onBlur={() => setFieldTouched("password")}
                  ></Input>
                  {touched.password && (
                    <Text style={{ color: "red" }}>{errors.password}</Text>
                  )}
                </Container>
                <Button m={4} onPress={handleSubmit} success>
                  Register
                </Button>
              </>
            )}
          </Formik>
        </View>
      </NativeBaseProvider>
    );
  }
}
