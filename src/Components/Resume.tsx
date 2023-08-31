import { Box } from "@chakra-ui/react";

const style = {
  height: "100vh",
  backgroundColor: "pink",
  minHeight: "800px",
  position: "relative",
};

interface IProps {
  scrollPosition: number;
  resumeRef: any;
}

const Resume = ({ resumeRef, scrollPosition }: IProps) => {
  return <Box ref={resumeRef} sx={style}></Box>;
};

export default Resume;
