import React from "react";
import {
  FlatList,
  NativeBaseProvider,
  ScrollView,
  VStack,
  Center,
  Divider,
} from "native-base";
import ProductoInShippingCart from "../ProductoInShippingCart";
function ProductCartList({ lista }) {
  return (
    <NativeBaseProvider>
      <Center justifyContent={"flex-start"} flex={1}>
        <ScrollView marginBottom={3}>
          <VStack space={2}>
            <FlatList
              data={lista}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <ProductoInShippingCart name={item.name} price={item.price} />
              )}
            />
          </VStack>
        </ScrollView>
        <Divider height={1} bg={"black"} width={"90%"} margin={2}></Divider>
      </Center>
    </NativeBaseProvider>
  );
}

export default ProductCartList;
