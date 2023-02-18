import { useState, useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useScrollLock } from "@/utils";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

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

const SideNav = ({ handleMenuClick }: any) => {
  const { lockScroll, unlockScroll } = useScrollLock();
  useEffect(() => {
    lockScroll();
    return () => unlockScroll();
  }, []);

  const closeSideNav = () => {
    const sidenav = document.getElementsByClassName("sidenav")[0];
    if (sidenav.classList.contains("sidenav-animate-open")) {
      sidenav.classList.replace(
        "sidenav-animate-open",
        "sidenav-animate-close"
      );
    }
  };

  return (
    <Flex
      width="250px"
      h="100vh"
      backgroundColor="white"
      display={{ base: "flex", md: "none" }}
      zIndex="3"
      direction="column"
      className="sidenav sidenav-animate-open"
      position="relative"
      onAnimationEnd={() => {
        const sidenav = document.getElementsByClassName("sidenav")[0];
        if (sidenav.classList.contains("sidenav-animate-close")) {
          unlockScroll();
          handleMenuClick();
        }
      }}
    >
      <Button onClick={closeSideNav}>
        <CloseIcon />
      </Button>
      <Flex direction="column" mt="30px" className="side-nav">
        {navbarActions.map((item: INavbarAction) => {
          return (
            <Button
              variant="ghost"
              _hover={{ backgroundColor: "transparent" }}
              m="1rem 0px"
              fontWeight="slim"
            >
              <Text fontSize="1.4rem" color="black">
                {item.title}
              </Text>
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
        onClick={() => handleMenuClick()}
      >
        <HamburgerIcon fontSize="2rem" color="white" />
      </Button>
    </Flex>
  );
};

const Navbar = () => {
  const [isSideNaveOpen, updateSideNavState] = useState(false);

  const handleMenuClick = () => {
    if (isSideNaveOpen) {
      updateSideNavState(false);
    } else {
      updateSideNavState(true);
    }
  };

  return (
    <Box width="100%" position="absolute" zIndex="2">
      {isSideNaveOpen ? <SideNav handleMenuClick={handleMenuClick} /> : null}
      <MobileMenu handleMenuClick={handleMenuClick} />
      <DesktopMenu />
    </Box>
  );
};

export default Navbar;
