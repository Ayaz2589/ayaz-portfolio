import { Box, Flex } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

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

const Navbar = () => {
  return (
    <Box width="100%" position="absolute" zIndex="2">
      <Flex width="80%" margin="1rem auto" justifyContent="space-between">
        {navbarActions.map((item: INavbarAction) => {
          return (
            <Box key={item.title} borderBottom="0.05em solid white">
              <Button
                variant="ghost"
                _hover={{ backgroundColor: "transparent", color: "red.100" }}
                color="white"
                fontSize="1em"
                fontWeight="light"
              >
                {item.title}
              </Button>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Navbar;
