import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { DesktopNavigation, MobileNavigation } from "@/Components/Navigation";
import { INavbarAction } from "@/pages/index";

interface IProps {
  navbarActions: INavbarAction[];
  isMobile: boolean;
  scrollPosition: number;
}

const Navbar = ({ navbarActions, isMobile, scrollPosition }: IProps) => {
  return (
    <Box width="100%" position="absolute" zIndex="2">
      {isMobile ? (
        <DesktopNavigation
          navbarActions={navbarActions}
          scrollPosition={scrollPosition}
        />
      ) : (
        <MobileNavigation navbarActions={navbarActions} />
      )}
    </Box>
  );
};

export default Navbar;
