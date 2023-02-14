import { Box } from "@mui/system";
import Image from "next/legacy/image";
import { Typography } from "@mui/material";
import { NameAnimation, Title } from "@/Components";

const Intro = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "salmon",
        minHeight: "800px",
        position: "relative",
      }}
    >
      <Title />
      <NameAnimation />
    </Box>
  );
};

export default Intro;
