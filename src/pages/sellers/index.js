import React, { useEffect, useState } from "react";
import Image from "next/image";
import Layout from "../../components/layout/Layout";
import CharSearch from "../../components/navigation/CharSearch";
import StoreCard from "../../components/DataDisplay/StoreCard";
import SearchIcon from "../../components/icons/SearchIcon";

const index = ({ stores, categories }) => {
  const [searchValue, setSearchValue] = useState("Search Stores");
  const [char, setChar] = useState("All");
  const [fs, setFs] = useState(stores);

  useEffect(() => {
    if (char === "All") {
      setFs(stores);
    } else {
      const filteredStores = stores.filter(
        (store) => store.store_name.charAt(0).toLowerCase() === char
      );
      setFs(filteredStores);
    }
  }, [char]);

  return (
    <Layout categories={categories}>
      <div className="text-center mb-10 mt-12">
        <h1 className="text-5xl uppercase text-coolBlack font-cool font-semibold">
          Our Creators
        </h1>
        <p className="text-gray-400 text-lg max-w-[38rem] mx-auto mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          labore maxime nobis ipsam unde eaque debitis.
        </p>
      </div>
      {/* SELLERS HERO IMAGE */}
      <div className="relative w-full h-[30rem] object-top">
        <Image
          src="/sellers.png"
          objectFit="cover"
          layout="fill"
          className="object-top"
        />
        <div className="bg-coolBlack absolute w-full h-full bg-opacity-10 flex items-center justify-center flex-col">
          <h1 className="text-4xl md:text-6xl lg:text-7xl uppercase text-white font-cool z-20 ">
            Editors Pick
          </h1>
          <button className="text-white border mt-4 transition duration-150 hover:bg-coolBlack hover:bg-opacity-40 border-white rounded-md px-4 py-1.5 text-lg">
            meet this week's featured sellers
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center mt-14">
        <div className="border-[3px] py-[0.4rem] px-2 lg:w-[20rem] rounded-full border-coolBlack flex items-center justify-center focus:outline-none group w-full relative">
          <div className="mr-auto ml-2.5 absolute left-2 z-10 bg-white">
            <SearchIcon />
          </div>
          <input
            onFocus={() => setSearchValue("")}
            onBlur={() => setSearchValue("Search Stores")}
            className=" text-center py-[0.2rem] px-2 lg:w-[26rem] border-coolBlack flex items-center justify-center focus:outline-none group w-full self-center transition duration-150 font-semibold uppercase"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>
      {/* Search */}
      <CharSearch char={char} setChar={setChar} />
      <div className="text-center mb-20">
        <h1 className="text-[85px] font-medium uppercase text-coolOrange font-cool z-20 ">
          {char}
        </h1>
      </div>
      <div className="mx-auto pb-20">
        {fs.length ? (
          <StoreCard stores={fs} />
        ) : (
          <div className="flex items-center justify-center mb-20">
            <p>{`We couldn't find any stores with the letter ${char.toUpperCase()}`}</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default index;

export async function getStaticProps() {
  const api = process.env.NEXT_PUBLIC_API;
  const categoryRes = await fetch(`${api}/categories`);
  const categoryData = await categoryRes.json();

  const res = await fetch(`${api}/stores`);
  const data = await res.json();

  return {
    props: { stores: data, categories: categoryData },
    revalidate: 200,
  };
}
