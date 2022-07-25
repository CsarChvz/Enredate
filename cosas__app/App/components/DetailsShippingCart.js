import React from "react";
import { Box, VStack, Text, HStack } from "native-base";
function DetailsShippingCart({ total, cantidad }) {
  return (
    <Box paddingX={4}>
      <VStack padding={3}>
        <HStack justifyContent={"space-between"}>
          <Text fontSize={20} fontWeight={"bold"}>
            Total:
          </Text>
          <Text>{total}</Text>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text fontSize={15}>Cantidad:</Text>
          <Text>{cantidad}</Text>
        </HStack>
      </VStack>
    </Box>
  );
}

export default DetailsShippingCart;
