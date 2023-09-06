import React from "react";

const ColoredComponent = ({
  color,
  children,
  className,
  flexDirection,
  height,
  id,
}) => {
  const containerStyle = {
    backgroundColor: color,
    display: "flex",
    flexDirection: flexDirection || "row",
    height: height || "auto",
    borderRadius: "15px",
    padding: "50px",
  };

  return (
    <div style={containerStyle} className={className} id={id}>
      {children}
    </div>
  );
};

export default ColoredComponent;
