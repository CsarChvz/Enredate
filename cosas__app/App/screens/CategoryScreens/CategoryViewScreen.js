import React from "react";
import {
  Center,
  NativeBaseProvider,
  VStack,
  FlatList,
  ScrollView,
  Divider,
} from "native-base";
import SquareStoreC from "../../components/SquareStoreC";
import CategoryTitle from "../../components/CategoryTitle";

const valores = [
  { item: 1, name: "UWu" },
  { item: 2, name: "DOs" },
  { item: 3, name: "tres" },
  { item: 4, name: "cuatr" },
  { item: 5, name: "cicio" },
  { item: 6, name: "seis" },
  { item: 7, name: "siete" },
  { item: 8, name: "ochco" },
  { item: 9, name: "nueve" },
];
function CategoryViewScreen(props) {
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center
          padding={1}
          flex={1}
          paddingTop={3}
          justifyContent={"flex-start"}
          alignItems={"center"}
        >
          {/* Titulo de la categoria */}
          <CategoryTitle name={"Categoria"} backgroundColor={"gray.700"} />

          <Divider marginTop={5} width={"90%"} />

          {/* Tiendas con un ScrolLvIEW */}
          <ScrollView horizontal>
            <VStack space={2} paddingTop={4}>
              <FlatList
                data={valores}
                numColumns={("3", "2")}
                keyExtractor={({ item }) => item.item}
                renderItem={({ item }) => (
                  <SquareStoreC name={item.name} key={item.value} />
                )}
              />
            </VStack>
          </ScrollView>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default CategoryViewScreen;
