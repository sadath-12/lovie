import React from "react";
import {
  EarnedIcon,
  OrdersIcon,
  SalesIcon,
  StarIcon,
} from "../icons/VendorIcons";
import VendorBar from "../navigation/VendorBar/VendorBar";
import { CaretUp } from "react-ionicons";
import Footer from "../navigation/Footer";

const stats = [
  {
    id: 1,
    icon: <OrdersIcon />,
    metric: "32",
    decription: "Open orders",
    change: 2,
  },
  {
    id: 2,
    icon: <SalesIcon />,
    metric: "876",
    decription: "Sales this month",
    change: 3,
  },
  {
    id: 3,
    icon: <EarnedIcon />,
    metric: "$8456",
    decription: "Eearned this month",
    change: 4,
  },
];

const VendorLayout = ({ children }) => {
  return (
    <main className="flex min-h-screen">
      <VendorBar />
      <section className="py-6 px-10 w-full">
        <div className="flex items-stretch gap-10">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#337357] shadow-lg rounded-lg px-6 py-3 flex relative flex-1"
            >
              {stat.icon}
              <h2 className="text-3xl font-semibold text-white ml-4 flex items-center">
                {stat.metric}
                <span className="text-sm font-light ml-2 whitespace-nowrap">
                  {stat.decription}
                </span>
              </h2>
              <p className="text-sm font-medium text-[#17C925] ml-2 absolute right-6 bottom-2 flex items-center gap-1">
                <CaretUp height="16px" width="16px" color="#17C925" />{" "}
                {stat.change}%
              </p>
            </div>
          ))}
          <div className="bg-[#337357] rounded-lg px-8 py-3 flex items-center justify-between flex-1 shadow-lg">
            <div className="flex gap-2">
              {["", "", "", "", ""].map((item, index) => (
                <StarIcon key={index} />
              ))}
            </div>
            <h2 className="text-3xl font-semibold text-white ml-4 flex items-center">
              4.8
              <span className="text-sm truncate font-light ml-2">
                store reviews
              </span>
            </h2>
          </div>
        </div>
        {children}
        <div className="mt-20"></div>
        <Footer />
      </section>
    </main>
  );
};

export default VendorLayout;
