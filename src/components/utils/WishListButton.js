import React, { useContext, useEffect, useState } from "react";
import { Heart, HeartOutline } from "react-ionicons";
import { wishlistContext } from "../../contexts/wishlistContext";
import { setToStorage } from "../../functions/setToStorage";

const WishListButton = ({ item }) => {
  const {
    addItemsToWishList,
    wishListItems,
    removeItemsFromWishList,
  } = useContext(wishlistContext);
  const [iconCheck, setIconCheck] = useState(false);

  const handleWishList = (newItem) => {
    const check = wishListItems.some((item) => item.id === newItem.id);
    if (check) {
      removeItemsFromWishList(newItem);
    } else {
      addItemsToWishList(newItem);
    }
  };

  useEffect(() => {
    const filtered = wishListItems.some((i) => i.id === item.id);
    if (filtered === true) {
      setIconCheck(true);
    } else {
      setIconCheck(false);
    }
  }, [wishListItems]);

  return (
    <button
      onClick={() => handleWishList(item)}
      className="opacity-0 absolute top-2 right-2 group-hover:opacity-100 transition duration-200 z-20"
    >
      {iconCheck ? (
        <Heart height="30px" width="30px" color="white" />
      ) : (
        <HeartOutline height="30px" width="30px" color="white" />
      )}
    </button>
  );
};

export default WishListButton;
