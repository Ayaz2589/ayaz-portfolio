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

interface IProps {
  handleAboutClick: Function;
  handleIntroClick: Function;
  scrollPosition: number;
}

const Navbar = ({
  handleAboutClick,
  handleIntroClick,
  scrollPosition,
}: IProps) => {
  const [isSideNaveOpen, updateSideNavState] = useState(false);

  const navbarActions: INavbarAction[] = [
    {
      title: "Home",
      onClick: () => handleIntroClick(),
    },
    {
      title: "About Me",
      onClick: () => handleAboutClick(),
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

  const handleMenuClick = () => {
    if (isSideNaveOpen) {
      updateSideNavState(false);
    } else {
      updateSideNavState(true);
    }
  };

  return (
    <Box width="100%" position="absolute" zIndex="2">
      {isSideNaveOpen ? (
        <SideNav
          handleMenuClick={handleMenuClick}
          navbarActions={navbarActions}
        />
      ) : null}
      <MobileNavigation handleMenuClick={handleMenuClick} />
      <DesktopNavigation
        navbarActions={navbarActions}
        scrollPosition={scrollPosition}
      />
    </Box>
  );
};

export default Navbar;
