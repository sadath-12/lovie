import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "../Typography/Heading";
import StarReviews from "../DataDisplay/StarReviews";
import Paragraph from "../Typography/Paragraph";
import { categories } from "../../data/index";

const SearchDropdown = ({
  categories: items,
  open,
  setOpen,
  setSearch,
  setOpenMenu,
}) => {
  const node = useRef();
  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setOpen(false);
  };

  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

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
    return slug;
  };

  return (
    <div
      ref={node}
      className="absolute bg-white left-0 w-full py-10 lg:-bottom-[29rem] px-8 flex items-start gap-10"
    >
      {/* TENDY PRODUCTS */}
      <div className="hidden lg:block">
        <h3 className="mb-4 font-cool uppercase font-semibold text-lg">
          Trendy Products
        </h3>
        <div className="flex items-center gap-4 ">
          {items[3].items.slice(0, 3).map((item) => (
            <div key={item.id} className="mr-2">
              <Link
                href="/categories/[sub]/[slug]"
                as={`/categories/${categories[3].subs[0].slug}/${item.slug}`}
              >
                <a>
                  <div className="relative h-[14rem] aspect-[8/10]">
                    <Image
                      src={item.supporting_images[0].url}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                </a>
              </Link>
              <div className="mt-2 lg:mt-2 text-gray-600 relative group w-full">
                <p className="uppercase tracking-[-0.02] md:tracking-[-0.05em] font-[300] text-[7px] md:text-[12px] hover:underline">
                  Cloth
                </p>

                <Heading h3 text={item.name} size="text-base truncate" />
                <div className="flex md:items-center flex-row sm:flex-col md:flex-row mt-1">
                  <StarReviews />
                  <Paragraph
                    margin="ml-2 sm:ml-0 md:ml-2"
                    text="231"
                    size="text-[0.7rem]"
                  />
                </div>
                <div className="mt-1 flex items-center ">
                  <Heading h3 text={`$${item.price}`} size="text-base" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SUGGESTED SEARCHES */}
      <div className="w-[12rem]">
        <h3 className="mb-4 font-cool uppercase font-semibold text-lg">
          Suggestions
        </h3>
        <div>
          <p
            onClick={() => {
              setSearch("ribbed button vest");
              setOpenMenu(false);
            }}
            className="text-gray-500 text-sm mb-4 cursor-pointer hover:text-gray-300"
          >
            ribbed button vest
          </p>
          <p
            onClick={() => {
              setSearch("white t-shirt");
              setOpenMenu(false);
            }}
            className="text-gray-500 text-sm mb-4 cursor-pointer hover:text-gray-300"
          >
            white t-shirt
          </p>
          <p
            onClick={() => {
              setSearch("blue jeans");
              setOpenMenu(false);
            }}
            className="text-gray-500 text-sm cursor-pointer hover:text-gray-300"
          >
            blue jeans
          </p>
        </div>
      </div>

      {/* CATEGORIES */}
      <div>
        <Link href="/categories">
          <a className="mb-4 font-cool uppercase font-semibold text-lg">
            Categories
          </a>
        </Link>

        <div className="grid grid-cols-2 gap-4 mt-5">
          {categories.map((category) => (
            <Link key={category.id} href={checkPaths(category.slug)}>
              <a
                onClick={() => setOpenMenu(false)}
                className="uppercase text-gray-500 text-xs hover:text-gray-300"
              >
                {category.name}
              </a>
            </Link>
          ))}
          <Link href="/sales">
            <a
              onClick={() => setOpenMenu(false)}
              className="uppercase text-gray-500 text-xs hover:text-gray-300"
            >
              sale
            </a>
          </Link>
          <Link href="/sellers">
            <a
              onClick={() => setOpenMenu(false)}
              className="uppercase text-gray-500 font-bold text-xs hover:text-gray-300"
            >
              ALL STORES
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchDropdown;
