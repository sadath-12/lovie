import React, { useState } from "react";
import { ChevronDown } from "react-ionicons";

const Text = () => {
  return (
    <div>
      <p className="text-[0.6rem] text-gray-500">Text</p>
      <input type="text" className="border border-gray-200 rounded-md p-1" />
    </div>
  );
};

const Note = () => {
  return (
    <div className="">
      <p className="text-[0.6rem] text-gray-500">Your Note</p>
      <input
        type="text"
        className="border border-gray-200 rounded-md p-1 max-w-[5.1rem] "
      />
    </div>
  );
};

const TextColor = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Green");
  return (
    <div className="flex relative flex-col">
      <h4 className="text-light text-gray-500 text-[0.6rem]">Text Color</h4>
      <div
        onClick={() => setOpen(!open)}
        className="border border-gray-200 rounded-md p-0.5 flex items-center cursor-pointer"
      >
        <span className="text-lg w-full text-center text-[0.6rem] ml-3 mr-3.5">
          {value}
        </span>
        <div className="ml-auto border-l border-gray-200 pl-1.5 pr-1.5">
          <ChevronDown height="16px" width="16px" color="gray" />
        </div>
        {open && (
          <div className="absolute bg-white border border-gray-200 top-14 z-10 left-0 rounded-md w-full  flex flex-col items-start overflow-hidden">
            <button
              onClick={() => setValue("Black")}
              className="hover:bg-gray-100 px-4 py-1 text-xs  w-full"
            >
              Black
            </button>
            <button
              onClick={() => setValue("Gray")}
              className="hover:bg-gray-100 px-4 py-1 text-xs  w-full"
            >
              Gray
            </button>
            <button
              onClick={() => setValue("Blue")}
              className="hover:bg-gray-100 px-4 py-1 text-xs  w-full"
            >
              Blue
            </button>
            <button
              onClick={() => setValue("Orange")}
              className="hover:bg-gray-100 px-4 py-1 text-xs  w-full"
            >
              Orange
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Font = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(4);
  return (
    <div className="flex relative flex-col">
      <h4 className="text-light text-gray-500 text-[0.6rem]">Font</h4>
      <div
        onClick={() => setOpen(!open)}
        className="border border-gray-200 rounded-md p-0.5 flex items-center cursor-pointer"
      >
        <span className="text-lg w-full text-center text-[0.6rem] ml-3 mr-3.5">
          {value}
        </span>
        <div className="ml-auto border-l border-gray-200 pl-1.5 pr-1.5">
          <ChevronDown height="16px" width="16px" color="gray" />
        </div>
        {open && (
          <div className="absolute bg-white border border-gray-200 top-14 z-10 left-0 rounded-md w-full  flex flex-col items-start overflow-hidden">
            <button
              onClick={() => setValue(6)}
              className="hover:bg-gray-100 px-4 py-1 text-xs  w-full"
            >
              6
            </button>
            <button
              onClick={() => setValue(8)}
              className="hover:bg-gray-100 px-4 py-1 text-xs  w-full"
            >
              8
            </button>
            <button
              onClick={() => setValue(10)}
              className="hover:bg-gray-100 px-4 py-1 text-xs  w-full"
            >
              10
            </button>
            <button
              onClick={() => setValue(12)}
              className="hover:bg-gray-100 px-4 py-1 text-xs  w-full"
            >
              12
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Customize = () => {
  return (
    <div className="max-w-[28.5rem]">
      <h4 className="text-light text-gray-500 text-xs mt-3 leading-none">
        Add your customisation
      </h4>
      <p className="text-[0.6rem] text-gray-500 mt-2">
        Include words/name(s) & font here. Signs are based on width only (NOT
        height), the more letters the shorter the sign. Signs aren't refundable.
      </p>
      <p className="text-[0.6rem] text-gray-500 mt-2">
        Link to preview fonts (copy/paste link). <br />{" "}
        https://namesignpreview.com
      </p>
      <div className="mt-4 flex items-center gap-2">
        <Text />
        <TextColor />
        <Font />
        <Note />
      </div>
    </div>
  );
};

export default Customize;
