import { Box } from "@mui/system";
import { Button } from "@mui/material";

const navbarActions = [
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
    <Box
      sx={{
        width: "100%",
        position: "absolute",
        zIndex: "2",
      }}
    >
      <Box
        sx={{
          width: "80%",
          margin: "15px auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {navbarActions.map((item: { title: string; onClick: Function }) => {
          return (
            <Box key={item.title} sx={{ borderBottom: "3px solid #fff" }}>
              <Button
                disableRipple
                sx={{
                  "&:hover": { backgroundColor: "transparent" },
                  color: "#fff",
                }}
              >
                {item.title}
              </Button>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Navbar;
