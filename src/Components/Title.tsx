import { Box } from "@chakra-ui/react";

import Image from "next/image";

const Title = () => {
  return (
    <Box>
      <Image
        src="/nyc.jpeg"
        fill
        style={{ objectFit: "cover" }}
        alt="title image"
      />
      <Box
        backgroundColor="#000"
        width="100%"
        height="100%"
        zIndex="1"
        position="absolute"
        opacity="0.6"
      ></Box>
    </Box>
  );
};

export default Title;
