import React, { useRef, useEffect, useState } from "react";
import { ChevronDown } from "react-ionicons";

const Quantity = ({ quantity, setQuantity }) => {
  const [open, setOpen] = useState(false);

  const node = useRef();

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  const handleChange = (selectedValue) => {
    setQuantity(selectedValue);
    setOpen(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={node} className="flex relative flex-col max-w-[5rem]">
      <h4 className="text-light text-gray-500 text-xs mb-1">Quantity</h4>
      <div
        onClick={() => setOpen(!open)}
        className="border border-coolBlack rounded-md flex items-center px-1.5 py-1.5 cursor-pointer"
      >
        <span className="text-lg w-full text-center">{quantity}</span>
        <div className="ml-auto border-l border-coolBlack pl-1">
          <ChevronDown />
        </div>
        {open && (
          <div className="absolute bg-white border border-coolBlack top-16 z-10 left-0 rounded-md w-full  flex flex-col items-start overflow-hidden">
            <button
              onClick={() => handleChange(1)}
              className="hover:bg-gray-100 px-4 py-1  w-full"
            >
              1
            </button>
            <button
              onClick={() => handleChange(2)}
              className="hover:bg-gray-100 px-4 py-1  w-full"
            >
              2
            </button>
            <button
              onClick={() => handleChange(3)}
              className="hover:bg-gray-100 px-4 py-1  w-full"
            >
              3
            </button>
            <button
              onClick={() => handleChange(4)}
              className="hover:bg-gray-100 px-4 py-1  w-full"
            >
              4
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quantity;
