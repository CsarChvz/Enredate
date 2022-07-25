import React from "react";
import { Center, ScrollView, VStack, FlatList } from "native-base";

// Componente
import ImageProductC from "./ImageProductC";
function FeedListC({ list }) {
  return (
    <Center>
      <VStack>
        <FlatList
          numColumns={3}
          data={list}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <ImageProductC
              name={item.name}
              onPress={({ item }) => console.log(item)}
            />
          )}
        />
      </VStack>
    </Center>
  );
}

export default FeedListC;
