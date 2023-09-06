import React from "react";

const Typography = ({ variant, text, className, children, id }) => {
  let textStyle = className;

  switch (variant) {
    case "heading":
      textStyle += " text-5xl font-bold"; // Big and bold
      break;
    case "sub-heading":
      textStyle += " text-3xl font-bold"; // Smaller but bold
      break;
    case "sub-heading-2":
      textStyle += " text-xl font-bold"; // Smaller than sub-heading and bold
      break;
    case "paragraph":
      textStyle += " text-base"; // Not bold
      break;
    case "tiny-text":
      textStyle += " text-xs"; // Even smaller than paragraph
      break;
    default:
      textStyle += ""; // No specific style for unsupported variants
  }

  return (
    <div className={textStyle} id={id}>
      {text}
      {children}
    </div>
  );
};

export default Typography;
