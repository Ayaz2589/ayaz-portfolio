import { useState } from "react";
import { Box, useMediaQuery } from "@chakra-ui/react";
import { DesktopNavigation, MobileNavigation } from "@/Components/Navigation";
import { INavbarAction } from "@/pages/index";
import { useScrollPosition } from "@/utils";

interface IProps {
  navbarActions: INavbarAction[];
}

const Navbar = ({ navbarActions }: IProps) => {
  const scrollPosition = useScrollPosition();
  const [isMobile] = useMediaQuery("(min-width: 900px)");

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
