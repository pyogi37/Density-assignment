import React from "react";
import ColoredComponent from "../ColoredComponent";
import Box from "../Box";
import Typography from "../Typography";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Intro = () => {
  useEffect(() => {
    const introDiv = document.getElementById("intro");
    const t2 = gsap.timeline();
    t2.to(introDiv, {
      backgroundColor: "eeebfe",
      duration: 1,
      ease: "power2.inOut",
    });
    t2.play();

    const introCardPhoto = document.getElementById("intro-card-photo");
    const tl = gsap.timeline();
    tl.set(introCardPhoto, { opacity: 0, scale: 0 });
    tl.to(introCardPhoto, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });
    tl.to(introCardPhoto, { rotation: 360, duration: 1 });
    tl.play();
  }, []);
  return (
    <>
      <ColoredComponent color={"#eeebfe"} id={"intro"}>
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
          <img src="/assets/intro-right.png" alt="" id={"intro-card-photo"} />
        </Box>
      </ColoredComponent>
    </>
  );
};

export default Intro;
