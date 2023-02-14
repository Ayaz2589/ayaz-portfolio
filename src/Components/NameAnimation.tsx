import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { useRef } from "react";

const outterstyle = {
  position: "absolute",
  left: "10%",
  top: "40%",
  zIndex: "2",
};

const style = {
  position: "relative",
  zIndex: "5",
  fontSize: "60px",
  color: "#fff",
  opacity: 0,
};

const secondaryStyle = {
  zIndex: "5",
  fontSize: "20px",
  color: "#fff",
  opacity: 0,
};

const NameAnimation = () => {
  const letter2: any = useRef(null);
  const letter3: any = useRef(null);
  const letter4: any = useRef(null);
  const letter5: any = useRef(null);
  const letter6: any = useRef(null);
  const letter7: any = useRef(null);
  const letter8: any = useRef(null);
  const letter9: any = useRef(null);
  const letter10: any = useRef(null);
  const letter11: any = useRef(null);
  const title: any = useRef(null);

  const handleAnimationEnd = (ref: any, className: string) => {
    if (ref.current) {
      console.log(ref);
      ref.current.className = `${ref.current.className} ${className}`;
    }
  };

  return (
    <Box sx={outterstyle}>
      <Box sx={{ display: "flex" }}>
        <Typography
          className="letter1"
          sx={style}
          onAnimationEnd={() => handleAnimationEnd(letter2, "letter2")}
        >
          A
        </Typography>
        <Typography
          sx={style}
          ref={letter2}
          onAnimationEnd={() => handleAnimationEnd(letter3, "letter3")}
        >
          Y
        </Typography>
        <Typography
          sx={style}
          ref={letter3}
          onAnimationEnd={() => handleAnimationEnd(letter4, "letter4")}
        >
          A
        </Typography>
        <Typography
          sx={style}
          ref={letter4}
          onAnimationEnd={() => handleAnimationEnd(letter5, "letter5")}
        >
          Z
        </Typography>
        <Typography
          sx={{ fontSize: "80px", color: "#fff", width: "30px" }}
          ref={letter5}
          onAnimationEnd={() => handleAnimationEnd(letter6, "letter6")}
        ></Typography>
        <Typography
          sx={style}
          ref={letter6}
          onAnimationEnd={() => handleAnimationEnd(letter7, "letter7")}
        >
          U
        </Typography>
        <Typography
          sx={style}
          ref={letter7}
          onAnimationEnd={() => handleAnimationEnd(letter8, "letter8")}
        >
          D
        </Typography>
        <Typography
          sx={style}
          ref={letter8}
          onAnimationEnd={() => handleAnimationEnd(letter9, "letter9")}
        >
          D
        </Typography>
        <Typography
          sx={style}
          ref={letter9}
          onAnimationEnd={() => handleAnimationEnd(letter10, "letter10")}
        >
          I
        </Typography>
        <Typography
          sx={style}
          ref={letter10}
          onAnimationEnd={() => handleAnimationEnd(letter11, "letter11")}
        >
          N
        </Typography>
        <Typography
          sx={style}
          ref={letter11}
          onAnimationStart={() => handleAnimationEnd(title, "title")}
        >
          _
        </Typography>
      </Box>
      <Box>
        <Typography sx={secondaryStyle} ref={title}>
          Frontend Software Engineer
        </Typography>
      </Box>
    </Box>
  );
};

export default NameAnimation;
