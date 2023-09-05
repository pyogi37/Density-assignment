import React from "react";
import ColoredComponent from "../ColoredComponent";
import Box from "../Box";
import Typography from "../Typography";
import IntroRight from "../misc/IntroRight";

const Intro = () => {
  return (
    <>
      <ColoredComponent color={"#eeebfe"}>
        <Box flexDirection={"column"} className="w-1/2">
          <Typography
            variant={"paragraph"}
            text={"Ahead App"}
            className={"p-2"}
          />
          <Typography
            variant={"heading"}
            text={"Master your life by mastering emotions"}
            className={"p-2"}
          />
          <Box className={"items-start"}>
            <img
              src="/assets/app-store-logo.png"
              alt="app-store-logo"
              style={{ width: "50%" }}
              className={"p-2 items-start"}
            />
            <span style={{ width: "40%" }} className="flex-col">
              <img
                src="/assets/5-star-rating.png"
                alt="5 star"
                style={{ width: "50%" }}
              />
              <Typography variant={"tiny-text"} text={" 100+ downloads"} />
            </span>
          </Box>
        </Box>

        <Box>
          <img src="/assets/intro-right.png" alt="" />
        </Box>
      </ColoredComponent>
    </>
  );
};

export default Intro;
