import { Box, Text, Container, Button } from "@chakra-ui/react";

const style = {
  height: "100vh",
  backgroundColor: "#eee",
  minHeight: "800px",
};

const mobileContainerStyle = {
  margin: "1.5rem 0",
  position: "relative",
  opacity: 0,
};

interface IProps {
  scrollPosition: number;
  resumeRef: any;
}

const Resume = ({ resumeRef, scrollPosition }: IProps) => {
  return (
    <Box ref={resumeRef} sx={style}>
      <Container
        sx={{ width: "100%", position: "relative", opacity: 0 }}
        className={
          scrollPosition > 1500
            ? `paragraph-animation-appear`
            : `paragraph-animation-disappear`
        }
      >
        <Text
          sx={{ fontSize: "3rem", fontWeight: "light", padding: "2rem 0rem" }}
        >
          Resume
        </Text>
      </Container>
      <Box>
        <Container
          sx={{ marging: "0rem 1rem", position: "relative", opacity: 0 }}
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
      </Box>
      <Button
        variant="ghost"
        sx={{
          color: "#E0921F",
          margin: "1rem 0rem",
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
  );
};

export default Resume;
