import React from "react";
import { Box } from "native-base";
function CategoryTitle({ name, backgroundColor }) {
  return (
    <Box
      bg={backgroundColor}
      paddingX={[16, 24, 32]}
      paddingY={[1.5, 3, 4]}
      borderRadius={10}
      _text={{
        fontSize: ["lg", "xl", "2xl"],
        fontWeight: "bold",
        letterSpacing: 1,
      }}
    >
      {name}
    </Box>
  );
}

export default CategoryTitle;
