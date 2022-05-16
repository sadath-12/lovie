import React, { useContext, useEffect, useState } from "react";
import { ArrowForward, LogInOutline } from "react-ionicons";
import Link from "next/link";
import {
  NavCartIcon,
  NavHeartIcon,
  NavChatIcon,
  NavLogInIcon,
} from "../../icons/NavIcons";
import { getFromStorage } from "../../../functions/getFromStorage";
import { cartContext } from "../../../contexts/cartContext";
import { wishlistContext } from "../../../contexts/wishlistContext";
import { cartContextTwo } from "../../../contexts/cartContextTwo";

const navbarItems = [
  {
    id: 2,
    path: "/cart",
    text: "cart",
    icon: <NavCartIcon />,
  },
  {
    id: 3,
    path: "/wishlist",
    text: "whishlist",
    icon: <NavHeartIcon height="24px" width="24px" />,
  },
  {
    id: 4,
    path: "/chat",
    text: "messages",
    icon: <NavChatIcon height="24px" width="24px" />,
  },
];

const NavbarItems = () => {
  const { cartItems } = useContext(cartContextTwo);
  const { wishListItems } = useContext(wishlistContext);
  // const [wishListItems, setWishListItems] = useState([]);

  // useEffect(() => {
  //   const items = window.localStorage.getItem("wishlist");
  //   if (items !== "") {
  //     const parsedItems = JSON.parse(items);
  //     setWishListItems(parsedItems);
  //   }
  // }, []);
  return (
    <div className="flex items-center justify-between gap-2 lg:ml-0 ml-auto">
      <Link href="/auth/signin">
        <a className="rounded-full border-[3px] border-coolBlack h-[3rem] w-[3rem] flex items-center justify-center hover:bg-coolBlack transition duration-200 group">
          <span className="group-hover:hidden -ml-4">
            <NavLogInIcon />
          </span>
          <span className="text-[0.5rem] hidden group-hover:block text-white">
            log in
          </span>
        </a>
      </Link>
      {navbarItems.map((item) => (
        <Link key={item.id} href={item.path}>
          <a className="rounded-full border-[3px] border-coolBlack h-[3rem] w-[3rem] flex items-center justify-center hover:bg-coolBlack transition duration-200 group relative">
            <span className="group-hover:hidden">{item.icon}</span>
            <span className="text-[0.5rem] hidden group-hover:block text-white">
              {item.text}
            </span>
            {cartItems.length !== 0 && item.path === "/cart" && (
              <span className="bg-coolDarkGreen rounded-full h-5 w-5 text-white flex items-center justify-center text-xs absolute -top-2 -right-1">
                {cartItems.length}
              </span>
            )}
            {wishListItems.length !== 0 && item.path === "/wishlist" && (
              <span className="bg-coolDarkGreen rounded-full h-5 w-5 text-white flex items-center justify-center text-xs absolute -top-2 -right-1">
                {wishListItems.length}
              </span>
            )}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default NavbarItems;
