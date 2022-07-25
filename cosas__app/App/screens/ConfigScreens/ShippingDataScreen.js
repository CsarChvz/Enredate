import React, { useContext, useState } from "react";
import {
  Box,
  Text,
  NativeBaseProvider,
  Divider,
  Center,
  ScrollView,
  VStack,
  HStack,
  KeyboardAvoidingView,
} from "native-base";
import * as Yup from "yup";
import { Form, FormField, SubmitButton } from "../../components/forms2";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../database/firebaseConfig";
import { AuthContext, ProfileContext } from "../../auth/context";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
// Cositas de firebase
const validationSchema = Yup.object().shape({
  streetName: Yup.string().required().label("Dirección"),
  postalCode: Yup.number().required().min(5).label("Código postal"),
  phoneNumber: Yup.number().required().min(10).label("Número telefonico"),
});
import ReturnArrow from "../../components/ReturnArrow";
function ShippingDataScreen({ navigation }) {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);
  const profileContext = useContext(ProfileContext);
  const { uid } = profileContext.profile;

  // Por el momento solo abra un documento con una dirección, la cual esta en una subcoleccion

  // Después habra unalista de direcciones para elegir, la cual van a hacer varios documentos con los valores de las direcciones
  // Ejemplo:
  //       - direcciónN (randomString){
  // streetName
  // postalCode
  // phoneNumber
  // outdoorNumber (sSiguientes versiones)
  // indoorNumber (siguientes versiones y Opcional)
  //          }

  async function makeDocumentSubCollection(values) {
    const docRef = doc(firestore, "users", `${uid}`, "shippingData", `${uid}`);
    await setDoc(docRef, {
      streetName: values.streetName,
      postalCode: values.postalCode,
      phoneNumber: values.phoneNumber,
    });
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }
  const pressHandler = () => {
    console.log("Pressing");
    navigation.goBack();
  };
  return (
    <NativeBaseProvider>
      <ScrollView>
        <ReturnArrow onPress={pressHandler} />
        <ProfileContext.Consumer>
          {({ profile, setProfile }) => (
            <KeyboardAvoidingView>
              <Box flex={1} padding={6}>
                <Text
                  fontSize={"4xl"}
                  fontWeight={"bold"}
                  color={"black"}
                  textAlign={"center"}
                  padding={2}
                >
                  Datos de envio
                </Text>
                <Divider bg={"black"} h={1} />
                <Form
                  initialValues={{
                    streetName: "",
                    postalCode: "",
                    phoneNumber: "",
                  }}
                  onSubmit={(values) => makeDocumentSubCollection(values)}
                >
                  <VStack space={2} mt="0">
                    <Text fontWeight={"bold"} fontSize={16} padding={2}>
                      Nombre de la calle
                    </Text>
                    <FormField
                      name={"streetName"}
                      placeholder={"Dirección de envío"}
                    />
                    <HStack space={5}>
                      <VStack>
                        <Text fontWeight={"bold"} fontSize={16} padding={2}>
                          Nombre de la cuenta
                        </Text>
                        <FormField
                          name={"postalCode"}
                          placeholder={"Código postal"}
                          keyboardType="numeric"
                          maxLength={5}
                        />
                      </VStack>
                      <VStack>
                        <Text fontWeight={"bold"} fontSize={16} padding={2}>
                          Número telefonico
                        </Text>
                        <FormField
                          name={"phoneNumber"}
                          keyboardType="numeric"
                          maxLength={10}
                          placeholder={"Número telefonico"}
                        />
                      </VStack>
                    </HStack>
                  </VStack>
                  <Center>
                    <SubmitButton title={"Guardar cambios"} />
                  </Center>
                </Form>
              </Box>
            </KeyboardAvoidingView>
          )}
        </ProfileContext.Consumer>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default ShippingDataScreen;
