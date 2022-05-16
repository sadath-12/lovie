import React from "react";

const CountryInput = () => {
  return (
    <div className="flex flex-col mt-6">
      <label className="text-xs mb-1">Country</label>
      <select className="border border-coolBlack rounded-md px-2 py-1.5 text-sm">
        <option value="United Kingdom">United Kingdom</option>
        <option value="Germany">Germany</option>
        <option value="Spain">Spain</option>
        <option value="France">France</option>
        <option value="Italy">Italy</option>
      </select>
    </div>
  );
};

export default CountryInput;
