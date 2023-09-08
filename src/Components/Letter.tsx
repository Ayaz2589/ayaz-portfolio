import { Text } from "@chakra-ui/react";
import { useRef } from "react";

const style = {
  position: "relative",
  zIndex: "5",
  fontSize: { base: "2rem", md: "4rem" },
  color: "white",
  opacity: 0,
  fontWeight: "light",
};

interface IProps {
  componentClassName: string;
  handleAnimationEnd: Function;
  letter: string;
  startAnimation: boolean;
}

const findNextClass = (className: string) => {
  if (typeof className !== "string") return;
  // @ts-ignore
  return `letter-${parseInt(className.split("-").pop()) + 1}`;
};

const Letter = ({
  componentClassName,
  handleAnimationEnd,
  letter,
  startAnimation,
}: IProps) => {
  const nextClass = findNextClass(componentClassName);

  return (
    <Text
      className={
        startAnimation
          ? `${componentClassName} letter-animation`
          : componentClassName
      }
      ref={useRef(null)}
      sx={letter === " " ? { width: "1rem" } : style}
      onAnimationEnd={() => handleAnimationEnd(nextClass)}
    >
      {letter}
    </Text>
  );
};

export default Letter;
