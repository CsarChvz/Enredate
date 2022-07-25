import React from "react";
import { Box, Text } from "native-base";
function HeaderScreenC({ title }) {
  return (
    <Box background={"purple.600"} h={[12, 20, 24]} justifyContent={"center"}>
      <Text
        padding={2}
        color={"white"}
        fontSize={[20, 25, 30]}
        fontWeight={"bold"}
      >
        {title}
      </Text>
    </Box>
  );
}

export default HeaderScreenC;
