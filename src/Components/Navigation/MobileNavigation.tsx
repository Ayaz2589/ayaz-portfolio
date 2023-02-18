import { Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const MobileNavigation = ({ handleMenuClick }: any) => {
  return (
    <Flex
      width="80%"
      margin="1rem auto"
      justifyContent="space-between"
      display={{ base: "flex", lg: "none" }}
      zIndex="1"
    >
      <Button
        display="flex"
        height="60px"
        width="40px"
        flexDirection="column"
        variant="ghost"
        _hover={{ backgroundColor: "transparent" }}
        onClick={() => handleMenuClick()}
      >
        <HamburgerIcon fontSize="2rem" color="white" />
      </Button>
    </Flex>
  );
};

export default MobileNavigation;
