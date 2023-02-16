import { Box } from "@chakra-ui/react";
import { NameAnimation, Title } from "@/Components";

const Intro = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "salmon",
        minHeight: "800px",
        position: "relative",
      }}
    >
      <Title />
      <NameAnimation />
    </Box>
  );
};

export default Intro;
