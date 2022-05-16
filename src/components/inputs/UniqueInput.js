import React, { useState } from "react";

const scale = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

const UniqueInput = () => {
  const [choice, setChoice] = useState("1");
  return (
    <div className="flex items-center gap-2">
      {scale.map((number) => (
        <button
          type="button"
          onClick={() => setChoice(number)}
          key={number}
          className={`${
            choice === number
              ? "bg-coolOrange text-white"
              : "text-coolOrange bg-white"
          } h-8 w-8 rounded-md flex items-center justify-center border border-coolOrange mt-2 text-xs`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default UniqueInput;
