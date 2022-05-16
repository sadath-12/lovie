import React, { useState } from "react";
import { Checkmark } from "react-ionicons";
import { useRecoilState } from "recoil";
import { modalState, sellership } from "../../atoms/popup";
import SelectorIcon from "../../components/icons/SelectorIcon";
import VendorLayout from "../../components/layout/VendorLayout";
import OrderPopup from "../../components/popups/OrderPopup";
import SellerShip from "../../components/popups/SellerShip";

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
    quantity: 1,
    cost: "$60.32",
    status: "Preparing",
    name: "David Butler",
    address: "25 Regular Street, Realville, Warwickshire, UK",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ribbed Button",
    date: "07/03/2022",
    quantity: 1,
    cost: "$60.32",
    status: "Delivered",
    name: "David Butler",
    address: "25 Regular Street, Realville, Warwickshire, UK",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ribbed Button",
    date: "07/03/2022",
    quantity: 1,
    cost: "$60.32",
    status: "Shipped",
    name: "David Butler",
    address: "25 Regular Street, Realville, Warwickshire, UK",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ribbed Button",
    date: "07/03/2022",
    quantity: 1,
    cost: "$60.32",
    status: "Preparing",
    name: "David Butler",
    address: "25 Regular Street, Realville, Warwickshire, UK",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const orders = () => {
  const [selected, setSelected] = useState(1);
  const [open, setOpen] = useRecoilState(modalState)
  const handleOpen = () => {
    setOpen(true)
  }
  const [data, setData] = useRecoilState(sellership)

  const handleShip = () => {
    setData(true)
  }
  return (
    <VendorLayout>
      <OrderPopup />
      <SellerShip />
      <div className="mt-8">
        <button onClick={handleOpen} className="border-b-[3px] border-none py-3 bg-coolDarkerGreen rounded-md p-2 font-semibold text-white leading-none flex px-5 text-sm mb-4 w-[9.5rem]">
          Create an Order
        </button>
        <h1 className="text-2xl font-bold text-coolDarkerGreen">Orders</h1>
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
                    Quantity <SelectorIcon />{" "}
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                >
                  <div className="flex items-center gap-3">
                    Cost <SelectorIcon />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                >
                  <div className="flex items-center gap-3">
                    Name <SelectorIcon />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-coolDarkerGreen"
                >
                  <div className="flex items-center gap-3">
                    Address <SelectorIcon />
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
                  className="px-3 py-3.5 text-right text-sm font-semibold text-coolDarkerGreen"
                >
                  <div className="flex items-center gap-3">
                    Shipped <SelectorIcon />
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
                    <div className="text-gray-900">{order.quantity}</div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div className="text-gray-900">{order.cost}</div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div className="text-gray-900">{order.name}</div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div className="text-gray-900">{order.address}</div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <div className="text-gray-900">{order.status}</div>
                  </td>
                  <td className="whitespace-nowrap  mr-7 text-sm text-gray-500">
                    <div className=" px-3 py-4 flex items-center">
                      {order.status === "Preparing" ? (
                        <button onClick={handleShip} className="bg-coolDarkerGreen text-white rounded px-4 py-1 text-xs">
                          Ship
                        </button>
                      ) : (
                        <div className="p-1 rounded bg-coolOrange">
                          <Checkmark height="16px" width="16px" color="white" />
                        </div>
                      )}
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

export default orders;
