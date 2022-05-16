import React, { useState } from "react";
import { Checkmark } from "react-ionicons";
import CheckButton from "../CheckButton";

const selectItems = [
  { type: "Home" },
  { type: "Handmade" },
  { type: "Clothing & Accessories" },
  { type: "Jewelry" },
  { type: "Gifts" },
  { type: "Pets" },
  { type: "Art" },
  { type: "Custom" },
];

const MultiChoice = () => {
  const [selected, setSelected] = useState([]);
  const [otherInput, setOtherInput] = useState(false);

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
    <div className="w-full ">
      <div className="grid grid-cols-2 gap-4 mt-4">
        {selectItems.map((item) => (
          <div key={item.type} className="flex items-center">
            <button
              type="button"
              onClick={() => handleSelction(item.type)}
              className={`${
                validateSelection(item.type) === true
                  ? "bg-coolOrange border border-white"
                  : "border border-coolOrange"
              } rounded-md`}
            >
              <Checkmark color="white" />
            </button>
            <p className="ml-3 text-sm">{item.type}</p>
          </div>
        ))}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => setOtherInput(!otherInput)}
            className={`${
              otherInput === true
                ? "bg-coolOrange border border-white"
                : "border border-coolOrange"
            } rounded-md`}
          >
            <Checkmark color="white" />
          </button>
          <p className="ml-3 text-sm">Other</p>
        </div>
      </div>

      <textarea
        className="border mt-4 min-w-full border-coolBlack rounded-md p-2"
        type="text"
      />

<div className="space-y-5">

<div className="flex items-start mt-3 flex-col">
  <h2 className="text-sm mb-1 font-bold">Years of Industry Experience</h2>



<div className="flex items-center space-x-4">
        <CheckButton text='within 5 years' />
        <CheckButton text='more than 5 years' />
</div>


</div>


<div className="flex items-start mt-3 flex-col">
  <h2 className="text-sm mb-1 font-bold">Number of full-time team members</h2>



<div className="flex items-center space-x-4">
        <CheckButton text='within 5 years' />
        <CheckButton text='more than 5 years' />
</div>


</div>
</div>





    </div>
  );
};

export default MultiChoice;
