import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const outterstyle = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: "2",
};

const style = {
  zIndex: "5",
  fontSize: "80px",
  color: "#fff",
};

const NameAnimation = () => {
  return (
    <Box sx={outterstyle}>
      <Box sx={{ display: "flex" }}>
        <Typography className="letter-1" sx={style}>
          A
        </Typography>
        <Typography className="letter-2" sx={style}>
          Y
        </Typography>
        <Typography className="letter-3" sx={style}>
          A
        </Typography>
        <Typography className="letter-4" sx={style}>
          Z
        </Typography>
        <Typography
          className="letter-5"
          sx={{ fontSize: "80px", color: "#fff", width: "30px" }}
        ></Typography>
        <Typography className="letter-6" sx={style}>
          U
        </Typography>
        <Typography className="letter-7" sx={style}>
          D
        </Typography>
        <Typography className="letter-8" sx={style}>
          D
        </Typography>
        <Typography className="letter-9" sx={style}>
          I
        </Typography>
        <Typography className="letter-10" sx={style}>
          N
        </Typography>
      </Box>
    </Box>
  );
};

export default NameAnimation;
