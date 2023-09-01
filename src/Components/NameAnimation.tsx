import { Text, Flex } from "@chakra-ui/react";
import { useRef } from "react";
import { Letter } from "@/Components";

const containerStyles = {
  flexDirection: "column",
  height: "100vh",
  minHeight: "800px",
  justifyContent: "center",
  border: "1px solid",
  width: "100%",
  padding: { base: "none", md: "0 9.1rem" },
  zIndex: "1",
  position: "relative",
};

const secondaryTitleStyle = {
  zIndex: "5",
  fontSize: { base: "1rem", md: "1.4rem" },
  color: "white",
  opacity: 0,
  fontWeight: "light",
};

const secondaryTitle = `Product Designer & Frontend Software Engineer`;

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
    <Flex sx={containerStyles}>
      <Flex justify={{ base: "center", md: "flex-start" }}>
        {lettersCollection.map((item, index) => {
          return (
            <Letter
              key={item.className}
              componentClassName={item.className}
              letter={item.letter}
              startAnimation={index === 0 ?? false}
              handleAnimationEnd={handleAnimationEnd}
            />
          );
        })}
      </Flex>
      <Flex justify={{ base: "center", md: "flex-start" }}>
        <Text
          className="secondary-title"
          sx={secondaryTitleStyle}
          ref={useRef(null)}
        >
          {secondaryTitle}
        </Text>
      </Flex>
    </Flex>
  );
};

export default NameAnimation;
