import React, { useState } from "react";
import Paragraph from "../Typography/Paragraph";
import { Add, Remove } from "react-ionicons";
import Button from "../inputs/Button";
import { Checkmark } from "react-ionicons";

export const Category = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const options = [
    "Home",
    "Clothing & Accessories",
    "Jewelry",
    "Handmade",
    "Gifts",
    "Arts",
    "Pets",
    "Custom",
    "Pre-order",
    "Auction",
    "Sale",
    "Other",
  ];
  const validateSelection = (selectedOption) => {
    return selected.some((s) => s === selectedOption);
  };

  const handleSelction = (selectedOption) => {
    const inSelectedArr = selected.some((s) => s === selectedOption);

    if (inSelectedArr) {
      const filtered = selected.filter(
        (selection) => selection !== selectedOption
      );
      setSelected(filtered);
    } else {
      setSelected([...selected, selectedOption]);
    }
  };

  return (
    <div className="border-b border-t border-gray-300 py-4 ">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full"
      >
        <Paragraph size="text-md text-coolBlack" text="Category" />
        {open ? (
          <Remove height="16px" width="16px" />
        ) : (
          <Add height="16px" width="16px" />
        )}
      </button>
      {open && (
        <div className="mt-4">
          {options.map((option) => (
            <div key={option} className="my-1 flex items-center gap-2">
              <button
                onClick={() => handleSelction(option)}
                type="button"
                className={`${
                  validateSelection(option) === true
                    ? "bg-coolOrange border border-white"
                    : "border border-coolOrange"
                } rounded h-4 w-4 flex items-center justify-center`}
              >
                <Checkmark color="white" height="14px" wdith="14px" />
              </button>
              <span className="text-textColor text-sm">{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export const Style = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const options = [
    "Textile",
    "Ceramic",
    "Metal",
    "Glass",
    "Wood",
    "Paper",
    "Leather",
    "Rubber",
    "Stone",
    "Pearl",
    "Plant",
    "Plastic",
    "Diatom Mud",
    "Other",
  ];

  const validateSelection = (selectedOption) => {
    return selected.some((s) => s === selectedOption);
  };

  const handleSelction = (selectedOption) => {
    const inSelectedArr = selected.some((s) => s === selectedOption);

    if (inSelectedArr) {
      const filtered = selected.filter(
        (selection) => selection !== selectedOption
      );
      setSelected(filtered);
    } else {
      setSelected([...selected, selectedOption]);
    }
  };

  return (
    <div className="border-b border-gray-300 py-4 ">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full"
      >
        <Paragraph size="text-md text-coolBlack" text="Material" />
        {open ? (
          <Remove height="16px" width="16px" />
        ) : (
          <Add height="16px" width="16px" />
        )}
      </button>
      {open && (
        <div className="mt-4">
          {options.map((option) => (
            <div key={option} className="my-1 flex items-center gap-2">
              <button
                onClick={() => handleSelction(option)}
                type="button"
                className={`${
                  validateSelection(option) === true
                    ? "bg-coolOrange border border-white"
                    : "border border-coolOrange"
                } rounded h-4 w-4 flex items-center justify-center`}
              >
                <Checkmark color="white" height="14px" wdith="14px" />
              </button>
              <span className="text-textColor text-sm">{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export const Price = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-300 py-4 ">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full"
      >
        <Paragraph size="text-md text-coolBlack" text="Price" />
        {open ? (
          <Remove height="16px" width="16px" />
        ) : (
          <Add height="16px" width="16px" />
        )}
      </button>
      {open && (
        <div className="mt-4 flex flex-col items-start">
          <div className="my-1 flex items-center gap-2">
            <button
              onClick={() => setSelected("Low to High")}
              type="button"
              className={`${
                selected === "Low to High"
                  ? "bg-coolOrange border border-white"
                  : "border border-coolOrange"
              } rounded h-4 w-4 flex items-center justify-center`}
            >
              <Checkmark color="white" height="14px" wdith="14px" />
            </button>
            <span className="text-textColor text-sm">Low to High</span>
          </div>
          <div className="my-1 flex items-center gap-2">
            <button
              onClick={() => setSelected("High to Low")}
              type="button"
              className={`${
                selected === "High to Low"
                  ? "bg-coolOrange border border-white"
                  : "border border-coolOrange"
              } rounded h-4 w-4 flex items-center justify-center`}
            >
              <Checkmark color="white" height="14px" wdith="14px" />
            </button>
            <span className="text-textColor text-sm">High to Low</span>
          </div>
        </div>
      )}
    </div>
  );
};
export const Size = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full"
      >
        <Paragraph size="text-md text-coolBlack" text="Size" />
        {open ? (
          <Remove height="16px" width="16px" />
        ) : (
          <Add height="16px" width="16px" />
        )}
      </button>
      {open && <div className="mt-4">Nice Filters</div>}
    </div>
  );
};

export const Scores = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(false);

  const scoreItems = [
    { score: "HS", bg: "bg-coolOrange", border: "border-coolOrange" },
    { score: "OS", bg: "bg-coolDarkGreen", border: "border-coolDarkGreen" },
    { score: "QS", bg: "bg-coolBlack", border: "border-coolBlack" },
    { score: "CS", bg: "bg-gray-500", border: "border-gray-500" },
  ];

  return (
    <div className="border-b border-gray-300 py-4 ">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full"
      >
        <Paragraph size="text-md text-coolBlack" text="Scores" />
        {open ? (
          <Remove height="16px" width="16px" />
        ) : (
          <Add height="16px" width="16px" />
        )}
      </button>
      {open && (
        <div className="mt-4 flex flex-col items-start">
          {scoreItems.map((score, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center gap-2 mb-3">
                <div
                  className={`${score.bg} -ml-0.5 rounded-md p-1 text-[0.7rem] text-white`}
                >
                  {score.score}
                </div>
              </div>
              <div className="my-1 flex items-center gap-2">
                <button
                  onClick={() => setSelected(`${score.score} Low to High`)}
                  type="button"
                  className={`${
                    selected === `${score.score} Low to High`
                      ? `${score.bg} border border-white`
                      : `border ${score.border}`
                  } rounded h-4 w-4 flex items-center justify-center`}
                >
                  <Checkmark color="white" height="14px" wdith="14px" />
                </button>
                <span className="text-textColor text-sm">Low to High</span>
              </div>
              <div className="my-1 flex items-center gap-2">
                <button
                  onClick={() => setSelected(`${score.score} High to Low`)}
                  type="button"
                  className={`${
                    selected === `${score.score} High to Low`
                      ? `${score.bg} border border-white`
                      : `border ${score.border}`
                  } rounded h-4 w-4 flex items-center justify-center`}
                >
                  <Checkmark color="white" height="14px" wdith="14px" />
                </button>
                <span className="text-textColor text-sm">High to Low</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Filters = (text) => {
  const [categorySelection, setCategorySelection] = useState([]);
  const [materialSelection, setMaterialSelection] = useState([]);
  const [priceSelection, setPriceSelection] = useState("");
  const [scoreSelection, setScoreSelection] = useState("");

  const handleClearAll = () => {
    setCategorySelection([]);
    setMaterialSelection([]);
    setPriceSelection("");
    setScoreSelection("");
  };
  return (
    <div className="mt-8">
      <h3 className="text-md uppercase text-gray-500 font-medium mb-4">
        Filters
      </h3>
      <Category
        selected={categorySelection}
        setSelected={setCategorySelection}
      />
      <Style selected={materialSelection} setSelected={setMaterialSelection} />
      <Price selected={priceSelection} setSelected={setPriceSelection} />
      <Scores selected={scoreSelection} setSelected={setScoreSelection} />
      {/* <Size /> */}
      <div className="mt-10">
        <Button
          color="bg-coolDarkGreen"
          text="Clear All"
          padding="px-2.5 py-0.5"
          onClick={() => handleClearAll()}
        />
      </div>
    </div>
  );
};

export default Filters;
