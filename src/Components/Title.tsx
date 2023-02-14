import { Box } from "@mui/system";
import Image from "next/legacy/image";

const Title = () => {
  return (
    <Box>
      <Image src="/test.jpeg" layout="fill" />
      <Box
        sx={{
          backgroundColor: "#000",
          width: "100%",
          height: "100%",
          zIndex: "1",
          position: "absolute",
          opacity: "0.4",
        }}
      ></Box>
    </Box>
  );
};

export default Title;
