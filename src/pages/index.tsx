import { useRef } from "react";
import Head from "next/head";
import { Box, useMediaQuery } from "@chakra-ui/react";
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

enum Title {
  HOME = "Home",
  ABOUT = "About Me",
  RESUME = "Resume",
  CASE_STUDIES = "Case Studies",
  CONTACT = "Contact Me",
}

export default function Home() {
  const scrollPosition = useScrollPosition();
  const [isLargerThan800] = useMediaQuery("(min-width: 900px)");

  const introRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const contactRef = useRef(null);

  const handleAboutClick = (title: string) => {
    // @ts-ignore
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleIntroClick = (title: string) => {
    // @ts-ignore
    introRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleResumeClick = (title: string) => {
    // @ts-ignore
    resumeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleCaseStudiesClick = (title: string) => {
    // @ts-ignore
    caseStudiesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = (title: string) => {
    // @ts-ignore
    contactRef.current.scrollIntoView({ behavior: "smooth" });
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
      onClick: () => {
        changeIcon(Title.HOME);
        handleIntroClick(Title.HOME);
      },
    },
    {
      title: Title.ABOUT,
      icon: <AboutSVG />,
      onClick: () => {
        changeIcon(Title.ABOUT);
        handleAboutClick(Title.ABOUT);
      },
    },
    {
      title: Title.RESUME,
      icon: <ResumeSVG />,
      onClick: () => {
        changeIcon(Title.RESUME);
        handleResumeClick(Title.RESUME);
      },
    },
    {
      title: Title.CASE_STUDIES,
      icon: <CaseStudySVG />,
      onClick: () => {
        changeIcon(Title.CASE_STUDIES);
        handleCaseStudiesClick(Title.CASE_STUDIES);
      },
    },
    {
      title: Title.CONTACT,
      icon: <ContactSVG />,
      onClick: () => {
        changeIcon(Title.CONTACT);
        handleContactClick(Title.CASE_STUDIES);
      },
    },
  ]);

  return (
    <>
      <Head>
        <title>Ayaz's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Box w="100%">
          <Navbar
            navbarActions={navbarActions}
            scrollPosition={scrollPosition}
            isLargerThan800={isLargerThan800}
          />
          <Intro introRef={introRef} />
          <AboutMe scrollPosition={scrollPosition} aboutRef={aboutRef} />
          <Resume scrollPosition={scrollPosition} resumeRef={resumeRef} />
          <CaseStidies
            scrollPosition={scrollPosition}
            caseStudiesRef={caseStudiesRef}
          />
          <Contact scrollPosition={scrollPosition} contactRef={contactRef} />
        </Box>
      </main>
    </>
  );
}
