import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ColoredComponent from "../ColoredComponent";

import Typography from "../Typography";

const EqBest = () => {
  useEffect(() => {
    const emotionComponent = document.getElementById("eq-best");

    emotionComponent.addEventListener("mouseenter", () => {
      // Animation timeline
      const tl = gsap.timeline();

      // Target elements
      const selfHeading = document.getElementById("self-heading");
      const selfPara1 = document.getElementById("self-para-1");
      const selfPara2 = document.getElementById("self-para-2");

      // Set initial positions (off-screen to the left)
      tl.set([selfHeading, selfPara1, selfPara2], {
        x: "-500%",
        x: "500%",
        x: "500%",
      });

      // Animate each element into its actual position one by one
      tl.to(selfHeading, { x: "0%", duration: 1, ease: "power2.out" })
        .to(selfPara1, { x: "0%", duration: 1.5, ease: "power2.out" }, "-=0.5") // Start para1 animation 0.5s before eqHeading animation completes
        .to(selfPara2, { x: "0%", duration: 1.5, ease: "power2.out" }, "-=0.5"); // Start para2 animation 0.5s before para1 animation completes
    });
  }, []);
  return (
    <ColoredComponent id={"eq-best"}>
      <Typography
        variant={"sub-heading-2"}
        text={"Be the best you with EQ"}
        className={"pr-5"}
        id={"self-heading"}
      />
      <Typography
        variant={"paragraph"}
        text={
          "Not having your own emotions under control might be holding you back."
        }
        className={"pr-5"}
        id={"self-para-1"}
      />
      <Typography
        variant={"paragraph"}
        text={
          "Additionally, not understanding those of others stops you from being parent, friend you can be."
        }
        id={"self-para-2"}
      />
    </ColoredComponent>
  );
};

export default EqBest;
