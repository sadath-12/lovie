import React, { useState } from "react";
import { ChevronDown } from "react-ionicons";

const sizes = [
  { size: "XS" },
  { size: "S" },
  { size: "M" },
  { size: "L" },
  { size: "XL" },
];

const Size = ({ selected, setSelected, open, setOpen }) => {
  return (
    <div className="flex flex-col relative max-w-[28.5rem]">
      <h4 className="text-light text-gray-500 text-xs mb-1">Size</h4>

      <div className="w-full bg-white rounded-md grid grid-cols-5 gap-4">
        {sizes.map((size) => (
          <button
            onClick={() => {
              setSelected(size.size);
              setOpen(false);
            }}
            key={size.size}
            className={`${
              selected.toUpperCase() === size.size
                ? "border-coolOrange bg-gray-50 text-coolOrange"
                : "hover:bg-gray-50 border-coolBlack"
            }  w-full text-sm rounded border px-4 py-2`}
          >
            {size.size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Size;
