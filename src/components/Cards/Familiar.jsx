import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Box from "../Box";
import ColoredComponent from "../ColoredComponent";
import Typography from "../Typography";
import EmojiCard from "../misc/EmojiCards";

const Familiar = () => {
  const ref = useRef();

  useEffect(() => {
    const emotionComponent = document.getElementById("emotions");

    emotionComponent.addEventListener("mouseenter", () => {
      // Animation timeline
      const tl = gsap.timeline();

      // Target elements
      const emotionHeading = document.getElementById("emotion-heading");
      const emotionIcon = document.getElementById("emotion-icon");
      const tiltedCard = document.getElementById("tilted-card");

      // Set initial positions (off-screen or rotated)
      tl.set(emotionHeading, { x: "-100%" });
      tl.set(emotionIcon, { x: "1000%", y: "-20%", opacity: 0 });
      tl.set(tiltedCard, { rotation: 0, transformOrigin: "left bottom" });

      // Animate "emotion-heading" from left to actual position
      tl.to(emotionHeading, { x: "0%", duration: 1, ease: "power2.out" });

      // Animate "emotion-icon" flying from right and fading in
      tl.to(
        emotionIcon,
        { x: "0%", opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.5"
      );

      customScroll();

      // Animate "tilted-card" to be tilted
      tl.to(
        tiltedCard,
        { rotation: 5, duration: 1, ease: "power2.out" },
        "-=0.5"
      );
    });
  }, []);

  const customScroll = () => {
    // const element = document.getElementById("last-card");
    const element = ref.current;

    console.log("custom scroll");
    // element.scrollBy({
    //   left: 100,
    // });
    element.scrollBy({
      left: 1000,
      behavior: "smooth",
    });
  };

  const horizontalScroll = () => {
    const element = ref.current;

    element.addEventListener("wheel", (event) => {
      console.log("MOUSE OVER");

      event.preventDefault();

      element.scrollBy({
        left: event.deltaY < 0 ? -5 : 5,
      });
    });
  };

  return (
    <div
      className="p-4"
      style={{ height: "60vh" }}
      name="emotions"
      id="emotions"
    >
      <Box flexDirection={"column"} className={"p-4"}>
        <Box className={"p-4"}>
          <Typography
            variant={"sub-heading"}
            text={"Does this sound familiar..."}
            id={"emotion-heading"}
          />
          <img src="/assets/orange.png" alt="" id="emotion-icon" />
        </Box>
        <div
          className="horizontalScroll"
          onMouseOver={horizontalScroll}
          ref={ref}
          style={{
            height: "41vh",
            overflowX: "scroll",
            overflow: "hidden",
          }}
        >
          <Box className={"p-5"}>
            <EmojiCard
              emoji={128544}
              heading={"You argue with colleague"}
              text={
                "You get angry and defensive, instead of staying open and working towards common ground."
              }
              color={"#d8f2ff"}
            />
            <EmojiCard
              emoji={128563}
              heading={"You get a promotion at work"}
              text={
                "You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself and your abilities."
              }
              color={"#eeebfe"}
            />
            <EmojiCard
              emoji={129320}
              heading={"You attend a class reunion"}
              text={
                "You compare yourself with your peers' achievements, instead of making your self-judgement more independent of others."
              }
              color={"#6341ef"}
              id={"tilted-card"}
            />
            <EmojiCard
              emoji={128530}
              heading={"You are at a lively dinner party"}
              text={
                "You play on your phone, instead of confiedntly approaching strangers and striking up a chat."
              }
              color={"#ffefd5"}
            />
            <EmojiCard
              emoji={128565}
              heading={"You hit dead end in a negotiation"}
              text={
                "You get nervous, frazzled, and frustated, instead of staying optimistic and solution-oriented."
              }
              color={"#f1f8f7"}
              id={"last-card"}
            />
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default Familiar;
