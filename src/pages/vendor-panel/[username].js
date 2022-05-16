import React from "react";
import LineChart from "../../components/Charts/LineChart";
import VendorLayout from "../../components/layout/VendorLayout";
import { feed, messages, newArrivals } from "../../data";
import Image from "next/image";
import SelectorIcon from "../../components/icons/SelectorIcon";

const VendorDashboard = () => {
  return (
    <VendorLayout>
      <div className="grid grid-cols-2 gap-4 pt-6 pb-10">
        <div className="shadow-lg rounded-lg p-4">
          <h2 className="text-coolDarkGreen mb-4 ml-2 font-semibold">
            Revenue
          </h2>
          <LineChart />
        </div>

        <div className="shadow-lg rounded-lg p-4 overflow-y-scroll">
          <h2 className="text-coolDarkGreen mb-4 font-semibold">
            Unshipped orders
          </h2>
          <table className="w-full mt-4">
            <thead>
              <tr className="text-left text-sm my-2">
                <th className="pb-1 font-semibold">
                  {" "}
                  <div className="flex items-center gap-2">
                    Item <SelectorIcon />
                  </div>
                </th>
                <th className="pb-1 font-semibold">
                  {" "}
                  <div className="flex items-center gap-2">
                    Purchase Date <SelectorIcon />
                  </div>
                </th>
                <th className="pb-1 font-semibold text-left">
                  {" "}
                  <div className="flex items-center gap-2">
                    Quanityt <SelectorIcon />
                  </div>
                </th>
                <th className="pb-1 text-left font-semibold">
                  <div className="flex items-center gap-2">
                    Preparing Time Left <SelectorIcon />
                  </div>
                </th>
                <th className="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-sm text-textColor pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-sm text-textColor pt-4">04/03/2022</td>
                <td className="text-sm text-textColor pt-4 text-left">1</td>
                <td className="text-sm text-textColor pt-4 text-left">
                  3 days
                </td>
                <td className="text-sm text-textColor pt-4">
                  <div className="flex justify-start items-center">
                    <div className="rounded-full text-white bg-coolDarkerGreen px-4 py-0.5 text-xs">
                      Ship
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="text-sm text-textColor pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-sm text-textColor pt-4">04/03/2022</td>
                <td className="text-sm text-textColor pt-4 text-left">1</td>
                <td className="text-sm text-textColor pt-4 text-left">1 day</td>
                <td className="text-sm text-textColor pt-4">
                  <div className="flex justify-start items-center">
                    <div className="rounded-full text-white bg-coolDarkerGreen px-4 py-0.5 text-xs">
                      Ship
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="text-sm text-textColor pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-sm text-textColor pt-4">04/03/2022</td>
                <td className="text-sm text-textColor pt-4 text-left">1</td>
                <td className="text-sm text-textColor pt-4 text-left">
                  4 days
                </td>
                <td className="text-sm text-textColor pt-4">
                  <div className="flex justify-start items-center">
                    <div className="rounded-full text-white bg-coolDarkerGreen px-4 py-0.5 text-xs mr-4">
                      Ship
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="text-sm text-textColor pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-sm text-textColor pt-4">04/03/2022</td>
                <td className="text-sm text-textColor pt-4 text-left">1</td>
                <td className="text-sm text-textColor pt-4 text-left">1 day</td>
                <td className="text-sm text-textColor pt-4">
                  <div className="flex justify-start items-center">
                    <div className="rounded-full text-white bg-coolDarkerGreen px-4 py-0.5 text-xs">
                      Ship
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="text-sm text-textColor pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-sm text-textColor pt-4">04/03/2022</td>
                <td className="text-sm text-textColor pt-4 text-left">1</td>
                <td className="text-sm text-textColor pt-4 text-left">
                  3 days
                </td>
                <td className="text-sm text-textColor pt-4">
                  <div className="flex justify-start items-center">
                    <div className="rounded-full text-white bg-coolDarkerGreen px-4 py-0.5 text-xs">
                      Ship
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="text-sm text-textColor pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-sm text-textColor pt-4">04/03/2022</td>
                <td className="text-sm text-textColor pt-4 text-left">1</td>
                <td className="text-sm text-textColor pt-4 text-left">
                  6 days
                </td>
                <td className="text-sm text-textColor pt-4">
                  <div className="flex justify-start items-center">
                    <div className="rounded-full text-white bg-coolDarkerGreen px-4 py-0.5 text-xs">
                      Ship
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="shadow-lg rounded-lg p-4 categories overflow-y-scroll">
          <h2 className="text-coolDarkGreen mb-4 font-semibold">
            Recent Sales
          </h2>
          <table className="w-full mt-4">
            <thead>
              <tr className="text-left text-sm my-2">
                <th className="pb-1 font-semibold">
                  <div className="flex items-center gap-2">
                    Item <SelectorIcon />
                  </div>
                </th>
                <th className="pb-1 font-semibold">
                  <div className="flex items-center gap-2">
                    Date Purchased <SelectorIcon />
                  </div>
                </th>
                <th className="pb-1 font-semibold">
                  <div className="flex items-center gap-2">
                    Quantity <SelectorIcon />
                  </div>
                </th>
                <th className="pb-1 font-semibold">
                  <div className="flex items-center gap-2">
                    Price <SelectorIcon />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className=" text-coolBlack pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-sm text-textColor pt-4">04/03/2022</td>
                <td className="text-sm text-textColor pt-4">1</td>
                <td className="text-sm text-textColor pt-4">$60</td>
              </tr>

              <tr>
                <td className=" text-coolBlack pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-sm text-textColor pt-4">04/03/2022</td>
                <td className="text-sm text-textColor pt-4">1</td>
                <td className="text-sm text-textColor pt-4">$60</td>
              </tr>

              <tr>
                <td className=" text-coolBlack pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-sm text-textColor pt-4">04/03/2022</td>
                <td className="text-sm text-textColor pt-4">1</td>
                <td className="text-sm text-textColor pt-4">$60</td>
              </tr>

              <tr>
                <td className=" text-coolBlack pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-sm text-textColor pt-4">04/03/2022</td>
                <td className="text-sm text-textColor pt-4">1</td>
                <td className="text-sm text-textColor pt-4">$60</td>
              </tr>

              <tr>
                <td className=" text-coolBlack pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-sm text-textColor pt-4">04/03/2022</td>
                <td className="text-sm text-textColor pt-4">1</td>
                <td className="text-sm text-textColor pt-4">$60</td>
              </tr>

              <tr>
                <td className=" text-coolBlack pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-sm text-textColor pt-4">04/03/2022</td>
                <td className="text-sm text-textColor pt-4">1</td>
                <td className="text-sm text-textColor pt-4">$60</td>
              </tr>

              <tr>
                <td className=" text-coolBlack pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-sm text-textColor pt-4">04/03/2022</td>
                <td className="text-sm text-textColor pt-4">1</td>
                <td className="text-sm text-textColor pt-4">$60</td>
              </tr>

              <tr>
                <td className=" text-coolBlack pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-sm text-textColor pt-4">04/03/2022</td>
                <td className="text-sm text-textColor pt-4">1</td>
                <td className="text-sm text-textColor pt-4">$60</td>
              </tr>

              <tr>
                <td className=" text-coolBlack pt-4">
                  <div className="flex items-center gap-3">
                    <div className="h-7 w-7 relative overflow-hidden rounded-full">
                      <img
                        src="https://images.pexels.com/photos/5478819/pexels-photo-5478819.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        alt=""
                        className="absolute "
                      />
                    </div>
                    Ribbed Vest
                  </div>
                </td>
                <td className="text-sm text-textColor pt-4">04/03/2022</td>
                <td className="text-sm text-textColor pt-4">1</td>
                <td className="text-sm text-textColor pt-4">$60</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="row-span-1 shadow-lg rounded-lg p-4 overflow-hidden pb-4">
          <h2 className="text-coolDarkGreen mb-3 font-semibold">Messages</h2>
          <div className="flex flex-col overflow-y-scroll categories justify-between h-full py-6">
            {messages.map((message) => (
              <div key={message.id} className="pb-4 flex items-center gap-3">
                <div className="h-14 w-14 rounded-full bg-gray-50 relative overflow-hidden">
                  <Image src={message.image} objectFit="cover" layout="fill" />
                </div>
                <div className="ml-5">
                  <h3 className="text-sm font-semibold">{message.user}</h3>
                  <h4 className="text-sm text-gray-500">{message.message}</h4>
                  <p className="text-xs text-gray-300 mt-1">
                    17:44 | 18.10.2021
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </VendorLayout>
  );
};

export default VendorDashboard;
