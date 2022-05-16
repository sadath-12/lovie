import React, { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { categories } from "../../../../data";
import { ChevronDown, ChevronUp } from "react-ionicons";

const Categories = () => {
  const router = useRouter();
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [down, setDown] = useState(null);

  const onScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    prevScrollY.current = currentScrollY;
    setDown(prevScrollY.current);
  };

  const checkPaths = (slug) => {
    if (slug === "pre-order") {
      return "/pre-orders";
    }
    if (slug === "sale") {
      return "/sales";
    }
    if (slug === "auction") {
      return "/auctions";
    }
    return `/${slug}`;
  };

  return (
    <div className="flex items-center justify-between">
      {categories.map((category, index) => (
        <div key={index} className="text-coolBlack">
          <div
            className={`transition inline-block cursor-pointer hover:text-coolOrange relative py-3 px-3 group duration-150 font-light ${
              index === 0 && "pl-0"
            } ${index === 11 && "pr-0"}`}
          >
            <Link href={checkPaths(category.slug)}>
              <a>{category.name}</a>
            </Link>
            {/* <Link href={`/${category.slug}`}>
              <a>{category.name}</a>
            </Link> */}
            <div
              className={`${
                category.subs.length && "border-y border-borderColor"
              } absolute w-[10rem] left-1/2 transform -translate-x-1/2 pointer-events-none group-hover:pointer-events-auto top-[3rem] opacity-0 group-hover:opacity-100 delay-200 z-10 shadow-md bg-white`}
            >
              <div
                onScroll={onScroll}
                className="flex overflow-y-scroll max-h-[31rem] categories"
              >
                <div className="flex-1">
                  {category.subs.map((subCategory) => (
                    <Link
                      key={subCategory.id}
                      href="/categories/[sub]"
                      as={`/categories/${subCategory.slug}`}
                    >
                      <a className="text-sm text-coolBlack hover:text-coolOrange transition duration-150  hover:bg-gray-50 px-3 my-2 py-3 w-full font-medium flex justify-start">
                        {subCategory.name}
                      </a>
                    </Link>
                  ))}
                </div>
                {category.subs.length >= 9 && (
                  <div
                    className={`${
                      down > 210 && "hidden"
                    } absolute top-[28.6rem] py-2 z-20 left-1/2 transform -translate-x-1/2 bg-white border-t border-gray-200 w-[90%] flex items-center justify-center`}
                  >
                    <ChevronDown color="#363638" />
                  </div>
                )}
                {category.subs.length >= 9 && (
                  <div
                    className={`${
                      down < 210 && "hidden"
                    } absolute py-2 z-20 left-1/2 transform -translate-x-1/2 bg-white border-b border-gray-200 w-[90%] flex items-center justify-center`}
                  >
                    <ChevronUp color="#363638" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
