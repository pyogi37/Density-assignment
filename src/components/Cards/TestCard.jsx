import { Button } from "@mui/material";
import Box from "../Box";
import ColoredComponent from "../ColoredComponent";
import Typography from "../Typography";
import Typewriter from "typewriter-effect";

const TestCard = () => {
  return (
    <ColoredComponent
      flexDirection={"column"}
      className={"items-center text-center"}
      id={"test"}
    >
      <Typography
        variant={"paragraph"}
        text={"We take privacy seriously"}
      ></Typography>
      <Typography
        variant={"sub-heading-2"}
        text={"Before you get started"}
        className={"p-2"}
      ></Typography>
      <Typography
        variant={"paragraph"}
        text={
          " \"We won't share your answers with anyone (and won't ever tell you which friends said what about you)\" "
        }
      ></Typography>

      <Box className={"p-2"}>
        <Typography variant={"paragraph"} text={"with love, "}></Typography>
        <Typewriter
          options={{
            strings: ["Team Ahead"],
            autoStart: true,
            loop: true,
          }}
        />
      </Box>

      <Box>
        <a
          href="/"
          className="text-white bg-black px-4 p-1 rounded-full hover:bg-gray-800"
        >
          Start a test{" "}
        </a>
      </Box>

      <Typography
        variant={"tiny-text"}
        text={"Take only 5 minutes"}
        className={"p-2"}
      />
    </ColoredComponent>
  );
};

export default TestCard;
