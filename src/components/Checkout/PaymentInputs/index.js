import React from "react";
import NameOnCardInput from "./NameOnCardInput";
import CardNumber from "./CardNumber";
import ExpiryDateInput from "./ExpiryDateInput";

const PaymentInputs = () => {
  return (
    <div>
      <div className="border-b border-coolBlack mt-10 pb-4 flex justify-between items-center">
        <h2 className="uppercase tracking-[-1.5px] font-cool text-2xl font-medium ">
          Payment Information
        </h2>
        <p className="text-xs text-coolDarkGreen">Required</p>
      </div>
      <div className="w-[30rem]">
        <NameOnCardInput />
        <CardNumber />
        <ExpiryDateInput />
      </div>
    </div>
  );
};

export default PaymentInputs;
