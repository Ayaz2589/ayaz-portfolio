import { useState } from "react";
import { Box } from "@chakra-ui/react";
import { DesktopNavigation, MobileNavigation } from "@/Components/Navigation";

interface IProps {
  navbarActions: any;
  isLargerThan800: boolean;
  scrollPosition: number;
}

const Navbar = ({ navbarActions, isLargerThan800, scrollPosition }: IProps) => {
  return (
    <Box width="100%" position="absolute" zIndex="2">
      {isLargerThan800 ? (
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
