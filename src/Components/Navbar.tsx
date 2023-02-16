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
      <Flex width="80%" margin="15px auto" justifyContent="space-between">
        {navbarActions.map((item: INavbarAction) => {
          return (
            <Box key={item.title} borderBottom="3px solid #fff">
              <Button
                variant="ghost"
                _hover={{ backgroundColor: "transparent" }}
                color="#fff"
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
