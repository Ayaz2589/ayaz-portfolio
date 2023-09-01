import {
  Box,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import Link from "next/link";

import PropertyPalLogoSVG from "./PropertyPalLogoSVG";

const style = {
  height: "100vh",
  minHeight: "800px",
};

const headerStyle = {
  paddingTop: "6rem",
  textAlign: "center",
  position: "relative",
  opacity: 0,
};

const cardStyles = {
  margin: {
    base: "1rem",
    md: "1rem 10rem",
    lg: "4rem 20rem",
    xl: "4rem 30rem",
  },
  backgroundColor: "#E0921F",
  borderRadius: "1rem",
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
            : "case-study-animation-disappear"
        }
      >
        <Text fontSize="5rem">Hello!</Text>
        <Text fontSize="1.5rem">Want to see my case studies?</Text>
      </Box>
      <Box
        sx={{ position: "relative" }}
        className={
          scrollPosition > 2100
            ? "case-study-card-animation-appear "
            : "case-study-animation-disappear"
        }
      >
        <SingleCaseStudy />
      </Box>
    </Box>
  );
};

const SingleCaseStudy = () => {
  return (
    <Link href="https://www.figma.com/proto/YHKLRhhrPw9K2L2Rs2M92Y/Property-Pal---Presentation?page-id=0%3A1&type=design&node-id=76-1150&viewport=10136%2C7619%2C1.15&t=5L2OkM3D2eXDdgfV-1&scaling=min-zoom&starting-point-node-id=76%3A1150&mode=design">
      <Card sx={cardStyles}>
        <CardHeader sx={{ display: "flex", justifyContent: "center" }}>
          <PropertyPalLogoSVG />
        </CardHeader>
        <CardBody sx={{ padding: "0rem 1rem 0rem 1rem" }}>
          <Text
            sx={{
              textAlign: "center",
              fontSize: { base: "1.2rem", md: "1.1rem" },
              color: "white",
              fontWeight: "bold",
            }}
          >
            A Property Management tool aimed at owners of multi-family home(s),
            with an emphises placed on ease of use and afforibility.
          </Text>
        </CardBody>
        <CardFooter>
          <Text
            sx={{
              fontSize: "0.8rem",
              color: "white",
              width: "100%",
              textAlign: "right",
            }}
          >
            Click to View
          </Text>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CaseStudies;
