import { Box } from "@chakra-ui/react";
import { NameAnimation, Title } from "@/Components";

const nameToDisplay = "AYAZ UDDIN";

interface IProps {
  introRef: any;
}

const Intro = ({ introRef }: IProps) => {
  return (
    <Box
      backgroundColor="salmon"
      minHeight="800px"
      position="relative"
      ref={introRef}
    >
      <Title />
      <NameAnimation nameToDisplay={nameToDisplay} addSymbol={true} />
    </Box>
  );
};

export default Intro;
