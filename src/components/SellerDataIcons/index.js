import React, { useState } from "react";
import ScorePopup from '../../components/popups/scores'
const index = ({ margin }) => {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState(null)

  const handleClickOpen = (text) => {
    setOpen(true);
    setType(text)
  };


  return (
    <div className={`flex items-center gap-4 ${margin ? margin : "mt-6"} mb-3`}>
      <div className="flex items-center gap-2">
        <div className="bg-coolOrange cursor-pointer rounded-md p-1 text-[0.7rem] text-white" onClick={() => handleClickOpen('handmade')}>
          HS
        </div>
        <ScorePopup type={type} open={open} setOpen={setOpen} />
        <span className="text-sm">101</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-coolDarkGreen cursor-pointer rounded-md p-1 text-[0.7rem] text-white" onClick={() => handleClickOpen('original')}>
          OS
        </div>
        <span className="text-sm text-coolBlack">35</span>
      </div>
    </div>
  );
};

export default index;
