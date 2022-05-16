import React from "react";

const Paragraph = ({ margin, text, size, fontWeight }) => {
  return (
    <p
      className={`${margin} ${size ? size : "text-xs"} ${
        fontWeight ? fontWeight : "font-light"
      }  text-gray-500`}
    >
      {text}
    </p>
  );
};

export default Paragraph;
