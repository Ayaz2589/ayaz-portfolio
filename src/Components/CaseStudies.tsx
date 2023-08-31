import { Box } from "@chakra-ui/react";

const style = {
  height: "100vh",
  backgroundColor: "lavender",
  minHeight: "800px",
  position: "relative",
};

interface IProps {
  scrollPosition: number;
  caseStudiesRef: any;
}

const CaseStudies = ({ scrollPosition, caseStudiesRef }: IProps) => {
  return <Box ref={caseStudiesRef} sx={style}></Box>;
};

export default CaseStudies;
