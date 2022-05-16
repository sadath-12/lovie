import React from "react";

const Button = ({
  margin,
  text,
  onClick,
  color,
  type,
  padding,
  disabledOpacity,
  ...other
}) => {
  return (
    <button
      {...other}
      type={type}
      className={`${margin} ${
        color ? color : "bg-coolOrange"
      }  text-white uppercase rounded-md ${padding ? padding : "py-2 px-7"} ${
        disabledOpacity
          ? "opacity-40"
          : "hover:bg-opacity-60 transition duration-150"
      }  text-sm truncate `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
