import React from "react";

const Box = ({ flexDirection, children, className, id, ref }) => {
  const containerStyle = {
    display: "flex",
    flexDirection: flexDirection || "row", // Default to 'row' if no direction is provided
    justify: "start",
  };

  return (
    <div style={containerStyle} className={className} id={id} ref={ref}>
      {children}
    </div>
  );
};

export default Box;
