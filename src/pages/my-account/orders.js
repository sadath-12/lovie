import React, { useState } from "react";
import AppLayout from "../../components/layout/AppLayout";
import Image from "next/image";
import { Chat } from "../../components/icons/SocialIcons";
import { ChevronDown } from "react-ionicons";
import SearchIcon from "../../components/icons/SearchIcon";
import StarReviews from "../../components/DataDisplay/StarReviews";
import Paragraph from "../../components/Typography/Paragraph";
import Link from "next/link";
import BuyerOrderPopups from "../../components/popups/BuyerOrderPopups";
import ReviewPopup from "../../components/popups/ReviewPopup";
import { useRecoilState } from "recoil";
import { OrderPopup, reviewPopup } from "../../atoms/popup";

const ordersArr = [
  {
    number: "4376",
    status: "Delivered on January 22, 2021",
    href: "#",
    invoiceHref: "#",
    status: "preparing",
    products: [
      {
        id: 1,
        name: "Machined Brass Puzzle",
        href: "#",
        price: "$95.00",
        color: "Brass",
        store: "Cloth",
        size: '3" x 3" x 3"',
        imageSrc: "/woman-sport.jpg",
        imageAlt:
          "Brass puzzle in the shape of a jack with overlapping rounded posts.",
      },
      {
        id: 2,
        name: "Machined Brass Puzzle",
        href: "#",
        price: "$95.00",
        color: "Brass",
        store: "Cloth",
        size: '3" x 3" x 3"',
        imageSrc: "/pink-box.jpg",
        imageAlt:
          "Brass puzzle in the shape of a jack with overlapping rounded posts.",
      },
      // More products...
    ],
  },
  {
    number: "4376",
    status: "Delivered on January 22, 2021",
    href: "#",
    invoiceHref: "#",
    status: "delivered",
    products: [
      {
        id: 1,
        name: "Machined Brass Puzzle",
        href: "#",
        price: "$95.00",
        color: "Brass",
        store: "Cloth",
        size: '3" x 3" x 3"',
        imageSrc: "/man-tennis-court.jpg",
        imageAlt:
          "Brass puzzle in the shape of a jack with overlapping rounded posts.",
      },
      {
        id: 2,
        name: "Machined Brass Puzzle",
        href: "#",
        price: "$95.00",
        color: "Brass",
        store: "Cloth",
        size: '3" x 3" x 3"',
        imageSrc: "/woman-dress.jpg",
        imageAlt:
          "Brass puzzle in the shape of a jack with overlapping rounded posts.",
      },
      // More products...
    ],
  },
  {
    number: "4376",
    status: "Delivered on January 22, 2021",
    href: "#",
    invoiceHref: "#",
    status: "shipped",
    products: [
      {
        id: 1,
        name: "Machined Brass Puzzle",
        href: "#",
        price: "$95.00",
        color: "Brass",
        store: "Cloth",
        size: '3" x 3" x 3"',
        imageSrc: "/man-tennis-court.jpg",
        imageAlt:
          "Brass puzzle in the shape of a jack with overlapping rounded posts.",
      },
      {
        id: 2,
        name: "Machined Brass Puzzle",
        href: "#",
        price: "$95.00",
        color: "Brass",
        store: "Cloth",
        size: '3" x 3" x 3"',
        imageSrc: "/woman-dress.jpg",
        imageAlt:
          "Brass puzzle in the shape of a jack with overlapping rounded posts.",
      },
      // More products...
    ],
  },
];

const orders = ({ items }) => {
  const [searchValue, setSearchValue] = useState("Search your orders");
  const [open, setOpen] = useRecoilState(OrderPopup);
  const [reviewOpen, setReviewOpen] = useRecoilState(reviewPopup);

  const handleCancel = () => {
    setOpen({ ...open, show: true, type: 'BuyerCancelOrder' })
  }
  const handleConfirm = () => {
    setOpen({ ...open, show: true, type: 'confirmOrder' })
  }
  const handleWriteReview = () => {
    setReviewOpen(true)
  }
  return (
    <AppLayout>
      <BuyerOrderPopups />
      <ReviewPopup />
      <div className="flex flex-col mt-6">
        <h1 className="text-4xl text-center font-semibold text-coolDarkerGreen">
          Your Orders
        </h1>
        {/* ITEMS */}
        <div className="rounded-lg shadow-xl bg-white py-20 px-8 mt-10">
          <div className="max-w-5xl mx-auto">
            <div>
              <div className="mb-10 flex items-center gap-14">
                <div className="border border-coolDarkerGreen rounded-md px-2 py-1.5 flex items-center justify-start">
                  LAST THREE MONTHS{" "}
                  <div className="border-l border-coolDarkerGreen ml-8 pl-2">
                    <ChevronDown />
                  </div>
                </div>
                <div className="border-[3px] py-[0.4rem] px-2 lg:w-[20rem] rounded-full border-coolBlack flex items-center justify-center focus:outline-none group w-full relative">
                  <div className="mr-auto ml-2.5 absolute left-2 z-10 bg-white">
                    <SearchIcon size />
                  </div>
                  <input
                    onFocus={() => setSearchValue("")}
                    onBlur={() => setSearchValue("Search Stores")}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className=" text-center  px-2 lg:w-[26rem] border-coolBlack flex items-center justify-center focus:outline-none group w-full self-center transition duration-150 font-semibold uppercase"
                    defaultValue={searchValue}
                    value={searchValue}
                  />
                </div>
              </div>
              {ordersArr.map((order, index) => (
                <section
                  key={order.number}
                  aria-labelledby={`${order.number}-heading`}
                  className={`${index === 0 ? "mt-0" : "mt-36"} `}
                >
                  <div className="flex items-center justify-between">
                    <h2 className="uppercase text-sm font-semibold text-gray-900 md:flex-shrink-0">
                      Order placed:{" "}
                      <span className="font-normal">18.10.2022</span>
                    </h2>

                    <h2
                      id={`${order.number}-heading`}
                      className="uppercase text-sm font-semibold text-gray-900 md:flex-shrink-0"
                    >
                      Order total: <span className="font-normal">$1246.00</span>
                    </h2>

                    <h2
                      id={`${order.number}-heading`}
                      className="uppercase text-sm font-semibold text-gray-900 md:flex-shrink-0"
                    >
                      Order number:{" "}
                      <span className="font-normal">#{order.number}</span>
                    </h2>
                  </div>

                  <div className="mt-6 -mb-6 flow-root ">
                    <div className="flex justify-between items-start gap-3 mt-4 border-b border-gray-200 pb-6">
                      {order.status === "preparing" && (
                        <>
                          <p className="text-sm font-semibold text-gray-900">
                            STATUS:
                            <span className="ml-1 font-normal">
                              {order.status}
                            </span>
                          </p>
                          <p className="text-sm font-semibold text-gray-900 -ml-[4.6rem]">
                            TIMELINE:
                            <span className="ml-1 font-normal">
                              3-7 business days
                            </span>
                          </p>
                          <div className="flex items-center gap-2 flex-col"></div>
                        </>
                      )}

                      {order.status === "shipped" && (
                        <>
                          <p className="text-sm font-semibold text-gray-900">
                            STATUS:
                            <span className="ml-1 font-normal">
                              {order.status}
                            </span>
                          </p>
                          <p className="font-semibold ml-[10.6rem]">
                            Est.delivery:{" "}
                            <span className="font-normal">
                              17-17 February 2022
                            </span>
                          </p>
                          <div className="flex items-center gap-2 flex-col">
                            <Link href={`/my-account/track-order/#455633567744`} >
                              <a className="text-xs uppercase bg-coolDarkGreen rounded-lg text-white px-6 py-1"> Track your order</a>
                            </Link>
                            <button
                              type="button"
                              className="text-xs uppercase bg-coolDarkGreen rounded-lg text-white px-6 py-1"
                            >
                              Any problems?
                            </button>
                          </div>
                        </>
                      )}
                      {order.status === "delivered" && (
                        <>
                          <p className="text-sm font-semibold text-gray-900">
                            STATUS:
                            <span className="ml-1 font-normal">
                              {order.status}
                            </span>
                          </p>
                          <button onClick={handleConfirm} className="text-xs uppercase bg-coolDarkGreen rounded-lg text-white px-6 py-1 inline ml-16">
                            Confirm Your Purchase
                          </button>
                          <div className="flex items-center gap-2 flex-col">
                            <Link href={`/my-account/track-order/455633567744`} >
                              <a className="text-xs uppercase bg-coolDarkGreen rounded-lg text-white px-6 py-1"> Track your order</a>
                            </Link>
                            <button
                              type="button"
                              className="text-xs uppercase bg-coolDarkGreen rounded-lg text-white px-6 py-1"
                            >
                              Any problems?
                            </button>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="mt-6 ">
                      <h3 className="uppercase font-semibold tracking-tight">
                        Your Items
                      </h3>
                    </div>

                    {order.products.map((product) => (
                      <div
                        key={product.id}
                        className="py-6 flex items-start justify-start"
                      >
                        <Link
                          href="/categories/[sub]/[slug]"
                          as={`/categories/${items[0].sub.slug}/${items[0].slug}`}
                        >
                          <a>
                            <div className="relative aspect-3/9 overflow-hidden h-[14rem] w-[10rem]">
                              <Image
                                src={product.imageSrc}
                                objectFit="cover"
                                layout="fill"
                              />
                            </div>
                          </a>
                        </Link>
                        <div className="ml-8">
                          <Link
                            href="/sellers/[slug]"
                            as={`/sellers/${items[0].store.slug}`}
                          >
                            <a className="text-md uppercase text-textColor">
                              {product.store}
                            </a>
                          </Link>
                          <h3 className="text-lg font-medium leading-none text-gray-900 mt-1.5">
                            <Link
                              href="/categories/[sub]/[slug]"
                              as={`/categories/${items[0].sub.slug}/${items[0].slug}`}
                            >
                              <a>{product.name}</a>
                            </Link>
                          </h3>
                          <div className="flex md:items-center flex-row sm:flex-col md:flex-row mt-1.5">
                            <StarReviews />
                            <Paragraph
                              margin="ml-2 mt-0.5 sm:ml-0 md:ml-2"
                              text="387 reviews"
                              size="text-[0.7rem]"
                            />
                          </div>
                          <h3 className="text-md uppercase mt-1.5 text-coolBlack ">
                            {product.price}
                          </h3>
                          <div className="flex items-center gap-3 mt-1.5">
                            <p className="text-sm text-coolBlack">
                              Style: Cotton
                            </p>
                            <p className="text-sm text-coolBlack">
                              Color: Green
                            </p>
                            <p className="text-sm text-coolBlack">Size: XL</p>
                            <p className="text-sm text-coolBlack">
                              Quantity: 1
                            </p>
                          </div>
                          <button
                            onClick={order.status === "preparing" ? handleCancel : handleWriteReview}
                            type="button"
                            className="bg-coolDarkGreen py-1.5 px-10 rounded-lg shadow-sm text-xs font-medium text-white uppercase mt-6"
                          >
                            {order.status === "preparing"
                              ? "Cancel this order"
                              : "Write a review"}
                          </button>
                        </div>

                        <div className="flex flex-col items-end ml-auto">
                          <Chat size="40" />
                          <p className="text-md font-semibold text-gray-900 mt-5">
                            Subtotal: <span>{product.price}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                    <div className="w-full flex flex-col items-end mt-10">
                      <div className="w-[52rem] border-t border-gray-200 pt-8 flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-sm">Deliver to:</p>
                          <p className="text-sm">25 Jamway Road</p>
                          <p className="text-sm">Twealsdon</p>
                          <p className="text-sm">Convetry</p>
                          <p className="text-sm">United Kingdom</p>
                          <p className="text-sm">CV1 2345</p>
                        </div>
                        <p className="font-semibold text-lg uppercase">
                          Order total:$120.00
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default orders;

export async function getStaticProps() {
  const api = process.env.NEXT_PUBLIC_API;

  const res = await fetch(`${api}/items`);
  const data = await res.json();

  return {
    props: { items: data },
  };
}
