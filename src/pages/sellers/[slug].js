import React, { useContext, useState } from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import Paragraph from "../../components/Typography/Paragraph";
import SuperTitle from "../../components/Typography/SuperTitle";
import StarReviews from "../../components/DataDisplay/StarReviews";
import Button from "../../components/inputs/Button";
import { Add } from "react-ionicons";
import Link from "next/link";
import { HeartOutline } from "react-ionicons";
import IconGroup from "../../components/icons/IconGroup";
import ItemDescription from "../../components/DataDisplay/ItemDescription";
import { wishlistContext } from "../../contexts/wishlistContext";
import SellerDataIcons from "../../components/SellerDataIcons/index";
import LoginPop from "../../components/popups/LoginPop";

const Seller = ({ store, categories }) => {
  const { handleWishlistItems } = useContext(wishlistContext);
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  return (
    <Layout categories={categories}>
      {/* HEADER */}
      <div className="flex items-stretch gap-10 justify-between mt-10 mb-20">
        <div className="h-[558px] flex-1 relative">
          <Image src={store.store_image} objectFit="cover" layout="fill" />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between">
            <SuperTitle
              size="text-sm text-coolDarkGreen tracking-tight"
              text="Store"
            />
            <div className="flex items-center">
              <Paragraph text={`${store.number_of_followers} followers`} />
              <button className="ml-2" onClick={handleOpen}>
                <Add height="33px" width="33px" />
              </button>
              <LoginPop open={open} setOpen={setOpen} />
            </div>
          </div>
          <div className="mt-auto">
            <h1 className="font-cool text-[60px] font-medium tracking-tighter uppercase text-coolBlack antialiased -ml-1">
              {store.store_name}
            </h1>
            <Paragraph text="Spain" size="text-[23px] tracking-tight" />
            <div className="mt-2 border-b border-coolBlack pb-4 mb-8">
              <div className="flex items-center">
                <StarReviews />
                <Paragraph
                  margin="ml-2"
                  text={`${store.number_of_reviews} reviews`}
                />
              </div>
              <SellerDataIcons />
            </div>

            <Paragraph text={store.store_description} size="text-[20px]" />
            <div className="mt-20 flex items-center justify-between">
              <IconGroup color />
              <Button text="Contact seller" color="bg-coolDarkGreen" />
            </div>
          </div>
        </div>
      </div>

      {/* STORE ITEMS */}
      <div className="grid grid-cols-4 gap-10 mt-40">
        {store.items.map((item, index) => (
          <div key={item.id} className={`mb-24 group cursor-pointer`}>
            <div className={`h-[348px] w-[280px] bg-gray-50 relative`}>
              <Image
                src={item.supporting_images[0].url}
                objectFit="cover"
                layout="fill"
              />
              <Link
                href="/categories/[sub]/[slug]"
                as={`/categories/mens-clothing/${item.slug}`}
              >
                <a className="h-full w-full bg-black absolute hover:opacity-100 opacity-0 bg-opacity-20 transition duration-200"></a>
              </Link>
              <button
                onClick={() => handleWishlistItems(item)}
                className="opacity-0 absolute top-2 right-2 group-hover:opacity-100 transition duration-200 z-20"
              >
                <HeartOutline height="30px" width="30px" color="white" />
              </button>
            </div>
            <ItemDescription
              store_name={item.store.store_name}
              name={item.name}
              reviews={`342 reviews`}
              price={`$${item.price}`}
              slug={item.store.slug}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Seller;

export async function getStaticPaths() {
  const api = process.env.NEXT_PUBLIC_API;
  const res = await fetch(`${api}/stores`);
  const data = await res.json();

  const paths = data.map((store) => {
    return {
      params: { slug: store.slug },
    };
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(ctx) {
  const api = process.env.NEXT_PUBLIC_API;
  const slug = ctx.params.slug;

  const categoryRes = await fetch(`${api}/categories`);
  const categoryData = await categoryRes.json();

  const res = await fetch(`${api}/stores?slug=${slug}`);
  const data = await res.json();

  return {
    props: { store: data[0], categories: categoryData },
    revalidate: 200,
  };
}
