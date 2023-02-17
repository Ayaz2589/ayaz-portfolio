import { Box, Text, Flex } from "@chakra-ui/react";
import { useRef } from "react";
import { Letter } from "@/Components";

const outterstyle = {
  position: "absolute",
  left: "10%",
  top: "40%",
  zIndex: "2",
};

const secondaryStyle = {
  zIndex: "5",
  fontSize: { base: "1rem", md: "1.4rem" },
  color: "white",
  opacity: 0,
  fontWeight: "light",
};

interface IProps {
  nameToDisplay: string;
  addSymbol?: boolean;
}

const NameAnimation = ({ nameToDisplay, addSymbol }: IProps) => {
  if (addSymbol) nameToDisplay = nameToDisplay + "_";
  const animateSecondaryTitle = () => {
    document
      .getElementsByClassName("secondary-title")[0]
      .classList.add("title");
  };

  const handleAnimationEnd = (className: string) => {
    const nextNode = document.getElementsByClassName(className)[0];
    if (!nextNode) return;
    if (className === `letter-${nameToDisplay.length}` && addSymbol) {
      nextNode.classList.add("symbol-blink");
      animateSecondaryTitle();
      return;
    }

    if (className === `letter-${nameToDisplay.length}` && !addSymbol) {
      nextNode.classList.add("letter-animation");
      animateSecondaryTitle();
      return;
    }

    nextNode.classList.add("letter-animation");
  };

  const lettersCollection = nameToDisplay
    .split("")
    .map((letter: string, index: number) => {
      return {
        letter: letter,
        className: `letter-${index + 1}`,
      };
    });

  return (
    <Box sx={outterstyle}>
      <Flex>
        {lettersCollection.map((item, index) => {
          return (
            <Letter
              componentClassName={item.className}
              letter={item.letter}
              startAnimation={index === 0 ?? false}
              handleAnimationEnd={handleAnimationEnd}
            />
          );
        })}
      </Flex>
      <Box>
        <Text
          className="secondary-title"
          sx={secondaryStyle}
          ref={useRef(null)}
        >
          Frontend Software Engineer
        </Text>
      </Box>
    </Box>
  );
};

export default NameAnimation;
