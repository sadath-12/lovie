import React from "react";
import { Add } from "react-ionicons";

const ImageUpload = () => {
  return (
    <div className="w-full">
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md min-w-full min-h-[14rem]">
        <div className="space-y-1 text-center flex flex-col items-center justify-center">
          <Add />
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
