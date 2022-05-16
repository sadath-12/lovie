import Image from "next/image";
import React, { useState } from "react";
import StarReviews from "../../components/DataDisplay/StarReviews";
import AppLayout from "../../components/layout/AppLayout";

const followingStores = () => {
    const stores = [
        { name: `ARTER'S`, imageUrl: '/deals.jpg', reviews: '356', stars: 4.6 },
        { name: 'BODONI', imageUrl: '/hangers.jpg', reviews: '656', stars: 4.8 },
        { name: `COOPER's`, imageUrl: '/people-1.jpg', reviews: '136', stars: 4.9 }
    ]
    return (
        <AppLayout>
            <h1 className="text-xl md:text-2xl font-cool lg:text-3xl uppercase text-coolBlack text-center my-4 text-cool">Stores that you follow</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 space-x-8 m-6">
                {stores.map(store => (
                    <div className="flex flex-col space-y-3">
                        <div className="w-full min-h-[570px] h-full relative min-w-[100%]">
                            <Image layout="fill" objectFit="cover" src={store.imageUrl} />
                        </div>
                        <h1 className="text-xl md:text-2xl uppercase">{store.name}</h1>
                        <div className="flex space-x-2 items-center">
                            <StarReviews />
                            <p className="text-[12px] text-gray-400">{store.reviews} reviews</p>
                        </div>
                        <p className="text-md text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ullam minima suscipit error nihil sunt, accusamus facere consequuntur, ex rem ad excepturi. Maiores molestiae deleniti recusandae, consequuntur veniam incidunt harum.</p>
                    </div>
                ))}
            </div>
        </AppLayout>
    );
};

export default followingStores;
