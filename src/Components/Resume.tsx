import { Box, Text, Container, Button } from "@chakra-ui/react";
import { isMobile } from "react-device-detect";

import FigmaSVG from "./svg/FigmaSVG";
import JavascriptSVG from "./svg/JavascriptSVG";
import ResearchSVG from "./svg/ResearchSVG";
import CollaborationSVG from "./svg/CollaborationSVG";

const style = {
  height: "100vh",
  minHeight: "800px",
  display: "flex",
  justifyContent: "center",
};

const mobileContainerStyle = {
  margin: "1.5rem 0",
  position: "relative",
  opacity: 0,
};

interface IProps {
  scrollPosition: number;
  resumeRef: any;
  isLargerThan800: boolean;
}

const Resume = ({ resumeRef, scrollPosition, isLargerThan800 }: IProps) => {
  return (
    <Box ref={resumeRef} sx={style}>
      <ResumeDetails resumeRef={resumeRef} scrollPosition={scrollPosition} />
      {isLargerThan800 ? <DesktopIcons /> : null}
    </Box>
  );
};

const ResumeDetails = ({ resumeRef, scrollPosition }: any) => {
  return (
    <Box ref={resumeRef} sx={style}>
      <Box>
        <Container
          sx={{
            width: "100%",
            position: "relative",
            opacity: 0,
            margin: "1rem 0",
          }}
          className={
            scrollPosition > 1500
              ? `paragraph-animation-appear`
              : `paragraph-animation-disappear`
          }
        >
          <Text
            sx={{
              fontSize: "3rem",
              fontWeight: "light",
              padding: {
                base: "1.5rem 0rem 0rem 0rem",
                md: "5rem 0rem 0rem 0rem",
              },
              margin: { base: "0", md: "1.5rem 0" },
            }}
          >
            Resume
          </Text>
        </Container>
        <Container
          sx={{ position: "relative", opacity: 0, margin: "1.5rem 0" }}
          className={
            scrollPosition > 1500
              ? `paragraph-animation-appear-delay-1`
              : `paragraph-animation-disappear`
          }
        >
          <Text sx={{ fontSize: "1.4rem", fontWeight: "light" }}>Design</Text>
          <Text sx={{ fontSize: "0.9rem" }}>
            Illustration & UI Graphics, Strategy & Vision Presentation, User
            Flows, Task Flows, Concept Sketches, Wireframes, Figma Advance
            Features (Auto-Layout, Components, Variables, Smart Animation),
            Rapid Prototyping using Figma.
          </Text>
        </Container>
        <Container
          sx={mobileContainerStyle}
          className={
            scrollPosition > 1500
              ? `paragraph-animation-appear-delay-2`
              : `paragraph-animation-disappear`
          }
        >
          <Text sx={{ fontSize: "1.4rem", fontWeight: "light" }}>
            Development
          </Text>
          <Text sx={{ fontSize: "0.9rem" }}>
            HTML, CSS, Javascript (Next.js, React, Node.js), Git, VSCode,
            Storybook.
          </Text>
        </Container>
        <Container
          sx={mobileContainerStyle}
          className={
            scrollPosition > 1500
              ? `paragraph-animation-appear-delay-3`
              : `paragraph-animation-disappear`
          }
        >
          <Text sx={{ fontSize: "1.4rem", fontWeight: "light" }}>Research</Text>
          <Text sx={{ fontSize: "0.9rem" }}>
            Data Analysis (Data Dog, Statista), User Interviews, A/B Testing,
            User Research Reports, User Research Presentations.
          </Text>
        </Container>
        <Container
          sx={mobileContainerStyle}
          className={
            scrollPosition > 1500
              ? `paragraph-animation-appear-delay-4`
              : `paragraph-animation-disappear`
          }
        >
          <Text sx={{ fontSize: "1.4rem", fontWeight: "light" }}>
            Collaboration
          </Text>
          <Text sx={{ fontSize: "0.9rem" }}>
            Facilitaing Design Critiques, Self Starter, Agile, Scrum, JIRA
          </Text>
        </Container>
        <Button
          variant="ghost"
          sx={{
            color: "#E0921F",
            margin: "rem 0rem",
            opacity: 0,
            position: "relative",
          }}
          className={
            scrollPosition > 1500
              ? `paragraph-animation-appear-delay-5`
              : `paragraph-animation-disappear`
          }
        >
          View Resume
        </Button>
      </Box>
    </Box>
  );
};

const DesktopIcons = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: "auto 0",
      }}
    >
      <Box>
        <FigmaSVG style={{ margin: "1rem" }} />
        <ResearchSVG style={{ margin: "2rem 1.5rem" }} />
      </Box>
      <Box>
        <CollaborationSVG style={{ margin: "1rem" }} />
        <JavascriptSVG style={{ margin: "1rem" }} />
      </Box>
    </Box>
  );
};

export default Resume;
