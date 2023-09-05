import React from "react";

const Navbar = () => {
  return (
    <nav className="text-black p-4 flex justify-between items-center">
      {/* Left-side icon */}
      <div className="flex items-center space-x-2">
        <span className=" font-semibold">
          <img src="/assets/cute.png" alt="user" className="w-10" />
        </span>
      </div>

      {/* Middle navigation options */}
      <div className="space-x-4">
        <a href="/" className=" hover:text-gray-300">
          Emotions
        </a>
        <a href="/" className=" hover:text-gray-300">
          Manifesto
        </a>
        <a href="/" className=" hover:text-gray-300">
          Self-awareness test
        </a>
        <a href="/" className=" hover:text-gray-300">
          Work With Us
        </a>
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
