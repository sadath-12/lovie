import React from "react";
import { ChevronDown } from "react-ionicons";

const colors = [
  { colour: "#ffffff", text: "white" },
  { colour: "#e5e7eb", text: "Gray" },
  { colour: "#334155", text: "Black" },
];

const Colour = ({ selected, setSelected, setOpen }) => {
  return (
    <div className="flex flex-col relative max-w-[10rem] mb-2">
      <h4 className="text-light text-gray-500 text-xs mb-1">Colour</h4>

      <div className="flex items-center gap-2 mt-1">
        {colors.map((colour) => (
          <button
            style={{ background: colour.colour }}
            onClick={() => {
              setSelected(colour.text);
              setOpen(false);
            }}
            key={colour.colour}
            className={`${
              colour.text === selected
                ? "ring-1 ring-offset-2 ring-black"
                : "hover:ring-1 hover:ring-offset-2 hover:ring-black border-coolBlack"
            } flex items-center transition duration-150 justify-center h-7 w-7 mr-2 rounded-full border border-gray-200`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Colour;
