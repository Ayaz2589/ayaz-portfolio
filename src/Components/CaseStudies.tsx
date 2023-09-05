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
import JetBlueLogoSVG from "./JetBlueLogoSVG";

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
  width: { base: "90%", md: "30rem" },
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
            width: { base: "", md: "50%" },
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
            width: { base: "", md: "50%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PropertyPalCaseStudy scrollPosition={scrollPosition} />
          <JetBlueCaseStudy scrollPosition={scrollPosition} />
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
          In my product design portfolio, I've embarked on two impactful
          projects. The first project, "Property Pal," is an app designed to
          simplify multi-home property management, specifically catering to
          elderly property owners. It prioritizes user-friendliness and
          affordability, significantly improving their property management
          experience. In the second project, I led a comprehensive redesign of
          JetBlue's trip booking feature, focusing on enhancing
          user-friendliness and efficiency. This overhaul exemplifies my
          commitment to user-centric design, ultimately elevating the usability
          and satisfaction of travelers when planning their journeys.
        </Text>
      </Box>
    </Box>
  );
};

const PropertyPalCaseStudy = ({ scrollPosition }: any) => {
  return (
    <Card
      sx={{ ...cardStyles, opacity: 0 }}
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
              fontSize: { base: "1.2rem", md: "1.1rem" },
              color: "white",
              fontWeight: "bold",
            }}
          >
            A property management tool targeting multi-family home owners, with
            a strong emphasis on user-friendliness and affordability.
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

const JetBlueCaseStudy = ({ scrollPosition }: any) => {
  return (
    <Card
      sx={{ ...cardStyles, opacity: 0, backgroundColor: "#d1d1d1" }}
      className={
        scrollPosition > 2100
          ? `paragraph-animation-down-appear`
          : `paragraph-animation-up-disappear`
      }
    >
      <Link href="https://www.figma.com/proto/YHKLRhhrPw9K2L2Rs2M92Y/Property-Pal---Presentation?page-id=0%3A1&type=design&node-id=76-1150&viewport=10136%2C7619%2C1.15&t=5L2OkM3D2eXDdgfV-1&scaling=min-zoom&starting-point-node-id=76%3A1150&mode=design">
        <CardHeader>
          <JetBlueLogoSVG />
        </CardHeader>
        <CardBody sx={{ padding: "0rem 1rem 0rem 1rem" }}>
          <Text
            sx={{
              fontSize: { base: "1.2rem", md: "1.1rem" },
              color: "white",
              fontWeight: "bold",
            }}
          >
            An update of JetBlue's trip booking feature, prioritizing
            user-friendliness and accessibility to provide travelers with a
            smoother and more inclusive booking experience.
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
            Will be availsable soon
          </Text>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default CaseStudies;
