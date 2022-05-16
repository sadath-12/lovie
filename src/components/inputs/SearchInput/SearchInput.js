import React, { useState } from "react";
import SearchIcon from "../../icons/SearchIcon";

const SearchInput = ({ openMenu, setOpenMenu, search, setSearch }) => {
  const handleSearch = () => {
    setSearch("");
    setOpenMenu(true);
  };

  return (
    <div className="border-[3px] py-[0.4rem] px-2 lg:w-[26rem] rounded-full border-coolBlack flex items-center justify-center focus:outline-none group w-full relative">
      <div className="mr-auto ml-2.5 absolute left-2 z-10 bg-white">
        <SearchIcon />
      </div>
      <input
        onClick={() => handleSearch()}
        onFocus={() => setSearch("")}
        onBlur={() => setSearch("what are you looking for?")}
        onChange={(e) => setSearch(e.target.value)}
        className=" text-center py-[0.2rem] px-2 lg:w-[26rem] border-coolBlack flex items-center justify-center focus:outline-none group w-full self-center transition duration-150 text-sm sm:text-base font-bold"
        value={search}
      />
    </div>
  );
};

export default SearchInput;
