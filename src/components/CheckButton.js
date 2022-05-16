import React, { useState } from 'react';
import { Checkmark } from 'react-ionicons';

const CheckButton = ({text}) => {

    const [otherInput,setOtherInput]=useState(false)

  return (
      <>

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
  <p className="ml-3 text-sm">{text}</p>
</>
  );
}

export default CheckButton;
