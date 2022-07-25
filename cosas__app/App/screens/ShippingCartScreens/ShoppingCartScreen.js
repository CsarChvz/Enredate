import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  HStack,
  NativeBaseProvider,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";

// Componentes
import HeaderScreenC from "../../components/HeaderScreenC";
import ProductCartList from "../../components/lists/ProductCartList";
import DetailsShippingCart from "../../components/DetailsShippingCart";
const lista = [
  { id: 1, name: "Item uno", price: 99 },
  { id: 2, name: "Item dos", price: 100 },
  { id: 3, name: "Item tres", price: 230 },
  { id: 4, name: "Item cuatro", price: 54 },
  { id: 5, name: "Item cicno", price: 23 },
  { id: 6, name: "Item seis", price: 76 },
  { id: 7, name: "Item siete", price: 546 },
];
function ShoppingCartScreen(props) {
  return (
    <NativeBaseProvider>
      <HeaderScreenC title={"Carrito"} />
      <ProductCartList lista={lista} />
      <DetailsShippingCart total={"Total"} cantidad={"Cantidad"} />
      {/* Boton */}
      <Center padding={2}>
        <Button
          _text={{
            fontSize: 16,
            fontWeight: "bold",
          }}
          borderRadius={20}
          py={1}
        >
          Proceder al pago
        </Button>
      </Center>
      {/* Fin del boton */}
    </NativeBaseProvider>
  );
}

export default ShoppingCartScreen;
