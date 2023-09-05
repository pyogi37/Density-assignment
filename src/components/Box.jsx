import React from "react";

const Box = ({ flexDirection, children, className }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: flexDirection || "row", // Default to 'row' if no direction is provided
    justify: "start",
  };

  return (
    <div style={containerStyle} className={className}>
      {children}
    </div>
  );
};

export default Box;
