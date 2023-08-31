import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const style = {
  height: "100vh",
  backgroundColor: "transparent",
  minHeight: "800px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  opacity: 0,
  zIndex: 1,
  color: "white",
};

const textStyle = {
  width: "30%",
  margin: "0 4rem",
  fontWeight: "light",
  fontSize: { base: "1rem", md: "1.15rem" },
  letterSpacing: "0.15rem",
};

interface IProps {
  scrollPosition: number;
  aboutRef: any;
}

const AboutMe = ({ scrollPosition, aboutRef }: IProps) => {
  return (
    <Box ref={aboutRef} position="relative">
      <AboutMeBackground />
      <Box
        className={
          scrollPosition > 700
            ? `paragraph-animation-appear`
            : `paragraph-animation-disappear`
        }
        sx={style}
      >
        {/* @ts-ignore */}
        <Text sx={textStyle}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Text>
      </Box>
    </Box>
  );
};

const AboutMeBackground = () => {
  return (
    <Box>
      <Image
        src="/about.jpg"
        fill
        style={{ objectFit: "cover" }}
        alt="title image"
      />
      <Box
        backgroundColor="#000"
        width="100%"
        height="100%"
        zIndex="1"
        position="absolute"
        opacity="0.7"
      ></Box>
    </Box>
  );
};

export default AboutMe;
