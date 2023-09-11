import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { scrollAnimation } from "@/utils";
import { aboutMeTitleAnimation } from "@/utils/animations";
import { aboutMeCopy } from "@/utils/copy";
import React from "react";

const style = {
  height: "100vh",
  backgroundColor: "transparent",
  minHeight: "800px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: { base: "flex-start", md: "center" },
  opacity: 0,
  zIndex: 1,
  color: "white",
};

const textStyle = {
  width: { base: "90%", md: "20rem", lg: "25rem", xl: "30rem", "2xl": "45rem" },
  margin: { base: "0rem 1rem", md: "0rem 0rem 0rem 4rem" },
  fontWeight: "light",
  fontSize: { base: "1rem", lg: "1.15rem", "2xl": "1.6rem" },
  letterSpacing: "0.15rem",
  opacity: 1,
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
        className={scrollAnimation(aboutMeTitleAnimation, scrollPosition)}
        sx={style}
      >
        <Text
          sx={{
            ...textStyle,
            fontSize: "3rem",
            fontWeight: "light",
            margin: { base: "2rem 0rem 0rem 1rem", md: "0rem 0rem 0rem 4rem" },
          }}
        >
          About Me
        </Text>
        <Text sx={textStyle}>{aboutMeCopy}</Text>
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
