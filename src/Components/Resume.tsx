import { Box, Text, Container, Button } from "@chakra-ui/react";

import { scrollAnimation } from "@/utils";
import FigmaSVG from "./svg/FigmaSVG";
import JavascriptSVG from "./svg/JavascriptSVG";
import ResearchSVG from "./svg/ResearchSVG";
import CollaborationSVG from "./svg/CollaborationSVG";
import {
  resumeTitleAnimation,
  designAnimation,
  developmentAnimation,
  researchAnimation,
  collaborationAnimation,
  buttonAnimation,
} from "@/utils/animations";
import {
  resumeDesignCopy,
  resumeDevelopmentCopy,
  resumeResearchCopy,
  resumeCollaborationCopy,
} from "@/utils/copy";

const style = {
  height: "100vh",
  minHeight: "800px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: { base: "none", md: "center" },
};

const mobileContainerStyle = {
  margin: "1.5rem 0",
  position: "relative",
  opacity: 0,
};

interface IProps {
  scrollPosition: number;
  resumeRef: any;
  isMobile: boolean;
}

const Resume = ({ resumeRef, scrollPosition, isMobile }: IProps) => {
  return (
    <Box ref={resumeRef} sx={style}>
      <ResumeDetails resumeRef={resumeRef} scrollPosition={scrollPosition} />
      {isMobile ? <DesktopIcons /> : null}
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
          className={scrollAnimation(resumeTitleAnimation, scrollPosition)}
        >
          <Text
            sx={{
              fontSize: "3rem",
              fontWeight: "light",
            }}
          >
            Resume
          </Text>
        </Container>
        <Container
          sx={{ position: "relative", opacity: 0, margin: "1.5rem 0" }}
          className={scrollAnimation(designAnimation, scrollPosition)}
        >
          <Text sx={{ fontSize: "1.4rem", fontWeight: "light" }}>Design</Text>
          <Text sx={{ fontSize: "0.9rem" }}>{resumeDesignCopy}</Text>
        </Container>
        <Container
          sx={mobileContainerStyle}
          className={scrollAnimation(developmentAnimation, scrollPosition)}
        >
          <Text sx={{ fontSize: "1.4rem", fontWeight: "light" }}>
            Development
          </Text>
          <Text sx={{ fontSize: "0.9rem" }}>{resumeDevelopmentCopy}</Text>
        </Container>
        <Container
          sx={mobileContainerStyle}
          className={scrollAnimation(researchAnimation, scrollPosition)}
        >
          <Text sx={{ fontSize: "1.4rem", fontWeight: "light" }}>Research</Text>
          <Text sx={{ fontSize: "0.9rem" }}>{resumeResearchCopy}</Text>
        </Container>
        <Container
          sx={mobileContainerStyle}
          className={scrollAnimation(collaborationAnimation, scrollPosition)}
        >
          <Text sx={{ fontSize: "1.4rem", fontWeight: "light" }}>
            Collaboration
          </Text>
          <Text sx={{ fontSize: "0.9rem" }}>{resumeCollaborationCopy}</Text>
        </Container>
        <Button
          colorScheme="orange"
          sx={{
            opacity: 0,
            position: "relative",
            margin: "2rem 0rem 0rem 1rem",
          }}
          className={scrollAnimation(buttonAnimation, scrollPosition)}
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
