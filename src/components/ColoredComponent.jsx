import React from "react";

const ColoredComponent = ({ color, children, className, flexDirection }) => {
  const containerStyle = {
    backgroundColor: color,
    display: "flex",
    flexDirection: flexDirection || "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "auto",
    borderRadius: "15px",
    padding: "50px",
    alignItems: "flex-start",
  };

  return (
    <div style={containerStyle} className={className}>
      {children}
    </div>
  );
};

export default ColoredComponent;
