import React from "react";
import { useEffect } from "react";
import gsap from "gsap";

const Navbar = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to("#nav-icon", { duration: 1, rotation: -10, ease: "power1.inOut" }).to(
      "#nav-icon",
      { duration: 1, rotation: 10, ease: "power1.inOut" }
    );

    tl.play();

    return () => {
      tl.kill();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log(document);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="text-black p-4 flex justify-between items-center">
      {/* Left-side icon */}
      <div className="flex items-center space-x-2">
        <span className="font-semibold">
          <img
            src="/assets/cute.png"
            alt="user"
            className="w-12"
            id="nav-icon"
          />
        </span>
      </div>

      {/* Middle navigation options */}
      <div className="space-x-4">
        <button
          onClick={() => scrollToSection("emotions")}
          className="hover:text-gray-300 cursor-pointer"
        >
          Emotions
        </button>
        <button
          onClick={() => scrollToSection("manifesto")}
          className="hover:text-gray-300 cursor-pointer"
        >
          Manifesto
        </button>
        <button
          onClick={() => scrollToSection("test")}
          className="hover:text-gray-300 cursor-pointer"
        >
          Self-awareness test
        </button>
        <button
          onClick={() => scrollToSection("workWithUs")}
          className="hover:text-gray-300 cursor-pointer"
        >
          Work With Us
        </button>
      </div>

      {/* Right-side "Download App" button */}
      <a
        href="/"
        className="text-white bg-black px-4 py-2 rounded-full hover:bg-gray-800"
      >
        Download App
      </a>
    </nav>
  );
};

export default Navbar;
