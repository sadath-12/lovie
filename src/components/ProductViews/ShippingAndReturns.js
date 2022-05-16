import React, { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "react-ionicons";

const ShippingAndReturns = () => {
  const [open, setOpen] = useState(false);
  const returnsRef = useRef();
  return (
    <div className="relative">
      <div className="flex items-start gap-4 pb-10 ">
        <div className="flex-1">
          <h3 className="font-semibold text-xl text-gray-500 inline truncate">
            Shipping
          </h3>
          <div className="mt-10">
            <p className="font-semibold text-coolOrange mb-2">Free shipping</p>
            <p className="text-gray-500 mb-2 text-sm">
              1-3 business days to prepare
            </p>
            <p className="text-gray-500 text-sm">
              Estimated delivery 12th-17th Feb 2022
            </p>
          </div>
        </div>
        <div
          ref={returnsRef}
          className={`flex-1 ${
            open ? "h-[32rem] overflow-y-scroll" : "h-[12rem]"
          }   overflow-hidden relative shipping`}
        >
          <h3 className="font-semibold text-xl text-gray-500 inline">
            Return & Exchange
          </h3>
          <div className="mt-10">
            <p className="font-semibold text-md text-coolOrange mb-2">
              Accept returns but no exchange
            </p>
            <p className="text-sm mt-2 text-gray-500">
              Request order cancelation before order status becoming “shipped”.{" "}
              <br /> <br /> 7 days to request returns/exchanges/refund after
              delivery. <br /> <br /> 7 days to ship the item out from the
              shipping-back label issued.
            </p>
            <p className="font-semibold text-gray-500 mb-2 mt-6">
              Shipping cost of your returns/exchanges will be paid by the
              customer.
            </p>
            <p className="text-sm text-gray-500">(Exception may apply)</p>
            <p className="font-semibold text-gray-500 mb-2 mt-6">
              What items can not be returned/exchanged?
            </p>
            <p className="text-sm text-gray-500">
              Not in the new and unused conditions <br />
              Custom orders <br />
              Perishable products (like food) <br />
              Digital products <br />
              Items on sale <br />
              Intimate items (for health reason)
            </p>
            <p className="font-semibold text-gray-500 mb-2 mt-6">
              How to ask for a return/exchange/refund?
            </p>
            <p className="text-sm text-gray-500">
              Please open a case in your account, then the customer
              representative would guide you through.
            </p>
            <p className="font-semibold text-gray-500 mb-2 mt-6">
              Other details
            </p>
            <p className="text-sm text-gray-500">
              If the real products you received is a bit different from the one
              listed on LOVIE AURORA. This is normal situation. We take great
              care when we display our products to show them in the best
              possible conditions, so they appear as close as can be to their
              real look. That being said, colours are displayed differently
              depending on computer screens. Therefore, it is possible that the
              real colour be a little different than what you see online.
            </p>
            <p className="mt-6 text-sm text-gray-500">
              If you are not be satisfied with your purchase, we will refund
              you. Our main objective is you satisfaction so we won't make
              difficulties. To get a refund, to exchange the product, the
              product purchased must be new and unused (in other words, we need
              to be able to sell it).
            </p>
            <p className="mt-6 text-sm text-gray-500">
              If you return an item, the shipping fees to send the item back to
              us is yours to pay. We'll gladly pay for shipping the
              repaired/replacement product back to you.
            </p>
            <p className="mt-6 text-sm text-gray-500">
              If you return an item that is lost during shipping, we can not be
              held responsible. Shipping must always include insurance and a
              tracking number.
            </p>
            <p className="mt-6 text-sm text-gray-500">
              If you receive an item that is damaged, please take a picture of
              it in its actual state so we can make a claim to the Post.
            </p>
            <p className="mt-6 text-sm text-gray-500">
              If you order a custom product, it is considered a final sail. No
              refund or exchange is possible.
            </p>
          </div>
          <div className="bg-gradient-to-t from-white w-full h-6 bottom-0 absolute"></div>
        </div>
        {open ? (
          <button
            onClick={() => {
              setOpen(false);
              returnsRef.current.scrollTop = 0;
            }}
            className="absolute right-[9.2rem] -bottom-0"
          >
            <ChevronUp />
          </button>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="absolute right-[9.2rem] -bottom-0"
          >
            <ChevronDown />
          </button>
        )}
      </div>
    </div>
  );
};

export default ShippingAndReturns;
