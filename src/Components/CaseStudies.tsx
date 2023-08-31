import { Box, Text, Flex } from "@chakra-ui/react";

const style = {
  height: "100vh",
  minHeight: "800px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
};

const headerStyle = {
  margin: "5rem 0",
  textAlign: "center",
};

interface IProps {
  scrollPosition: number;
  caseStudiesRef: any;
}

const CaseStudies = ({ scrollPosition, caseStudiesRef }: IProps) => {
  return (
    <Box ref={caseStudiesRef} sx={style}>
      {/* @ts-ignore */}
      <Box sx={headerStyle}>
        <Text
          fontSize="5rem"
          opacity={0}
          className="case-study-animation-appear"
        >
          Hello!
        </Text>
        <Text
          fontSize="2rem"
          className="case-study-animation-appear"
          opacity={0}
        >
          Want to see my case studies?
        </Text>
      </Box>
    </Box>
  );
};

export default CaseStudies;
