import React from "react";

const IntroRight = () => {
  const iconCount = 5; // Number of icons
  const iconRadius = 120; // Radius of the circle containing icons
  const circleCenterX = -200; // X-coordinate of the circle center
  const circleCenterY = 50; // Y-coordinate of the circle center

  const icons = [];

  for (let i = 0; i < iconCount; i++) {
    const angle = (i * 360) / iconCount; // Calculate angle for each icon
    const radians = (angle * Math.PI) / 180; // Convert angle to radians

    // Calculate icon position
    const iconX = circleCenterX + iconRadius * Math.cos(radians);
    const iconY = circleCenterY + iconRadius * Math.sin(radians);

    icons.push(
      <div
        key={i}
        className="circle bg-red-500 flex items-center justify-center h-16 w-16"
        style={{
          position: "absolute",
          top: `${iconY}px`,
          left: `${iconX}px`,
        }}
      >
        <img
          src="path_to_your_icon_image.png"
          alt={`Icon ${i + 1}`}
          className="w-6 h-6"
        />
      </div>
    );
  }

  return (
    <div className="bg-gray-200 flex items-center justify-center h-auto">
      <div className="relative">
        {/* Dotted Circle */}
        <div className="transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-dotted border-4 border-gray-600 rounded-full"></div>

        {/* Solid Circle */}
        <div className="transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
          {/* Mobile Phone Image */}
          <img
            src="path_to_your_mobile_image.png"
            alt="Mobile Phone"
            className="w-16 h-16"
          />
        </div>

        {/* Icons */}
        {icons}
      </div>
    </div>
  );
};

export default IntroRight;
