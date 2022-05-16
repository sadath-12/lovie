import React from "react";
import Sidebar from "../navigation/Sidebar/Sidebar";
import Link from "next/link";
import { NavLogInIcon, NavCartIcon } from "../icons/NavIcons";
import SearchIcon from "../icons/SearchIcon";
import Footer from "../navigation/Footer";

const AppLayout = ({ children }) => {
  return (
    <main className="flex max-h-screen">
      <Sidebar />
      <section className="py-6 px-10 w-full ml-[20rem]">
        {/* <div className="flex items-center justify-between gap-2">
          <div className="border-[1px] py-[0.4rem] px-2 lg:w-[34rem] rounded-full border-coolBlack flex items-center justify-center focus:outline-none group w-full relative">
            <div className="mr-auto ml-2.5 absolute left-2 z-10 bg-white">
              <SearchIcon />
            </div>
            <input className=" text-center py-[0.2rem] px-2 lg:w-[26rem] border-coolBlack flex items-center justify-center focus:outline-none group w-full self-center transition duration-150 font-bold" />
          </div>

          <div className="flex items-center gap-3">
            <Link href="/auth/signup">
              <a className="rounded-full border-[3px] border-coolBlack h-[3rem] w-[3rem] flex items-center justify-center hover:bg-coolBlack transition duration-200 group">
                <span className="group-hover:hidden -ml-4">
                  <NavLogInIcon />
                </span>
                <span className="text-[0.5rem] hidden group-hover:block text-white">
                  log in
                </span>
              </a>
            </Link>
            <Link href="/auth/signup">
              <a className="rounded-full border-[3px] border-coolBlack h-[3rem] w-[3rem] flex items-center justify-center hover:bg-coolBlack transition duration-200 group">
                <span className="group-hover:hidden">
                  <NavCartIcon />
                </span>
                <span className="text-[0.5rem] hidden group-hover:block text-white">
                  cart
                </span>
              </a>
            </Link>
          </div>
        </div> */}
        {children}
        <div className="mt-20"></div>
        <Footer />
      </section>
    </main>
  );
};

export default AppLayout;
