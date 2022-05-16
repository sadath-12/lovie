import React, { useState } from "react";
import { Checkmark } from "react-ionicons";
import SelectorIcon from "../../components/icons/SelectorIcon";
import { StarIcon } from "../../components/icons/VendorIcons";
import VendorLayout from "../../components/layout/VendorLayout";
import reviews from "./reviews";
import Link from 'next/link'
const tabs = [
    { id: 1, tab: "All" },
    { id: 2, tab: "Active" },
    { id: 3, tab: "Delivered" },
    { id: 4, tab: "Completed" },
    { id: 5, tab: "Cancelled" },
    { id: 6, tab: "Dispute" },
    { id: 7, tab: "Return & Exchange" },
];

const ordersArr = [
    {
        name: "Ribbed Button",
        date: "07/03/2022",
        stock: 10,
        cost: "$60.32",
        status: "Deleted",
        name: "Nike Shoes",
        sales: '123',
        address: "25 Regular Street, Realville, Warwickshire, UK",
        rating: '4.9',
        reviews: [
            { text: 'hello' },
            { text: 'hello' },
            { text: 'hello' },
        ],
        image:
            "https://images.unsplash.com/photo-1624006389438-c03488175975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80",
    },
    {
        name: "Ribbed Button",
        date: "07/03/2022",
        stock: 10,
        cost: "$60.32",
        status: "Suspended",
        name: "Nike Shoes",
        sales: '123',
        address: "25 Regular Street, Realville, Warwickshire, UK",
        rating: '4.9',
        reviews: [
            { text: 'hello' },
            { text: 'hello' },
            { text: 'hello' },
        ],
        image:
            "https://images.unsplash.com/photo-1624006389438-c03488175975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80",
    },
    {
        name: "Ribbed Button",
        date: "07/03/2022",
        stock: 10,
        cost: "$60.32",
        status: "Inactive",
        name: "Nike Shoes",
        sales: '123',
        address: "25 Regular Street, Realville, Warwickshire, UK",
        rating: '4.9',
        reviews: [
            { text: 'hello' },
            { text: 'hello' },
            { text: 'hello' },
        ],
        image:
            "https://images.unsplash.com/photo-1624006389438-c03488175975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80",
    },
    {
        name: "Ribbed Button",
        date: "07/03/2022",
        stock: 10,
        cost: "$60.32",
        status: "Active",
        name: "Nike Shoes",
        sales: '123',
        address: "25 Regular Street, Realville, Warwickshire, UK",
        rating: '4.9',
        reviews: [
            { text: 'hello' },
            { text: 'hello' },
            { text: 'hello' },
        ],
        image:
            "https://images.unsplash.com/photo-1624006389438-c03488175975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=832&q=80",
    },
];

const stars = ["1", "2", "3", "4", "5"];
const Products = () => {
    const [selected, setSelected] = useState(1);
    return (
        <VendorLayout>
            <div className="mt-8">
                <Link href='/vendor-panel/addProduct'>
                    <button className="border-b-[3px] border-none py-3 bg-coolDarkerGreen rounded-md p-2 font-semibold text-white leading-none flex px-5 text-sm mb-4 w-[9.5rem]">
                        Add a product
                    </button>
                </Link>
                <h1 className="text-2xl font-bold text-coolDarkerGreen">Current Products</h1>
                <div className="shadow-lg rounded-lg mt-4 pb-4">
                    <div className="bg-[#337357] rounded-t-lg px-5 py-5 flex gap-10 items-center justify-between">
                        {tabs.map((tab) => (
                            <button
                                onClick={() => setSelected(tab.id)}
                                key={tab.id}
                                className={`${tab.id === selected
                                    ? "border-b-[2px] border-white text-white"
                                    : "text-gray-200 border-b-[3px] border-none"
                                    } text-lg font-semibold text-white leading-none`}
                            >
                                {tab.tab}
                            </button>
                        ))}
                    </div>
                    <table className="min-w-full divide-y divide-gray-300 ">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className="py-3.5 pl-[21px] pr-3 text-left text-sm font-semibold text-coolDarkerGreen flex items-center gap-2"
                                >
                                    <div className="flex items-center gap-3">
                                        Item <SelectorIcon />
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen "
                                >
                                    <div className="flex items-center gap-3">
                                        Date <SelectorIcon />
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                                >
                                    <div className="flex items-center gap-3">
                                        Stock <SelectorIcon />{" "}
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                                >
                                    <div className="flex items-center gap-3">
                                        Price <SelectorIcon />
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                                >
                                    <div className="flex items-center gap-3">
                                        Sales <SelectorIcon />
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                                >
                                    <div className="flex items-center gap-3">
                                        Status <SelectorIcon />
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                                >
                                    <div className="flex items-center gap-3">
                                        Reviews <SelectorIcon />
                                    </div>
                                </th>
                                <th
                                    scope="col"
                                    className="px-3 py-3.5 text-right text-sm font-semibold text-coolDarkerGreen"
                                >
                                    <div className="flex items-center gap-3">
                                        Edit <SelectorIcon />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className=" bg-white">
                            {ordersArr.map((order, index) => (
                                <tr key={index}>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                        <div className="flex items-center">
                                            <div className="h-10 w-10 flex-shrink-0">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    src={order.image}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="ml-4">
                                                <div className="font-medium text-gray-900">
                                                    {order.name}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <div className="text-gray-900">{order.date}</div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <div className="text-gray-900">{order.stock}</div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <div className="text-gray-900">{order.cost}</div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <div className="text-gray-900">{order.sales}</div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <div className="text-gray-900 flex items-center space-x-1">{stars.map((item) => (
                                            <StarIcon size color="#E66B3C" />
                                        ))}<span className="pl-2">{order.rating}</span><span className="border-l pl-2">{order.reviews.length}reviews</span></div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                        <div className="text-gray-900">{order.status}</div>
                                    </td>
                                    <td className="whitespace-nowrap  mr-7 text-sm text-gray-500">
                                        <div className=" px-3 py-4 flex items-center">

                                            <button className="bg-coolDarkerGreen text-white rounded px-4 py-1 text-xs">
                                                Edit
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </VendorLayout>
    );
};

export default Products;
