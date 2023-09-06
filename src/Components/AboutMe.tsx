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
        className={
          scrollPosition > 700
            ? `paragraph-animation-appear`
            : `paragraph-animation-disappear`
        }
        sx={style}
      >
        {/* @ts-ignore */}
        <Text
          sx={{
            ...textStyle,
            fontSize: { base: "1rem", md: "3rem" },
            fontWeight: "light",
          }}
        >
          About Me
        </Text>
        <Text sx={textStyle}>
          {`With seven years of experience as a front-end developer and a recent
          UX/UI certification from BrainStation, I've worked closely with design
          teams, sharpening my eye for user-centric design principles.
          Transitioning from development to product design, I bring strong
          technical skills in HTML, CSS, and JavaScript (especially React),
          bridging the gap between design and development effortlessly. I'm
          adept at engaging in productive conversations with various teams,
          thanks to my innate empathy. Additionally, I'm proficient in AI tools
          like Chat GPT and GitHub Co-Pilot, enhancing my efficiency and
          innovation in design.`}
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
