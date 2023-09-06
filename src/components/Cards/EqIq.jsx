import React, { useEffect, useState } from "react";
import gsap from "gsap";

import ColoredComponent from "../ColoredComponent";

import Typography from "../Typography";

const EqIq = () => {
  useEffect(() => {
    const emotionComponent = document.getElementById("eqiq");

    emotionComponent.addEventListener("mouseenter", () => {
      // Animation timeline
      const tl = gsap.timeline();

      // Target elements
      const eqHeading = document.getElementById("eq-heading");
      const eqPara1 = document.getElementById("eq-para-1");
      const eqPara2 = document.getElementById("eq-para-2");

      // Set initial positions (off-screen to the left)
      tl.set([eqHeading, eqPara1, eqPara2], {
        x: "-500%",
        x: "500%",
        x: "500%",
      });

      // Animate each element into its actual position one by one
      tl.to(eqHeading, { x: "0%", duration: 1, ease: "power2.out" })
        .to(eqPara1, { x: "0%", duration: 1.5, ease: "power2.out" }, "-=0.5") // Start para1 animation 0.5s before eqHeading animation completes
        .to(eqPara2, { x: "0%", duration: 1.5, ease: "power2.out" }, "-=0.7"); // Start para2 animation 0.5s before para1 animation completes
    });
  }, []);

  return (
    <ColoredComponent id={"eqiq"}>
      <Typography
        variant={"sub-heading-2"}
        text={"EQ beats IQ"}
        className={"pr-5"}
        id={"eq-heading"}
      />
      <Typography
        variant={"paragraph"}
        text={
          "People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships."
        }
        className={"pr-5"}
        id={"eq-para-1"}
      />
      <Typography
        variant={"paragraph"}
        text={
          "They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year"
        }
        id={"eq-para-2"}
      />
    </ColoredComponent>
  );
};

export default EqIq;
