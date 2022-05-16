import React, { useState } from "react";
import { Close, MenuOutline } from "react-ionicons";
import Logo from "../utils/Logo";
import { ChevronForward } from "react-ionicons";
import Link from "next/link";

const Drawer = ({ categories }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mr-3">
      <button
        onClick={() => setOpen(!open)}
        className="hover:bg-gray-50 transition duration-150 rounded-full p-3"
      >
        <MenuOutline height="28px" width="28px" />
      </button>

      <div
        className={`${
          open
            ? "opacity-100 pointer-events-auto transform translate-x-0"
            : "opacity-0 pointer-events-none transform -translate-x-4"
        } transition fixed top-0 left-0 duration-200 bg-white z-50 h-full w-[25rem] overflow-y-scroll`}
      >
        <div className=" h-full left-0 p-4">
          <div className="flex justify-between items-center">
            <Logo size="40" />
            <button
              className="hover:bg-gray-50 transition duration-150 rounded-full p-3"
              onClick={() => setOpen(false)}
            >
              <Close height="25px" width="25px" />
            </button>
          </div>
          <div className="mt-4">
            {categories.map((category, index) => (
              <div key={index} className="text-coolBlack">
                <p className="transition inline-block cursor-pointer hover:text-coolOrange py-3 px-1 group duration-150 font-light w-full">
                  {category.name}
                  <span
                    className={`${
                      category.subs.length && "border-b border-borderColor"
                    } w-full z-10 bg-white`}
                  >
                    {category.subs.map((subCategory) => (
                      <Link
                        onClick={() => setOpen(false)}
                        key={subCategory.id}
                        href="/categories/[sub]"
                        as={`/categories/${subCategory.slug}`}
                      >
                        <a className="text-sm text-coolBlack hover:text-coolOrange transition duration-150  hover:bg-gray-50 my-2 px-2 py-1 w-full font-medium flex justify-between items-center">
                          {subCategory.name}
                          <ChevronForward height="16px" width="16px" />
                        </a>
                      </Link>
                    ))}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {open && (
        <div className="bg-coolBlack bg-opacity-50 w-full h-full fixed top-0 left-0"></div>
      )}
    </div>
  );
};

export default Drawer;
