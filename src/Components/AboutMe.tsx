import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { scrollAnimation } from "@/utils";
import { aboutMeTitleAnimation } from "@/utils/animations";
import { aboutMeCopy } from "@/utils/copy";

const style = {
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
  width: { base: "90%", md: "25rem" },
  margin: { base: "0 1rem", md: "0 4rem" },
  fontWeight: "light",
  fontSize: { base: "1rem", md: "1.15rem" },
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
        {/* @ts-ignore */}
        <Text
          sx={{
            ...textStyle,
            fontSize: "3rem",
            fontWeight: "light",
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
