import React from "react";
import { Checkmark } from "react-ionicons";

const Join = () => {
  return (
    <div>
      <div className="border-b border-coolBlack mt-10 pb-4 flex justify-between items-center">
        <h2 className="uppercase tracking-[-1.5px] font-cool text-2xl font-medium ">
          Join the LOVIE AURORA mailing list
        </h2>
        <p className="text-xs text-coolDarkGreen">Required</p>
      </div>
      <div className="flex items-center mt-4">
        <button
          type="button"
          className="bg-coolOrange border border-white rounded-md mr-4"
        >
          <Checkmark color="white" />
        </button>
        <p className="text-xs text-coolDarkGreen">
          Yes, I want to receive the LOVIE AURORA newsletter, as well as hear
          about special offers, events, news and updates
        </p>
      </div>
    </div>
  );
};

export default Join;
