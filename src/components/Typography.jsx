import React from "react";

const Typography = ({ variant, text, className }) => {
  let textStyle = className;

  switch (variant) {
    case "heading":
      textStyle += " text-6xl font-bold"; // Big and bold
      break;
    case "sub-heading":
      textStyle += " text-2xl font-bold"; // Smaller but bold
      break;
    case "sub-heading-2":
      textStyle += " text-xl font-bold"; // Smaller than sub-heading and bold
      break;
    case "paragraph":
      textStyle += " text-lg"; // Not bold
      break;
    case "tiny-text":
      textStyle += " text-base"; // Even smaller than paragraph
      break;
    default:
      textStyle += ""; // No specific style for unsupported variants
  }


  return <div className={textStyle}>{text}</div>;
};

export default Typography;
