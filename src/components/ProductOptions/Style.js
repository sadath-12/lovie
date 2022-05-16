import React from "react";
import { ChevronDown } from "react-ionicons";

const styles = [{ style: "Silk" }, { style: "Cotton" }, { style: "Polyester" }];

const Style = ({ selected, setSelected, open, setOpen }) => {
  return (
    <div className="flex flex-col relative max-w-[28.5rem]">
      <h4 className="text-light text-gray-500 text-xs mb-1">Style</h4>

      <div className="bg-white rounded-md w-full z-20 grid grid-cols-3 gap-4 items-center justify-start mt-1">
        {styles.map((style) => (
          <button
            onClick={() => {
              setSelected(style.style);
              setOpen(false);
            }}
            key={style.style}
            className={`${
              selected === style.style
                ? "border-coolOrange bg-gray-50 text-coolOrange"
                : "hover:bg-gray-50 border-coolBlack"
            }  w-full rounded border px-4 py-3`}
          >
            {style.style}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Style;
