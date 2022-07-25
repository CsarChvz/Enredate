import React from "react";
import { FlatList, VStack, ScrollView, Center } from "native-base";
import CategoryComponentC from "./CategoryComponentC";
function CategoriesList({ list, ...otherProps }) {
  return (
    <Center>
      <ScrollView>
        <VStack paddingTop={10}>
          <FlatList
            numColumns={3}
            data={list}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <CategoryComponentC
                name={item.label}
                backgroundColor={item.backgroundColor}
                onPress={({ item }) => console.log(item)}
              />
            )}
          />
        </VStack>
      </ScrollView>
    </Center>
  );
}

export default CategoriesList;
