import React, { useState, useContext } from "react";

import {
  Text,
  NativeBaseProvider,
  Divider,
  Center,
  ScrollView,
  Badge,
  KeyboardAvoidingView,
  View,
  HStack,
  Button,
  VStack,
} from "native-base";
import ReturnArrow from "../../components/ReturnArrow";
import ImageF from "../../components/forms2/ImageF";
// Formik y yup
import * as Yup from "yup";
import { Form, FormField, SubmitButton } from "../../components/forms2";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../database/firebaseConfig";
import { AuthContext, ProfileContext } from "../../auth/context";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  doc,
  getDoc,
  getFirestore,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
// Cositas de firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
// Configuracion para integrar el degradado en el cuadro
const config = {
  dependencies: {
    // For Expo projects (Bare or managed workflow)
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
    // For non expo projects
    // 'linear-gradient': require('react-native-linear-gradient').default,
  },
};

// Cosas de formik
const validationSchema = Yup.object().shape({
  url: Yup.string().required().url().label("Image"),
  name: Yup.string().required().min(4).label("Name"),
  email: Yup.string().required().email().label("Email "),
  typeAccount: Yup.boolean().required(),
});

function AccountSettingsScreen({ navigation }) {
  // Contexts
  const profileContext = useContext(ProfileContext);
  // Variables de objetos
  const { name, email, typeAccount, uid, urlProfile } = profileContext.profile;
  // States
  const [imageUri, setImageUri] = useState(urlProfile);
  const [typeA, setTypeAccount] = useState(typeAccount);

  // Cosa vieja para el tipo de cuenta
  const [tabIndex, setTabIndex] = useState(check(typeAccount));

  // Objetos
  const valoresContext = { name, email, typeAccount, uid, urlProfile };
  // Referencias
  // En el segundo valor hay que definir como lo va a representar, ya que cualquier cambio de foto va a ser un cambio
  const docuRef = doc(firestore, `users/${uid}`);
  // UploadFunction
  function check(typeAccount) {
    if (typeAccount === "comprador") {
      return 0;
    } else {
      return 1;
    }
  }
  // Arrow navigation
  const pressHandler = () => {
    console.log("Pressing");
    navigation.goBack();
  };

  // Funcion handleSaveChanges

  // Esta funcion se necesita volver a logearse para recargar los datos, en dado caso
  // que quisieramos hacer que se actualizaran los datos, deberíamos de hacer una coleccion en
  // realtimedatabase
  const handleSaveChanges = (valuesFormik, contexValues) => {
    const form = {
      name: valuesFormik.name,
      email: valuesFormik.email,
      typeAccount: typeA,
      urlProfile: imageUri,
    };
    console.log(form.typeAccount, form.urlProfile);
    if (
      form.name === contexValues.name &&
      form.email === contexValues.email &&
      form.typeAccount === contexValues.typeAccount &&
      form.urlProfile == contexValues.urlProfile
    ) {
      console.log("Not change int the image");
    } else {
      console.log("Cambio en algo");
      updateDoc(docuRef, {
        email: form.email,
        name: form.name,
        uid: uid,
        typeAccount: form.typeAccount,
        urlProfile: imageUri,
      });
    }
    const docSnap = getDoc(docuRef);
    profileContext.setProfile({ ...docSnap.data() });
  };

  return (
    <NativeBaseProvider config={config}>
      <ScrollView>
        <ReturnArrow onPress={pressHandler} />
        <ProfileContext.Consumer>
          {({ profile, setProfile }) => (
            <KeyboardAvoidingView>
              <View flex={1} padding={6} marginTop={-10}>
                <Text
                  fontSize={"4xl"}
                  fontWeight={"bold"}
                  color={"black"}
                  textAlign={"center"}
                  padding={2}
                >
                  Cuenta
                </Text>
                <Divider bg={"black"} h={1} marginBottom={5} />

                {/* Formulario con los componentes de la carpeta forms2 */}
                <Form
                  initialValues={{
                    name: profile.name,
                    email: profile.email,
                  }}
                  onSubmit={
                    (values) => handleSaveChanges(values, valoresContext)
                    // uploadImage(imageUri)
                  }
                >
                  {/* Fotografia */}
                  <ImageF
                    imageUri={imageUri}
                    onChangeImage={(uri) => setImageUri(uri)}
                  />
                  {/* Fin-Fotografia */}
                  <Text fontWeight={"bold"} fontSize={16} padding={2}>
                    Nombre de la cuenta
                  </Text>
                  <FormField
                    value={profile.name}
                    name={"name"}
                    placeholder="Nombre de la cuenta"
                    autoCapitalize="none"
                  />
                  <Text fontWeight={"bold"} fontSize={16} padding={2}>
                    Correo Electronico
                  </Text>

                  <FormField
                    value={profile.email}
                    name={"email"}
                    placeholder="Correo Electronico"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                  />
                  <Text fontWeight={"bold"} fontSize={16} padding={2}>
                    Tipo de cuenta
                  </Text>
                  <HStack space={2}>
                    <Badge
                      justifyContent={"center"}
                      marginLeft={2}
                      width={"25%"}
                      borderRadius={10}
                      padding={2}
                      colorScheme={typeA == "vendedor" ? "danger" : "success"}
                    >
                      {typeA}
                    </Badge>
                    <VStack>
                      <Text>¿Quierés cambiar el tipo de cuenta?</Text>
                      <Center>
                        <Button
                          width={"50%"}
                          onPress={() => {
                            if (typeA === "vendedor") {
                              setTypeAccount("comprador");
                            } else if (typeA === "comprador") {
                              setTypeAccount("vendedor");
                            }
                            console.log(typeA);
                          }}
                        >
                          Cambiar
                        </Button>
                      </Center>
                    </VStack>
                  </HStack>

                  <SubmitButton title={"Guardar cambios"} />
                </Form>
              </View>
            </KeyboardAvoidingView>
          )}
          {/* Keyboard Avoiding View */}
        </ProfileContext.Consumer>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default AccountSettingsScreen;
