interface IProps {
  appear: string;
  disappear: string;
  screenPosition: number;
}

const scrollAnimation = (animationObject: IProps, scrollPosition: number) => {
  const { appear, disappear, screenPosition } = animationObject;
  return scrollPosition > screenPosition ? appear : disappear;
};

export default scrollAnimation;
