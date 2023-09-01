const handleNavIconClicked = (refToscrollTo: any) => {
  if (!refToscrollTo) return;
  refToscrollTo.current.scrollIntoView({ behavior: "smooth" });
  return;
};

export default handleNavIconClicked;
