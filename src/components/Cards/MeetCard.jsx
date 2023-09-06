import React, { useEffect } from "react";
import gsap from "gsap";
import Box from "../Box";
import ColoredComponent from "../ColoredComponent";
import Typography from "../Typography";

const MeetCard = () => {
  useEffect(() => {
    const emotionComponent = document.getElementById("meetCard");

    emotionComponent.addEventListener("mouseenter", () => {
      // Animation timeline
      const tl = gsap.timeline();

      // Target elements
      const leftSubHeading = document.getElementById("left-sub-headind");
      const leftHeading = document.getElementById("left-heading");
      const rightPara = document.getElementById("right-para");

      // Set initial positions (off-screen or rotated)
      tl.set(leftSubHeading, { x: "-100%", y: "100%", opacity: 0 });
      tl.set(leftHeading, { x: "-100%", y: "100%", opacity: 0 });
      tl.set(rightPara, { x: "100%", opacity: 0 });

      // Animate "left-sub-headind" from right to actual position
      tl.to(leftSubHeading, {
        x: "0%",
        y: "0%",
        duration: 1,
        opacity: 1,
        ease: "power2.out",
      });

      // Animate "left-heading" flying from bottom right and fading in
      tl.to(leftHeading, {
        x: "0%",
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });

      // Animate "right-para" flying from right and fading in
      tl.to(
        rightPara,
        { x: "0%", opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.5"
      );
    });
  }, []);
  return (
    <div>
      <ColoredComponent color={"#fef7f1"} id={"meetCard"}>
        <Box flexDirection={"column"} className="w-1/2">
          <Typography
            variant={"paragraph"}
            text={"Built out of frustation"}
            className={"p-2"}
            id={"left-sub-headind"}
          />
          <Typography
            variant={"heading"}
            text={"Meet the ahead app"}
            className={"p-2"}
            id={"left-heading"}
          />
        </Box>

        <Box className={""}>
          <Typography
            variant={"paragraph"}
            text={
              "A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.Think of it as a pocket cheerleader towards a better, more fulfilling."
            }
            className={"p-2"}
            id={"right-para"}
          />
        </Box>
      </ColoredComponent>
    </div>
  );
};

export default MeetCard;
