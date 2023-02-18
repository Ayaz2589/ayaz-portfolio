import { useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useScrollLock } from "@/utils";
import { CloseIcon } from "@chakra-ui/icons";
import { navbarActions, INavbarAction } from "@/Components/Navigation/Navbar";

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

export default SideNav;
