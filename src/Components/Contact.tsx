import { Box, Text, Button } from "@chakra-ui/react";

import { GmailLogoSVG, LinkedInLogoSVG, GithubLogoSVG, LaptopSVG } from "./svg";
import { contactCopy } from "@/utils/copy";

const style = {
  height: "100vh",
  minHeight: "800px",
  position: "relative",
};

const textStyle = {
  width: { base: "90%", md: "100%" },
  margin: { base: "0 1rem", md: "0rem 0rem 0rem 4rem" },
  fontWeight: "light",
  fontSize: { base: "1rem", md: "1.15rem" },
  letterSpacing: "0.15rem",
};

interface IProps {
  scrollPosition: number;
  contactRef: any;
}

const Contact = ({ scrollPosition, contactRef }: IProps) => {
  return (
    <Box
      ref={contactRef}
      sx={{ ...style, display: "flex", alignItems: "center" }}
    >
      <ContactMeDetails />
      <ViewRepo />
    </Box>
  );
};

const ContactMeDetails = () => {
  return (
    <Box sx={{ width: "50%" }}>
      <Text
        sx={{
          ...textStyle,
          fontSize: "3rem",
          fontWeight: "light",
        }}
      >
        Contact Me
      </Text>
      <Text sx={{ ...textStyle, width: "70%" }}>{contactCopy}</Text>
      <Box
        sx={{
          display: "flex",
          width: "80%",
          margin: "4rem 0rem 0rem 3rem",
        }}
      >
        <ContactButton Component={GmailLogoSVG} Title="Email Me" />
        <ContactButton Component={LinkedInLogoSVG} Title="LinkedIn" />
        <ContactButton Component={GithubLogoSVG} Title="Github" />
      </Box>
    </Box>
  );
};

const ContactButton = ({ Component, Title }: any) => {
  return (
    <Button variant="ghost" size="lg" sx={{ padding: "3rem 1rem" }}>
      <Component />
    </Button>
  );
};

const ViewRepo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "50%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        sx={{
          fontSize: { base: "1rem", md: "1.15rem" },
          letterSpacing: "0.15rem",
        }}
      >{`Enjoyed the website? Want to see the code?`}</Text>
      <Button
        sx={{
          padding: "3rem 1rem",
          width: "20rem",
          borderRadius: "2rem",
          margin: "1rem",
        }}
      >
        <LaptopSVG />
        <Text sx={{ fontSize: "1.2rem", marginLeft: "1rem" }}>
          View Repository
        </Text>
      </Button>
    </Box>
  );
};

export default Contact;
