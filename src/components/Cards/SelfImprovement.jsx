import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ColoredComponent from "../ColoredComponent";
import Typography from "../Typography";
import Box from "../Box";
import Stepper from "../misc/Stepper";

const SelfImprovement = () => {
  const playAnimations = () => {
    const tl = gsap.timeline();

    // Target elements using their IDs
    const improvementIcon = document.getElementById("improvement-icon");

    // Initial styles
    tl.set(improvementIcon, { x: -10 }); // Hide the icon and move it to the left

    // Animate the icon's opacity and pendulum movement
    tl.to(improvementIcon, {
      x: 0,
      duration: 1.5,
      opacity: 1,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true, // Create a pendulum effect
    });
  };

  // Use useEffect to trigger the animations when the component mounts
  useEffect(() => {
    playAnimations();
  }, []);
  return (
    <ColoredComponent flexDirection={"column"} height={"90vh"} id={"manifesto"}>
      <Typography
        variant={"paragraph"}
        text={"Wrong with self-improvement & how we're fixing it."}
        className={"p-2 pl-12"}
      />
      <span className="flex items-center ">
        <Typography
          variant={"sub-heading-2"}
          text={"Self-improvement. Ugh."}
          className={"p-2 pl-12"}
        />
        <img src="/assets/blue.png" alt="blue" id="improvement-icon" />
      </span>
      <Box className={"p-4 relative left-20 p-2 justify-center"}>
        <Stepper />
      </Box>
    </ColoredComponent>
  );
};

export default SelfImprovement;
