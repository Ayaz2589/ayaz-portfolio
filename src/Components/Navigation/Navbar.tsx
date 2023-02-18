import { useState } from "react";
import { Box } from "@chakra-ui/react";
import {
  SideNav,
  DesktopNavigation,
  MobileNavigation,
} from "@/Components/Navigation";

export interface INavbarAction {
  title: string;
  onClick: Function;
}

export const navbarActions: INavbarAction[] = [
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
      <MobileNavigation handleMenuClick={handleMenuClick} />
      <DesktopNavigation />
    </Box>
  );
};

export default Navbar;
