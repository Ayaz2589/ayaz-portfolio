import { Box } from "@chakra-ui/react";
import { NameAnimation, Title } from "@/Components";

const nameToDisplay = "AYAZ UDDIN";

const Intro = () => {
  return (
    <Box
      h="100vh"
      backgroundColor="salmon"
      minHeight="800px"
      position="relative"
    >
      <Title />
      <NameAnimation nameToDisplay={nameToDisplay} addSymbol={true} />
    </Box>
  );
};

export default Intro;
