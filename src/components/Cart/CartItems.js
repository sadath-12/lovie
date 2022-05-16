import React, { useContext, useState } from "react";
import SuperTitle from "../Typography/SuperTitle";
import Heading from "../Typography/Heading";
import { ChevronBack, Close } from "react-ionicons";
import Image from "next/image";
import Button from "../inputs/Button";
import { Chat, Lock, Messenger, Van } from "../icons/SocialIcons";
import { useRouter } from "next/router";
import StarReviews from "../DataDisplay/StarReviews";
import { cartContextTwo } from "../../contexts/cartContextTwo";

const CartItems = ({ cartItems }) => {
  const router = useRouter();
  const [quantity, setQuantity] = useState(null);
  const { removeItemsFromCart, setCartItems, setTotal } = useContext(
    cartContextTwo
  );
  let total = cartItems
    .reduce((a, b) => a + b.price * b.options.quantity, 0)
    .toFixed(2);

  const proceedToCheckout = () => {
    setTotal(total);
    router.push("/checkout");
  };

  console.log(cartItems);

  return (
    <div className="mt-10">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-20 place-items-start">
        <div className="flex-1 w-full">
          {cartItems.map((item, index) => (
            <div key={item.id} className="col-span-2">
              {/* FIRST COLUMN */}
              <div>
                <div className="flex items-center justify-between">
                  <p className="uppercase flex items-center hover:bg-gray-50 transition duration-150 rounded-md text-coolBlack">
                    Cart
                    <span className="font-normal ml-1">
                      {index + 1} OF {cartItems.length}
                    </span>{" "}
                  </p>
                </div>

                <div className="flex items-start mt-16 mb-10">
                  <button
                    onClick={() => removeItemsFromCart(item.removeId)}
                    className="hover:bg-gray-50 transition duration-150 mr-2 px-4 py-4 rounded"
                  >
                    <Close />
                  </button>
                  <div className="relative h-[200px] lg:h-[305px] min-w-[110px] lg:min-w-[242px]">
                    <Image
                      src={item.supporting_images[0].url}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <div className="flex items-start justify-between w-full ml-4 lg:ml-10">
                    <div className="-mt-[3px]">
                      <SuperTitle size="text-md" text={item.store.store_name} />
                      <h3 className="text-[20px] lg:text-[26px] tracking-[-0.05em] font-medium antialiased">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-0.5 mb-2">
                        <StarReviews />
                        <p className="text-xs text-textColor">321 reviews</p>
                      </div>
                      <p className="font-semibold text-xl text-md">{`$${item.price}`}</p>
                      <div className="flex items-center gap-2 mt-1.5">
                        <p className="font-normal text-sm text-coolBlack">
                          Style: {item.options.style}
                        </p>
                        <p className="capitalize text-sm text-coolBlack">
                          Color: {item.options.colours}
                        </p>
                        <p className=" text-sm text-coolBlack">
                          Size: {item.options.sizes.toUpperCase()}
                        </p>
                        <p className=" text-sm text-coolBlack">
                          Quantity:{" "}
                          {quantity === null ? item.options.quantity : quantity}
                        </p>
                      </div>
                    </div>
                    <div className="items-end">
                      <div className="hidden lg:block">
                        <Chat size="35" />
                      </div>

                      <div className="flex items-center mt-12">
                        <select
                          onChange={(e) => setQuantity(e.target.value)}
                          className="border border-coolBlack mr-3"
                          defaultValue={item.quantity}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SECOND COLUMN */}
        <div className="flex-1 flex flex-col w-full lg:max-w-[25rem] border-t border-borderColor pt-4 md:pt-0 md:border-0">
          <div className="flex items-center justify-between">
            <Lock />
            <SuperTitle size="text-coolDarkGreen" text="Secure Payment" />
          </div>
          <div className="border-b border-coolBlack mt-10 pb-4 mb-4">
            <div className="flex justify-between items-center mb-2">
              <Heading h3 size="text-md" text="Item(s) total:" />
              <Heading h3 size="text-md" text={`$${total}`} />
            </div>
            <div className="flex justify-between items-center">
              <Heading h3 size="text-md" text="Shipping:" />
              <Heading h3 size="text-md" text={`$0.00`} />
            </div>
          </div>
          <h3 className="text-3xl text-right">{`TOTAL: $${total}`}</h3>
          <Button
            onClick={proceedToCheckout}
            margin="mt-8"
            color="bg-coolDarkGreen w-full text-xl"
            text="PROCEED TO CHECKOUT"
            padding="px-4 py-3"
          />
          <div>{/* <VisaIcon /> */}</div>
          <button className="flex items-center bg-coolDarkGreen rounded-md px-4 py-3 text-white text-xs mt-4 self-end">
            <div className="hidden lg:block">
              <Van />
            </div>

            <div className="flex flex-col ml-0 lg:ml-4">
              <span>WORLDWIDE RETURNS</span>
              <span className="self-start lg:self-end text-[0.7rem]">
                click here for more details
              </span>
            </div>
          </button>
          <button className="flex items-center bg-white border border-[#B7B7B7] rounded-md px-2 lg:px-4 py-1.5 lg:py-3 text-xs mt-4 self-end">
            <Messenger size="40" />
            <div className="flex flex-col ml-4 items-start">
              <span>Need help?</span>
              <span className="hidden lg:block self-end text-[0.7rem] text-gray-400 underline">
                Live chat or message us!
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* EMPTY CART ITEMS OR CONTINUE SHOPPING */}
      <button
        onClick={() => router.push("/")}
        className="bg-coolDarkGreen py-2 px-4 uppercase rounded-lg text-white text-sm flex items-center"
      >
        <ChevronBack color="white" height="18px" width="18px" />
        <span className="ml-2">Continue Shopping</span>
      </button>
      <button
        onClick={() => setCartItems([])}
        className="uppercase flex items-center hover:bg-gray-50 transition duration-150 rounded-md px-4 py-1 mt-6"
      >
        <Close /> <span className="ml-2">Empty Cart</span>
      </button>
    </div>
  );
};

export default CartItems;
