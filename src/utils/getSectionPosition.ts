import { Title } from "@/pages";

const getSectionPosition = (scrollPosition: number) => {
  if (scrollPosition < 843) {
    return Title.HOME;
  }

  if (scrollPosition >= 844 && scrollPosition < 1686) {
    return Title.ABOUT;
  }

  if (scrollPosition >= 1687 && scrollPosition < 2531) {
    return Title.RESUME;
  }

  if (scrollPosition >= 2532 && scrollPosition < 3407) {
    return Title.CASE_STUDIES;
  }

  if (scrollPosition > 3407) {
    return Title.CONTACT;
  }
};

export default getSectionPosition;
