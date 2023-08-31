import { Box, Text } from "@chakra-ui/react";

const style = {
  height: "100vh",
  backgroundColor: "white",
  minHeight: "800px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  opacity: 0,
};

const textStyle = {
  width: "30%",
  margin: "0 4rem",
};

interface IProps {
  scrollPosition: number;
  aboutRef: any;
}

const AboutMe = ({ scrollPosition, aboutRef }: IProps) => {
  return (
    <Box
      className={
        scrollPosition > 700
          ? `paragraph-animation-appear`
          : `paragraph-animation-disappear`
      }
      sx={style}
      ref={aboutRef}
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
  );
};

export default AboutMe;
