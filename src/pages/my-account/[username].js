import React from "react";
import AppLayout from "../../components/layout/AppLayout";
import Card from "../../components/DataDisplay/Card";
import { feed, messages, newArrivals } from "../../data";
import Image from "next/image";
import CarouselSmall from "../../components/DataDisplay/CarouselSmall";
import SelectorIcon from "../../components/icons/SelectorIcon";

const MyAccount = ({ items }) => {
  return (
    <AppLayout>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full  pb-10">
        <div className="row-span-1">
          <Card light title="Orders">
            <div className="flex flex-col overflow-y-scroll categories justify-between h-full mt-8 py-6">
              <table>
                <thead>
                  <tr className="text-left text-sm my-2">
                    <th className="font-semibold">
                      <div className="flex items-center gap-2">
                        Item <SelectorIcon />
                      </div>
                    </th>
                    <th className="font-semibold">
                      <div className="flex items-center gap-2">
                        Date <SelectorIcon />
                      </div>
                    </th>
                    <th className="font-semibold text-left">
                      <div className="flex items-center gap-2">
                        Order ID <SelectorIcon />
                      </div>
                    </th>
                    <th className="text-left font-semibold">
                      <div className="flex items-center gap-2">
                        Status <SelectorIcon />
                      </div>
                    </th>
                    <th className="sr-only">asd</th>
                  </tr>
                </thead>
                <tbody>
                  {feed.map((item, i) => (
                    <tr key={item.id}>
                      <td className="py-2">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-gray-50 relative overflow-hidden">
                            <Image
                              src={item.image}
                              objectFit="cover"
                              layout="fill"
                            />
                          </div>
                          <span className="font-semibold text-xs">
                            {item.item}
                          </span>
                        </div>
                      </td>
                      <td className="text-sm text-textColor">04/03/2022</td>
                      <td className="text-sm text-textColor text-left">
                        PB1dd028da
                      </td>
                      <td className="text-sm text-textColor text-left">
                        {i === 1 ? "Shipped" : "Preparing"}
                      </td>
                      <td className="text-sm font-bold text-coolDarkGreen text-left">
                        Check more
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* {feed.map((item) => (
                <div key={item.id} className="pb-4 flex items-center gap-3">
                  <div className="h-14 w-14 rounded-full bg-gray-50 relative overflow-hidden">
                    <Image src={item.image} objectFit="cover" layout="fill" />
                  </div>
                  <div>
                    <h3 className="text-sm">
                      <span className="font-semibold">{item.item}</span> from{" "}
                      <span className="font-semibold">{item.store}</span>{" "}
                    </h3>
                    <p className="text-xs text-gray-300 mt-1">
                      <span>{item.size}</span> | <span>{item.color}</span>
                    </p>
                  </div>
                </div>
              ))} */}
            </div>
          </Card>
        </div>
        <div className="row-span-1">
          <Card title="Messages">
            <div className="flex flex-col overflow-y-scroll categories justify-between h-full mt-8 py-6">
              {messages.map((message) => (
                <div key={message.id} className="pb-4 flex items-center gap-3">
                  <div className="h-14 w-14 rounded-full bg-gray-50 relative overflow-hidden">
                    <Image
                      src={message.image}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{message.user}</h3>
                    <h4 className="text-sm text-gray-500">{message.message}</h4>
                    <p className="text-xs text-gray-300 mt-1">
                      17:44 | 18.10.2021
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <div>
          <Card title="Popular this week">
            <div className="mt-8 py-6">
              <CarouselSmall items={items} />
            </div>
          </Card>
        </div>
        <div>
          <Card light title="Sellers you follow">
            <div className="flex flex-col overflow-y-scroll categories justify-between h-full mt-8 py-6">
              {feed.map((item) => (
                <div key={item.id} className="pb-4 flex items-center gap-3">
                  <div className="h-14 w-14 rounded-full bg-gray-50 relative overflow-hidden">
                    <Image src={item.image} objectFit="cover" layout="fill" />
                  </div>
                  <div>
                    <h3 className="text-sm">
                      {" "}
                      <span className="font-semibold">{item.user}</span> just
                      bought <span className="font-semibold">{item.item}</span>{" "}
                      from <span className="font-semibold">{item.store}</span>{" "}
                    </h3>
                    <p className="text-xs text-gray-300 mt-1">
                      17:44 | 18.10.2021
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
};

export default MyAccount;

export async function getStaticPaths() {
  const api = process.env.NEXT_PUBLIC_API;
  const res = await fetch(`${api}/items`);
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { username: item.category.slug, slug: item.slug },
    };
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps() {
  const api = process.env.NEXT_PUBLIC_API;

  const res = await fetch(`${api}/items`);
  const data = await res.json();

  return {
    props: { items: data },
  };
}
