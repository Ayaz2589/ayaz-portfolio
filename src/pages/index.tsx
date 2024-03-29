import { useRef, useContext } from "react";
import Head from "next/head";
import { Box, useMediaQuery, Text } from "@chakra-ui/react";
import styles from "@/styles/Home.module.css";
import {
  Navbar,
  Intro,
  Resume,
  AboutMe,
  CaseStidies,
  Contact,
} from "@/Components";
import { useState } from "react";
import {
  HomeSVG,
  AboutSVG,
  CaseStudySVG,
  ResumeSVG,
  ContactSVG,
} from "../Components/svg/NotFilled";
import {
  HomeFilledSVG,
  AboutFilledSVG,
  ResumeFilledSVG,
  CaseStudyFilledSVG,
  ContactFilledSVG,
} from "@/Components/svg/Filled";

import { useScrollPosition } from "@/utils";

// scrolls to top on reload
if (typeof window !== "undefined") {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
}

export interface INavbarAction {
  title: string;
  onClick: Function;
  icon?: JSX.Element;
}

export enum Title {
  HOME = "Home",
  ABOUT = "About Me",
  RESUME = "Resume",
  CASE_STUDIES = "Case Studies",
  CONTACT = "Contact Me",
}

export default function Home() {
  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const contactRef = useRef(null);

  const handleNavIconClicked = (refToscrollTo: any, title: string) => {
    if (!refToscrollTo) return;
    changeIcon(title);
    refToscrollTo.current.scrollIntoView({ behavior: "smooth" });
    return;
  };

  const changeIcon = (title: string) => {
    const newNavBarActions = navbarActions.map((item) => {
      if (item.title === title) {
        switch (title) {
          case Title.HOME:
            return {
              ...item,
              icon: <HomeFilledSVG />,
            };
          case Title.ABOUT:
            return {
              ...item,
              icon: <AboutFilledSVG />,
            };
          case Title.RESUME:
            return {
              ...item,
              icon: <ResumeFilledSVG />,
            };
          case Title.CASE_STUDIES:
            return {
              ...item,
              icon: <CaseStudyFilledSVG />,
            };
          case Title.CONTACT:
            return {
              ...item,
              icon: <ContactFilledSVG />,
            };
        }
      } else {
        switch (item.title) {
          case Title.HOME:
            return {
              ...item,
              icon: <HomeSVG />,
            };
          case Title.ABOUT:
            return {
              ...item,
              icon: <AboutSVG />,
            };
          case Title.RESUME:
            return {
              ...item,
              icon: <ResumeSVG />,
            };
          case Title.CASE_STUDIES:
            return {
              ...item,
              icon: <CaseStudySVG />,
            };
          case Title.CONTACT:
            return {
              ...item,
              icon: <ContactSVG />,
            };
        }
      }
    });

    updateNavBarActions(newNavBarActions);
  };

  const [navbarActions, updateNavBarActions] = useState([
    {
      title: Title.HOME,
      icon: <HomeFilledSVG />,
      onClick: () => handleNavIconClicked(introRef, Title.HOME),
    },
    {
      title: Title.ABOUT,
      icon: <AboutSVG />,
      onClick: () => handleNavIconClicked(aboutRef, Title.ABOUT),
    },
    {
      title: Title.RESUME,
      icon: <ResumeSVG />,
      onClick: () => handleNavIconClicked(resumeRef, Title.RESUME),
    },
    {
      title: Title.CASE_STUDIES,
      icon: <CaseStudySVG />,
      onClick: () => handleNavIconClicked(caseStudiesRef, Title.CASE_STUDIES),
    },
    {
      title: Title.CONTACT,
      icon: <ContactSVG />,
      onClick: () => handleNavIconClicked(contactRef, Title.CONTACT),
    },
  ]);

  return (
    <>
      <Head>
        <title>Ayazs Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box w="100%">
          <Navbar navbarActions={navbarActions} changeIcon={changeIcon} />
          <Intro introRef={introRef} />
          <AboutMe aboutRef={aboutRef} />
          <Resume resumeRef={resumeRef} />
          <CaseStidies caseStudiesRef={caseStudiesRef} />
          <Contact contactRef={contactRef} />
        </Box>
      </main>
    </>
  );
}
