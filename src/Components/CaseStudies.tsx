import { Box, Text, Flex } from "@chakra-ui/react";

const style = {
  height: "100vh",
  minHeight: "800px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  opacity: 0,
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
      <Box
        sx={headerStyle}
        className={
          scrollPosition > 2100
            ? "case-study-animation-appear"
            : "case-study-animation-appear"
        }
      >
        <Text fontSize="5rem">Hello!</Text>
        <Text fontSize="2rem">Want to see my case studies?</Text>
      </Box>
    </Box>
  );
};

export default CaseStudies;
