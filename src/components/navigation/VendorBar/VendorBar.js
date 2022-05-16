import React from "react";
import Logo from "../../utils/Logo";
import Image from "next/image";
import Link from "next/link";
import { StorefrontOutline, PersonOutline } from "react-ionicons";
import { useRouter } from "next/router";

const VendorBar = () => {
  const router = useRouter();
  return (
    <div className="sticky inset-0 left-0 h-screen min-w-[20rem] bg-gray-50 px-14 flex flex-col items-center py-6 z-50 overflow-y-scroll categories">
      <Link href="/">
        <a>
          <Logo size="80" />
        </a>
      </Link>
      <div className="mt-4 text-center">
        <p className="text-coolDarkerGreen">Welcome back</p>
        <h1 className="text-coolDarkerGreen text-3xl font-bold">Cloth</h1>
      </div>

      <div className="relative mt-5 mb-1">
        <div className="relative rounded-full h-24 w-24  overflow-hidden">
          <Image src="/man-tennis-court.jpg" objectFit="cover" layout="fill" />
        </div>
        <div className="h-5 w-5 absolute bottom-0 right-2 bg-coolDarkerGreen rounded-full"></div>
      </div>

      <div className="flex flex-col items-center mb-4">
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
        <Link href="/vendor-panel/[username]" as="/vendor-panel/nick">
          <a
            className={`${router.pathname === "/vendor-panel/[username]" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 hover:text-gray-500 text-coolBlack`}
          >
            Dashboard
          </a>
        </Link>
        <Link href="/vendor-panel/chat/[username]" as="/vendor-panel/chat/nick">
          <a
            className={`${router.pathname === "/vendor-panel/messages" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 hover:text-gray-500 text-coolBlack`}
          >
            Messages
          </a>
        </Link>
        <Link href="/vendor-panel/orders">
          <a
            className={`${router.pathname === "/vendor-panel/orders" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 hover:text-gray-500 text-coolBlack`}
          >
            Orders
          </a>
        </Link>
        <Link href="/vendor-panel/products">
          <a
            className={`${router.pathname === "/vendor-panel/products" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 hover:text-gray-500 text-coolBlack`}
          >
            Products
          </a>
        </Link>
        <Link href="/vendor-panel/inventory">
          <a
            className={`${router.pathname === "/vendor-panel/inventory" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 hover:text-gray-500 text-coolBlack`}
          >
            Inventory
          </a>
        </Link>
        <Link href="/vendor-panel/reviews">
          <a
            className={`${router.pathname === "/vendor-panel/reviews" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 hover:text-gray-500 text-coolBlack`}
          >
            Reviews
          </a>
        </Link>
        <Link href="/vendor-panel/finance">
          <a
            className={`${router.pathname === "/vendor-panel/finance" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 hover:text-gray-500 text-coolBlack`}
          >
            Finance
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={`${router.pathname === "/contact" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 hover:text-gray-500 text-coolBlack`}
          >
            Open a case
          </a>
        </Link>
        <Link href="/vendor-panel/settings">
          <a
            className={`${router.pathname === "/contact" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } mb-5 hover:text-gray-500 text-coolBlack`}
          >
            Store Settings
          </a>
        </Link>
        <Link href="/">
          <a
            className={`${router.pathname === "/" &&
              "border-b-[3px] border-coolBlack font-semibold pb-1"
              } hover:text-gray-500 text-coolBlack`}
          >
            Sign out
          </a>
        </Link>
      </div>
    </div>
  );
};

export default VendorBar;
