import { Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

import { scrollAnimation } from "@/utils";
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
  margin: { base: "0 1rem", md: "0rem 0rem 0rem 4rem" },
  alignItems: { base: "none", md: "center" },
};

const skillsTextStyle = {
  fontWeight: "light",
  letterSpacing: "0.15rem",
  fontSize: { base: "0.8rem", lg: "1rem", "2xl": "1.5rem" },
};

const skillsHeaderTextStyle = {
  letterSpacing: "0.15rem",
  fontSize: { base: "1.1rem", lg: "1.7rem", "2xl": "2rem" },
};

interface IProps {
  scrollPosition: number;
  resumeRef: any;
  isMobile: boolean;
}

interface ISkill {
  title: string;
  copy: string;
  animation: { appear: string; disappear: string; screenPosition: number };
}

const Resume = ({ resumeRef, scrollPosition, isMobile }: IProps) => {
  return (
    <Box ref={resumeRef} sx={style}>
      <ResumeDetails scrollPosition={scrollPosition} />
      {isMobile ? <DesktopIcons /> : null}
    </Box>
  );
};

const skills: ISkill[] = [
  {
    title: "Design",
    copy: resumeDesignCopy,
    animation: designAnimation,
  },
  {
    title: "Development",
    copy: resumeDevelopmentCopy,
    animation: developmentAnimation,
  },
  {
    title: "Research",
    copy: resumeResearchCopy,
    animation: researchAnimation,
  },
  {
    title: "Collaboration",
    copy: resumeCollaborationCopy,
    animation: collaborationAnimation,
  },
];

const ResumeDetails = ({ scrollPosition }: { scrollPosition: number }) => {
  return (
    <Box sx={{ width: { base: "85%", md: "65%" } }}>
      <Box
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
      </Box>
      {skills.map((skill) => {
        return (
          <SkillSection
            skill={skill}
            scrollPosition={scrollPosition}
            key={skill.title}
          />
        );
      })}
      <Link href="https://resume.creddle.io/resume/c062hkrfrri" target="_blank">
        {" "}
        <Button
          size="lg"
          colorScheme="orange"
          sx={{
            opacity: 0,
            position: "relative",
            margin: "2rem 0rem 0rem 1rem",
            borderRadius: "2rem",
            boxShadow: "0px 3px 15px -8px rgba(0,0,0,0.75)",
          }}
          className={scrollAnimation(buttonAnimation, scrollPosition)}
        >
          View Resume
        </Button>
      </Link>
    </Box>
  );
};

const SkillSection = ({
  skill,
  scrollPosition,
}: {
  skill: ISkill;
  scrollPosition: number;
}) => {
  const { title, copy, animation } = skill;
  return (
    <Box
      sx={{ position: "relative", opacity: 0, margin: "1.5rem 0" }}
      className={scrollAnimation(animation, scrollPosition)}
    >
      <Text sx={skillsHeaderTextStyle}>{title}</Text>
      <Text sx={skillsTextStyle}>{copy}</Text>
    </Box>
  );
};

const DesktopIcons = () => {
  return (
    <Box
      sx={{
        width: "35%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CollaborationSVG />
    </Box>
  );
};

export default Resume;
