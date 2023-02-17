import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

interface INavbarAction {
  title: string;
  onClick: Function;
}

const navbarActions: INavbarAction[] = [
  {
    title: "Home",
    onClick: () => {},
  },
  {
    title: "About Me",
    onClick: () => {},
  },
  {
    title: "Projects",
    onClick: () => {},
  },
  {
    title: "Contact",
    onClick: () => {},
  },
];

const DesktopMenu = () => {
  return (
    <Flex
      width="80%"
      margin="1rem auto"
      justifyContent="space-between"
      display={{ base: "none", md: "flex" }}
    >
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

const SideNav = () => {
  return (
    <Flex
      width="60%"
      h="100vh"
      backgroundColor="salmon"
      display={{ base: "flex", md: "none" }}
      zIndex="3"
    >
      <Flex direction="column" justify="flex-start">
        {navbarActions.map((item: INavbarAction) => {
          return (
            <Button
              variant="ghost"
              _hover={{ backgroundColor: "transparent" }}
              color="white"
              fontSize="1.7rem"
              fontWeight="light"
              w="70px"
            >
              {item.title}
            </Button>
          );
        })}
      </Flex>
    </Flex>
  );
};

const MobileMenu = ({ handleMenuClick }: any) => {
  return (
    <Flex
      width="80%"
      margin="1rem auto"
      justifyContent="space-between"
      display={{ base: "flex", md: "none" }}
      zIndex="1"
    >
      <Button
        display="flex"
        height="60px"
        width="40px"
        flexDirection="column"
        variant="ghost"
        _hover={{ backgroundColor: "transparent" }}
        onClick={handleMenuClick}
      >
        <Box backgroundColor="white" w="35px" h="1px" m="3px 0px"></Box>
        <Box backgroundColor="white" w="35px" h="1px" m="3px 0px"></Box>
        <Box backgroundColor="white" w="35px" h="1px" m="3px 0px"></Box>
      </Button>
    </Flex>
  );
};

const Navbar = () => {
  const [isSideNaveOpen, updateSideNavState] = useState(false);
  return (
    <Box width="100%" position="absolute" zIndex="2">
      {isSideNaveOpen ? <SideNav /> : null}
      <MobileMenu handleMenuClick={() => updateSideNavState(!isSideNaveOpen)} />
      <DesktopMenu />
    </Box>
  );
};

export default Navbar;
