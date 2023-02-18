import { Box, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { navbarActions, INavbarAction } from "@/Components/Navigation/Navbar";

const styles = {
  width: "80%",
  margin: "1rem auto",
  justifyContent: "space-between",
  display: { base: "none", lg: "flex" },
};

const DesktopNavigation = () => {
  return (
    <Flex sx={styles}>
      {navbarActions.map((item: INavbarAction) => {
        return (
          <Box key={item.title} borderBottom="0.05em solid white">
            <Button
              variant="ghost"
              _hover={{ backgroundColor: "transparent", color: "red.100" }}
              color="white"
              fontSize={{ base: "0.8rem", md: "1rem" }}
              fontWeight="light"
            >
              {item.title}
            </Button>
          </Box>
        );
      })}
    </Flex>
  );
};

export default DesktopNavigation;
