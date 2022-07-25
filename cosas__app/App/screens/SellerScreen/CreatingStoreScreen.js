import React from "react";
import {
  NativeBaseProvider,
  Box,
  KeyboardAvoidingView,
  VStack,
  ScrollView,
  Center,
  Select,
  Button,
  Container,
} from "native-base";

import HeaderScreenC from "../../components/HeaderScreenC";
import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../../components/forms";
import * as Yup from "yup";
import ScreenC from "../../components/ScreenC";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

function CreatingStoreScreen(props) {
  return (
    <NativeBaseProvider>
      <ScreenC>
        <ScrollView>
          {/* Si es necesario, quitar el encabezado */}
          <HeaderScreenC title={"Creación del perfil de la tienda"} />
          <KeyboardAvoidingView>
            <Form
              initialValues={{
                title: "",
                description: "",
                category: null,
              }}
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}
            >
              <FormField maxLength={255} name="title" placeholder="Title" />
              <Picker
                items={categories}
                name="category"
                placeholder="Category"
              />
              <FormField
                maxLength={255}
                multiline
                name="description"
                numberOfLines={3}
                placeholder="Description"
              />
              <SubmitButton title="Post" />
            </Form>
          </KeyboardAvoidingView>
        </ScrollView>
      </ScreenC>
    </NativeBaseProvider>
  );
}

export default CreatingStoreScreen;
