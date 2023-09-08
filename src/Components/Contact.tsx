import { Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

import { GmailLogoSVG, LinkedInLogoSVG, GithubLogoSVG, LaptopSVG } from "./svg";
import { contactCopy } from "@/utils/copy";

const style = {
  height: "100vh",
  minHeight: "800px",
  position: "relative",
};

const textStyle = {
  margin: { base: "0 1rem", md: "0rem 0rem 0rem 4rem" },
  fontWeight: "light",
  fontSize: { base: "1rem", lg: "1.15rem", "2xl": "1.5rem" },
  letterSpacing: "0.15rem",
};

interface IProps {
  isMobile: boolean;
  contactRef: any;
}

const Contact = ({ isMobile, contactRef }: IProps) => {
  return (
    <Box
      ref={contactRef}
      sx={{
        ...style,
        display: "flex",
        alignItems: "center",
        flexDirection: isMobile ? "row" : "column",
      }}
    >
      <ContactMeDetails />
      <ViewRepo isMobile={isMobile} />
    </Box>
  );
};

const ContactMeDetails = () => {
  return (
    <Box sx={{ width: { base: "80%", md: "50%" } }}>
      <Text
        sx={{
          ...textStyle,
          fontSize: "3rem",
          fontWeight: "light",
        }}
      >
        Contact Me
      </Text>
      <Text sx={{ ...textStyle }}>{contactCopy}</Text>
      <Box
        sx={{
          display: "flex",
          width: "80%",
          margin: "1rem 0rem 0rem 3rem",
        }}
      >
        <ContactButton
          Component={GmailLogoSVG}
          href="mailto:ayaz2589@gmail.com"
        />
        <ContactButton
          Component={LinkedInLogoSVG}
          href="https://www.linkedin.com/in/ayaz2589/"
        />
        <ContactButton
          Component={GithubLogoSVG}
          href="https://github.com/Ayaz2589"
        />
      </Box>
    </Box>
  );
};

const ContactButton = ({
  Component,
  href,
}: {
  Component: React.Component | any;
  href: string;
}) => {
  return (
    <Link target="_blank" href={href}>
      <Button variant="ghost" size="lg" sx={{ padding: "3rem 1rem" }}>
        <Component />
      </Button>
    </Link>
  );
};

const ViewRepo = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "50%",
        flexDirection: "column",
        alignItems: "center",
        margin: !isMobile ? "3rem 0rem" : "0rem",
        padding: !isMobile ? "0rem 0rem 7rem 0rem" : "0rem",
      }}
    >
      <Link
        target="_blank"
        href="https://github.com/Ayaz2589/ayaz-portfolio"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text
          sx={{
            fontSize: { base: "1rem", lg: "1.15rem", "2xl": "1.5rem" },
            letterSpacing: "0.15rem",
            textAlign: !isMobile ? "center" : "left",
          }}
        >{`Enjoyed the website? Want to see the code?`}</Text>
        <Button
          sx={{
            padding: "3rem 1rem",
            width: "20rem",
            borderRadius: "2rem",
            margin: "2rem auto",
          }}
        >
          <LaptopSVG />
          <Text sx={{ fontSize: "1.2rem", marginLeft: "1rem" }}>
            View Repository
          </Text>
        </Button>
      </Link>
    </Box>
  );
};

export default Contact;
