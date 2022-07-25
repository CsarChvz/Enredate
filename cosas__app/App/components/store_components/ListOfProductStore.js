import React from "react";
import { Center, ScrollView, VStack, FlatList } from "native-base";

// Componente
import { ProductStore } from ".";
function ListOfProductStore({ list }) {
  return (
    <Center>
      <VStack>
        <FlatList
          numColumns={3}
          data={list}
          keyExtractor={(item) => item.price.toString()}
          renderItem={({ item }) => (
            <ProductStore
              name={item.name}
              onPress={({ item }) => console.log(item)}
            />
          )}
        />
      </VStack>
    </Center>
  );
}

export default ListOfProductStore;
