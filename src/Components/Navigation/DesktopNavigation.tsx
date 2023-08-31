import { Box } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { INavbarAction } from "@/pages/index";

const styles = {
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  position: "fixed",
  backgroundColor: "transparent",
  padding: "3rem 10rem",
};

interface IProps {
  navbarActions: any;
  scrollPosition: number;
}

const DesktopNavigation = ({ navbarActions, scrollPosition }: IProps) => {
  console.log(scrollPosition);
  return (
    <Box
      className={
        scrollPosition > 100
          ? `animate-open-desktop-nav`
          : `animate-close-desktop-nav`
      }
      sx={styles}
    >
      {navbarActions.map((item: INavbarAction) => {
        return (
          <Box key={item.title}>
            {/* @ts-ignore */}
            <Button
              variant="ghost"
              _hover={{ backgroundColor: "transparent", color: "red.100" }}
              color="white"
              fontSize={{ base: "0.8rem", md: "1rem" }}
              fontWeight="regular"
              // @ts-ignore
              onClick={item.onClick}
            >
              {item.title}
            </Button>
          </Box>
        );
      })}
    </Box>
  );
};

export default DesktopNavigation;
