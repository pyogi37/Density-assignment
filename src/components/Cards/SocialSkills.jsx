import React, { useEffect } from "react";
import gsap from "gsap";
import ColoredComponent from "../ColoredComponent";
import Typography from "../Typography";
import HorizontalList from "../misc/HorizontalList";

const SocialSkills = () => {
  useEffect(() => {
    // Target the skillsCard element using its ID
    const skillsCard = document.getElementById("skillsCard");

    // Add event listeners for mouse enter and leave
    skillsCard.addEventListener("mouseenter", () => {
      const tl = gsap.timeline();

      const skillsHeading1 = document.getElementById("skills-heading-1");
      const skillsHeading2 = document.getElementById("skills-heading-2");
      const dottedLine = document.querySelector(".dotted-line");
      const stars = document.querySelectorAll(".stars");
      const skillTexts = document.querySelectorAll(".skillText");
      const skillImage = document.getElementById("skillsImg");

      tl.set([skillsHeading1, skillsHeading2], { x: "-1000%", x: "1000%" });
      tl.set(stars, { x: "10000%" });
      tl.set(skillTexts, { opacity: 0 });
      tl.set(dottedLine, { opacity: 0 });
      tl.set(skillImage, { opacity: 0 });

      // Animate skills-heading-1 and skills-heading-2 from left and right
      tl.to(skillsHeading1, { x: "0%", duration: 1, ease: "power2.out" }).to(
        skillsHeading2,
        { x: "0%", duration: 1, ease: "power2.out" },
        "-=0.5"
      );

      // animation for fotted line

      tl.to(dottedLine, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      });

      // Animate stars elements from the right with a 0.5-second gap
      tl.to(stars, {
        x: "0%",
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.2,
      });

      tl.to(skillTexts, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      });

      tl.to(skillImage, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
      });

      tl.play();
    });
  }, []);

  return (
    <ColoredComponent
      color={"#edf8fe"}
      flexDirection={"column"}
      className={"items-center text-center"}
      id={"skillsCard"}
    >
      <Typography
        variant={"paragraph"}
        text={
          "Let your friends, family, and co-workers(anonymously) rate your social skills."
        }
        className={"pb-2 "}
        id={"skills-heading-1"}
      />
      <Typography
        variant={"sub-heading"}
        text={"Ever wondered what others think of you?"}
        className={"pb-8"}
        id={"skills-heading-2"}
      />
      <HorizontalList />

      <img src="/assets/social-skills.png" alt="" id="skillsImg" />
    </ColoredComponent>
  );
};

export default SocialSkills;
