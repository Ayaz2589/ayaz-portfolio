import { useEffect } from "react";
import { Button, Box } from "@chakra-ui/react";
import { INavbarAction } from "@/pages/index";
import { getSectionPosition } from "@/utils";

const styles = {
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  position: "fixed",
  bottom: "0",
  backgroundColor: "white",
  padding: "0.2rem 10rem",
};

const MobileNavigation = ({
  navbarActions,
  scrollPosition,
  changeIcon,
}: {
  navbarActions: INavbarAction[];
  scrollPosition: number;
  changeIcon: Function;
}) => {
  useEffect(() => {
    changeIcon(getSectionPosition(scrollPosition));
  }, [scrollPosition]);

  return (
    <Box sx={styles}>
      {navbarActions.map((item: INavbarAction) => {
        return (
          <Box key={item.title}>
            {/* @ts-ignore */}
            <Button
              sx={{ height: "4rem", width: "4rem" }}
              variant="ghost"
              _hover={{ backgroundColor: "transparent" }}
              color="white"
              fontSize={{ base: "0.8rem", md: "1rem" }}
              fontWeight="regular"
              // @ts-ignore
              onClick={item.onClick}
            >
              {item.icon}
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};

export default MobileNavigation;
