import React from "react";
import CountryInput from "./CountryInput";
import NameInput from "./NameInput";
import AddressInput from "./AddressInput";

const index = () => {
  return (
    <div>
      <div className="border-b border-coolBlack mt-10 pb-4 flex justify-between items-center">
        <h2 className="uppercase tracking-[-1.5px] font-cool text-2xl font-medium w-[12rem]">
          Delivery
        </h2>
        <p className="text-xs text-coolDarkGreen">Required</p>
      </div>
      <CountryInput />
      <NameInput />
      <AddressInput />
    </div>
  );
};

export default index;
