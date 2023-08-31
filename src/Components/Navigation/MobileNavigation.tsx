import { Button, Box, Flex } from "@chakra-ui/react";

const styles = {
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  position: "fixed",
  bottom: "0",
  backgroundColor: "white",
  padding: "0.2rem 10rem",
};

const MobileNavigation = ({ navbarActions }: any) => {
  console.log(navbarActions);
  return (
    <Box sx={styles}>
      {navbarActions.map((item: any) => {
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
