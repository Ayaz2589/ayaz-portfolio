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

const caseStudies = [
  {
    name: "Property Pal",
    description: `A property management tool targeting multi-family home owners, with a strong emphasis on user-friendliness and affordability.`,
    logo: <PropertyPalLogoSVG />,
    linkToCaseStudy:
      "https://www.figma.com/proto/YHKLRhhrPw9K2L2Rs2M92Y/Property-Pal---Presentation?page-id=0%3A1&type=design&node-id=76-1150&viewport=10136%2C7619%2C1.15&t=5L2OkM3D2eXDdgfV-1&scaling=min-zoom&starting-point-node-id=76%3A1150&mode=design",
    isDisabled: false,
    styles: {
      backgroundColor: "#E0921F",
    },
  },
  {
    name: "JetBlue",
    description: `An update of JetBlue's trip booking feature, prioritizing user-friendliness and accessibility to provide travelers with a smoother and more inclusive booking experience.`,
    logo: <JetBlueLogoSVG />,
    linkToCaseStudy: "",
    isDisabled: true,
    styles: {
      backgroundColor: "#003876",
    },
  },
];

const style = {
  height: "100vh",
  minHeight: "800px",
  backgroundColor: "#eee",
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
  isLargerThan800: boolean;
}

const CaseStudies = ({
  scrollPosition,
  caseStudiesRef,
  isLargerThan800,
}: IProps) => {
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
          {isLargerThan800 ? <CaseStudyDetailsDesktop /> : null}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={
            scrollPosition > 2100
              ? `paragraph-animation-up-appear`
              : `paragraph-animation-down-disappear`
          }
        >
          {caseStudies.map((caseStudy) => {
            return <CaseStudyCard caseStudy={caseStudy} key={caseStudy.name} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

const CaseStudyDetailsDesktop = () => {
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
          {`In my product design portfolio, I've embarked on two impactful
          projects. The first project, "Property Pal," is an app designed to
          simplify multi-home property management, specifically catering to
          elderly property owners. It prioritizes user-friendliness and
          affordability, significantly improving their property management
          experience. In the second project, I led a comprehensive redesign of
          JetBlue's trip booking feature, focusing on enhancing
          user-friendliness and efficiency. This overhaul exemplifies my
          commitment to user-centric design, ultimately elevating the usability
          and satisfaction of travelers when planning their journeys.`}
        </Text>
      </Box>
    </Box>
  );
};

const CaseStudyCard = ({ caseStudy }: any) => {
  return (
    <Card
      backgroundColor={
        caseStudy.isDisabled ? "#ccc" : caseStudy.styles.backgroundColor
      }
      sx={{
        width: { base: "90%", md: "60%" },
        margin: "1rem 0rem",
        borderRadius: "1rem",
      }}
    >
      <Link href={caseStudy.linkToCaseStudy}>
        <CardHeader>{caseStudy.logo}</CardHeader>
        <CardBody color="white">{caseStudy.description}</CardBody>
        <CardFooter
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            fontSize: "0.8rem",
            color: "white",
          }}
        >
          {!caseStudy.isDisabled ? `Click to view` : `Coming Soon`}
        </CardFooter>
      </Link>
    </Card>
  );
};

export default CaseStudies;
