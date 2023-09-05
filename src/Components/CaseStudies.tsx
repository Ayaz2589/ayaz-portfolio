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
  backgroundColor: "#eee",
};

const cardStyles = {
  width: { base: "90%", md: "30rem" },
  backgroundColor: "#E0921F",
  borderRadius: "1rem",
  margin: "1.5rem 0",
  opacity: 0,
  position: "relative",
};

const textStyle = {
  width: { base: "90%", md: "25rem" },
  margin: { base: "0 1rem", md: "0rem 0rem 0rem 4rem" },
  fontWeight: "light",
  fontSize: { base: "1rem", md: "1.15rem" },
  letterSpacing: "0.15rem",
};

interface IProps {
  scrollPosition: number;
  caseStudiesRef: any;
}

const CaseStudies = ({ scrollPosition, caseStudiesRef }: IProps) => {
  return (
    <Box ref={caseStudiesRef} sx={style}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: { base: "", md: "40%" },
            position: "relative",
            opacity: 0,
          }}
          className={
            scrollPosition > 2100
              ? `paragraph-animation-up-appear`
              : `paragraph-animation-down-disappear`
          }
        >
          <CaseStudyDetails />
        </Box>
        <Box
          sx={{
            width: { base: "", md: "60%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PropertyPalCaseStudy scrollPosition={scrollPosition} />
          <PropertyPalCaseStudy scrollPosition={scrollPosition} />
        </Box>
      </Box>
    </Box>
  );
};

const CaseStudyDetails = () => {
  return (
    <Box position="relative">
      <Box sx={style}>
        <Text
          sx={{
            ...textStyle,
            paddingTop: "6rem",
            fontSize: { base: "1rem", md: "3rem" },
            fontWeight: "light",
          }}
        >
          Case Studies
        </Text>
        <Text sx={textStyle}>
          With seven years of experience as a front-end developer, I've had the
          privilege of working closely with design teams throughout my career,
          which has honed my eye for user-centric design principles. Recently, I
          made the exciting transition from front-end development to product
          design, bolstered by my UX/UI certification from BrainStation
        </Text>
      </Box>
    </Box>
  );
};

const PropertyPalCaseStudy = ({ scrollPosition }: any) => {
  return (
    <Card
      sx={{...cardStyles, opacity: 0}}
      className={
        scrollPosition > 2100
          ? `paragraph-animation-down-appear`
          : `paragraph-animation-up-disappear`
      }
    >
      <Link href="https://www.figma.com/proto/YHKLRhhrPw9K2L2Rs2M92Y/Property-Pal---Presentation?page-id=0%3A1&type=design&node-id=76-1150&viewport=10136%2C7619%2C1.15&t=5L2OkM3D2eXDdgfV-1&scaling=min-zoom&starting-point-node-id=76%3A1150&mode=design">
        <CardHeader>
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
      </Link>
    </Card>
  );
};

export default CaseStudies;
