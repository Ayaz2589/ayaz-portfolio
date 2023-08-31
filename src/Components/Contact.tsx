import { Box } from "@chakra-ui/react";

const style = {
  height: "100vh",
  backgroundColor: "lightblue",
  minHeight: "800px",
  position: "relative",
};

interface IProps {
  scrollPosition: number;
  contactRef: any;
}

const Contact = ({ scrollPosition, contactRef }: IProps) => {
  return <Box ref={contactRef} sx={style}></Box>;
};

export default Contact;
