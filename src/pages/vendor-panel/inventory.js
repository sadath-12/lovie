import Image from "next/image";
import React from "react";
import VendorLayout from "../../components/layout/VendorLayout";
import PieChart from "../../components/Charts/PieChart";
import InventoryTable from "../../components/DataDisplay/InventoryTable";
import SelectorIcon from "../../components/icons/SelectorIcon";

const inventoryArr = [
  {
    item: "Ribbed Button",
    inStock: 33,
    cost: "$110.00",
    sold: 15,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    item: "Ribbed Button",
    inStock: 33,
    cost: "$110.00",
    sold: 15,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    item: "Ribbed Button",
    inStock: 33,
    cost: "$110.00",
    sold: 15,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    item: "Ribbed Button",
    inStock: 33,
    cost: "$110.00",
    sold: 15,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    item: "Ribbed Button",
    inStock: 33,
    cost: "$110.00",
    sold: 15,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    item: "Ribbed Button",
    inStock: 33,
    cost: "$110.00",
    sold: 15,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    item: "Ribbed Button",
    inStock: 33,
    cost: "$110.00",
    sold: 15,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    item: "Ribbed Button",
    inStock: 33,
    cost: "$110.00",
    sold: 15,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    item: "Ribbed Button",
    inStock: 33,
    cost: "$110.00",
    sold: 15,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    item: "Ribbed Button",
    inStock: 33,
    cost: "$110.00",
    sold: 15,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    item: "Ribbed Button",
    inStock: 33,
    cost: "$110.00",
    sold: 15,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const inventory = () => {
  return (
    <VendorLayout>
      <div className="flex flex-col mt-10">
        <h1 className="text-2xl font-bold text-coolDarkerGreen">Inventory</h1>
        <div className="flex gap-10 intems-center mt-4">
          <p className="bg-coolDarkerGreen rounded-md px-4 py-2 text-white font-medium text-sm">
            Send New Invetory
          </p>
          <p className="bg-coolDarkerGreen rounded-md px-4 py-2 text-white font-medium text-sm">
            Arrange Shipping-back
          </p>
        </div>
        <div className="flex h-[38.2rem] gap-4">
          <div className="flex-1 rounded-lg overflow-y-scroll shadow-xl py-8 px-8 mt-3 categories">
            <h1 className="text-lg text-coolDarkerGreen font-medium">Stock</h1>
            <table className="min-w-full divide-y divide-gray-300 ">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pr-3 text-left text-sm font-bold text-coolDarkerGreen"
                  >
                    <div className="flex items-center gap-2">
                      Item <SelectorIcon />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-bold text-coolDarkerGreen"
                  >
                    <div className="flex items-center gap-2">
                      Date <SelectorIcon />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-bold text-coolDarkerGreen"
                  >
                    <div className="flex items-center gap-2">
                      Price <SelectorIcon />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 text-sm font-bold text-coolDarkerGreen text-left pr-3"
                  >
                    <div className="flex items-center gap-2">
                      Sales <SelectorIcon />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 text-sm font-bold text-coolDarkerGreen text-left"
                  >
                    <div className="flex items-center gap-2">
                      Inventory Usage <SelectorIcon />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {inventoryArr.map((inventory, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pr-3 text-sm">
                      <div className="flex items-center">
                        <div className="h-10 w-10 flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={inventory.image}
                            alt=""
                          />
                        </div>
                        <div className="ml-4">
                          <div className="font-medium text-gray-900">
                            {inventory.item}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="text-gray-900">{inventory.inStock}</div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="text-gray-900">{inventory.cost}</div>
                    </td>
                    <td className="whitespace-nowrap text-left py-4 text-sm text-gray-500">
                      <div className="text-gray-900">{inventory.sold}</div>
                    </td>
                    <td className="whitespace-nowrap text-left py-4 text-sm text-gray-500">
                      <div className="text-gray-900">40</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex-1">
            <div className="rounded-lg shadow-xl bg-white px-8 mt-10 pb-6">
              <h1 className="text-lg text-coolDarkGreen font-medium pb-4">
                Inventory Summary
              </h1>
              <div></div>
              <button className="bg-coolDarkerGreen rounded-lg text-sm px-4 py-2 mt-4 text-white">
                1000 Units
              </button>
              <button className="bg-coolDarkerGreen rounded-lg text-sm px-4 py-2 mt-4 text-white ml-6">
                Apply for More Units
              </button>
              <div className="flex w-full mt-7">
                <div className="bg-coolDarkerGreen py-10 w-[70%] text-white flex items-center justify-center text-sm rounded-l-lg">
                  750 units left
                </div>
                <div className="bg-gray-300 py-10 w-[30%] flex items-center justify-center text-sm rounded-r-lg">
                  250 units used
                </div>
              </div>
              {/* <p className="text-base text-coolBlack font-bold pb-4">
                Total Units Sold: 1000 Units
              </p>
              <div className="flex items-center gap-10">
                <div className="flex-1 mt-4">
                  <PieChart />
                  <button className="bg-coolDarkerGreen rounded-lg text-sm px-4 py-2 mt-4 text-white ml-6">
                    Apply for More Units
                  </button>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-coolBlack font-bold pb-4">
                    Usage Breakdown
                  </p>
                  <InventoryTable />
                </div>
              </div> */}
            </div>
            <div className="rounded-lg shadow-xl bg-white py-8 px-8 mt-10">
              <h1 className="text-lg text-coolDarkerGreen font-medium mb-4">
                Updates
              </h1>
              <div className="flex items-center">
                <div className="h-[5rem] w-[4rem] relative">
                  <Image
                    src="/woman-dress.jpg"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
                <p className="ml-8 text-coolDarkerGreen">
                  05.03.2022 : Boot Cut Jeans - requires restock{" "}
                </p>
              </div>
              <div className="mt-4 flex items-center">
                <div className="h-[5rem] w-[4rem] relative">
                  <Image
                    src="/woman-sport.jpg"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
                <p className="ml-8">
                  03.03.2022 : Black Hat - Restocked 03.03.2022{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </VendorLayout>
  );
};

export default inventory;
