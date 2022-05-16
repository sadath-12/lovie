import React from "react";
import Logo from "../../utils/Logo";
import Image from "next/image";
import Link from "next/link";
import { StorefrontOutline, PersonOutline } from "react-ionicons";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="fixed left-0 h-screen min-w-[20rem] bg-gray-50 px-14 flex flex-col items-center py-6 overflow-y-scroll categories">
      <Link href="/">
        <a>
          <Logo size="80" />
        </a>
      </Link>
      <div className="mt-8 text-center">
        <p className="text-coolDarkerGreen">Welcome back</p>
        <h1 className="text-coolDarkerGreen text-3xl font-bold">Suzy Butler</h1>
      </div>

      <div className="relative my-5">
        <div className="relative rounded-full h-24 w-24  overflow-hidden">
          <Image src="/man-tennis-court.jpg" objectFit="cover" layout="fill" />
        </div>
        <div className="h-5 w-5 absolute bottom-0 right-2 bg-coolDarkGreen rounded-full"></div>
      </div>

      <div className="flex flex-col items-center mb-4">
        <p className="text-coolOrange text-sm font-semibold underline">edit</p>
        <p className="text-coolBlack text-sm font-semibold my-5">Following:</p>
        <div className="flex items-center">
          <StorefrontOutline color="#5B8B76" height="28px" width="28px" />
          <p className="font-semibold text-coolBlack ml-3 text-sm">
            23 <span className="font-normal">stores</span>
          </p>
        </div>
      </div>

      <div className="h-[0.1rem] w-full border bg-borderColor"></div>
      <div className="flex flex-col items-center h-full mt-4">
        <Link href="/my-account/[username]" as="/my-account/nick">
          <a
            className={`${router.pathname === "/my-account/[username]" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 hover:text-gray-500 text-coolBlack`}
          >
            Dashboard
          </a>
        </Link>
        <Link href="/my-account/orders">
          <a
            className={`${router.pathname === "/my-account/orders" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 hover:text-gray-500 text-coolBlack`}
          >
            Orders
          </a>
        </Link>
        <Link href="/my-account/chat/nick">
          <a
            className={`${router.pathname === "/my-account/chat/[chatSlug]" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 hover:text-gray-500 text-coolBlack`}
          >
            Messages
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={`${router.pathname === "/my-account/account" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 hover:text-gray-500 text-coolBlack`}
          >
            Open a case
          </a>
        </Link>
        <Link href="/my-account/settings">
          <a
            className={`${router.pathname === "/my-account/settings" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 hover:text-gray-500 text-coolBlack`}
          >
            Your Account
          </a>
        </Link>

        <Link href="/">
          <a
            className={`${router.pathname === "/my-account/account" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 hover:text-gray-500 text-coolBlack`}
          >
            Sign out
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
