import React, { useContext, useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Breadcrumbs from "../../components/navigation/Breadcrumbs";
import Paragraph from "../../components/Typography/Paragraph";
import SuperTitle from "../../components/Typography/SuperTitle";
import ProductImageGrid from "../../components/ProductImageGrid";
import Heading from "../../components/Typography/Heading";
import StarReviews from "../../components/DataDisplay/StarReviews";
import Carousel from "../../components/DataDisplay/Carousel";
import { newArrivals } from "../../data/index";
import Colour2 from "../../components/ProductOptions/Colour2";
import Size2 from "../../components/ProductOptions/Size2";
import Quantity from "../../components/ProductOptions/Quantity";
import Button from "../../components/inputs/Button";
import Delivery from "../../components/ProductOptions/Delivery";
import Tabs from "../../components/navigation/Tabs";
import Description from "../../components/ProductViews/Description";
import Reviews from "../../components/ProductViews/Reviews";
import ShippingAndReturns from "../../components/ProductViews/ShippingAndReturns";
import IconGroup from "../../components/icons/IconGroup";
import { Chat } from "../../components/icons/SocialIcons";
import Link from "next/link";
import Style from "../../components/ProductOptions/Style";
import { useRouter } from "next/router";
import { uuid } from "uuidv4";
import { cartContextTwo } from "../../contexts/cartContextTwo";
import SellerDataIcons from "../../components/SellerDataIcons";
import Customize from "../../components/ProductOptions/Customize";

const Auctions = ({ item, categories }) => {
  const { addItemsToCart, cartItems } = useContext(cartContextTwo);
  const [selected, setSelected] = useState("Description");
  const [selectedColours, setSelectedColours] = useState(
    item.colours[0].colour
  );
  const [openColours, setOpenColours] = useState(false);
  const [selectedSize, setSelectedSize] = useState(item.sizes[0].size);
  const [selectedStyle, setSelectedStyle] = useState("Silk");
  const [openSizes, setOpenSizes] = useState(false);
  const [openStyles, setOpenStyles] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [btnDisabled, setButtonDisabled] = useState(false);
  const router = useRouter();

  const addToCart = (item) => {
    const newItem = item;
    newItem.options = {
      colours: selectedColours,
      style: selectedStyle,
      sizes: selectedSize,
      quantity: quantity,
    };
    newItem.removeId = uuid();
    addItemsToCart(newItem);
  };

  useEffect(() => {
    const check = cartItems.some((cartItem) => cartItem.id === item.id);
    if (check) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [cartItems]);

  return (
    <Layout categories={categories}>
      {/* <Breadcrumbs /> */}
      <div className="lg:flex lg:items-start mt-6">
        <ProductImageGrid
          item={item}
          supportingImages={item.supporting_images}
        />
        <div className="lg:ml-10 w-full">
          <Link href="/sellers/[slug]" as={`/sellers/${item.store.slug}`}>
            <a>
              <SuperTitle size="text-lg" text={item.store.store_name} />
            </a>
          </Link>

          <div className="flex items-center mt-1">
            <Paragraph text="FOLLOWERS: 5674" margin="mr-10" />
            <Paragraph text={`SALES: ${item.number_of_sales}`} />
          </div>
          <h1 className="text-[22px] text-gray-700 tracking-tighter uppercase font-medium mt-4">
            {item.name}
          </h1>
          <div className="flex items-center">
            <button
              onClick={() => {
                setSelected("Reviews");
                router.push("#reviews");
              }}
            >
              <StarReviews />
            </button>
            <Paragraph text="4.9" margin="ml-4" />
            <span className="text-xs font-light text-gray-500 mx-1">|</span>
            <Paragraph text={`${item.reviews.length} reviews`} />
            <span className="text-xs font-light text-gray-500 mx-1">|</span>
            <Paragraph text={`${item.number_of_sales} sales`} />
          </div>
          <SellerDataIcons margin="mt-4" />
          <div className="mt-4 ml-4">
            <ul>
              <li className="text-gray-700 text-sm leading-relaxed list-disc">
                It is a long established fact that a reader will be distracted
              </li>
              <li className="text-gray-700 text-sm leading-relaxed list-disc">
                It is a long established fact that a reader will be distracted
              </li>
              <li className="text-gray-700 text-sm leading-relaxed list-disc">
                It is a long established fact that a reader will be distracted
              </li>
            </ul>
          </div>
          <div className="mt-6 flex gap-10">
            <div>
              <p className="font-bold text-xs text-coolBlack mb-3">
                ID:{" "}
                <span className="font-normal text-gray-500">LA123456789</span>
              </p>
              <p className="text-xs text-coolBlack font-bold">
                Weight: <span className="font-normal text-gray-500">85g</span>
              </p>
            </div>
            <button
              onClick={() => {
                setSelected("Description");
                router.push("#reviews");
              }}
              className="flex items-start flex-col"
            >
              <p className="font-bold text-xs text-coolBlack mb-3">
                Dimension:{" "}
                <span className="font-normal text-gray-500">
                  20 / 10 / 20 cm
                </span>
              </p>
              <p className="font-bold text-xs text-coolBlack">
                Material:{" "}
                <span className="font-normal text-gray-500">100% Cotton</span>
              </p>
            </button>
          </div>
          <div className="flex flex-col items-stretch gap-4 mt-6">
            <Colour2
              colours={item.colours}
              open={openColours}
              setOpen={setOpenColours}
              selected={selectedColours}
              setSelected={setSelectedColours}
            />
            <Style
              styles={item.colours}
              open={openStyles}
              setOpen={setOpenStyles}
              selected={selectedStyle}
              setSelected={setSelectedStyle}
            />
            <Size2
              sizes={item.sizes}
              selected={selectedSize}
              setSelected={setSelectedSize}
              open={openSizes}
              setOpen={setOpenSizes}
            />
            <Quantity quantity={quantity} setQuantity={setQuantity} />
            <Customize />
          </div>
          <div className="flex items-center gap-4 mt-7">
            <Button text="Place A Bid" />
            <Button
              disabled={btnDisabled}
              disabledOpacity={btnDisabled}
              onClick={() => addToCart(item)}
              text="Add to cart"
            />
            {/* <Button text="Customize" /> */}
          </div>
          <div className="flex items-center gap-4 mt-4">
            <p className="text-xs text-gray-400">
              Current Bids:{" "}
              <span className="text-coolBlack font-bold">$60</span>
            </p>
            <p className="text-xs text-gray-400">
              Total Bids: <span className="text-coolBlack font-bold">7</span>
            </p>
            <p className="text-xs text-coolBlack font-bold">
              2d, 14h, 12m remaining
            </p>
          </div>

          <div className="flex items-center mt-10 gap-4">
            <Heading size="text-3xl font-bold" h3 text={`$${item.price}`} />
            <Paragraph text="Local taxes included" />
          </div>

          <div className="mt-6 mb-6 w-full border-b border-borderColor pb-6 flex items-center justify-between">
            <Delivery />
            <div id="reviews" className="flex items-center">
              <Chat size="30" />
              <p className="text-xs ml-2">Contact Store</p>
            </div>
            <IconGroup />
          </div>
          <ShippingAndReturns />
        </div>
      </div>
      <div className="mt-14 pt-10 mb-24 border-t border-borderColor">
        <div className="flex item-start justify-between gap-10">
          <div className="w-[40rem]">
            <Tabs selected={selected} setSelected={setSelected} />
            {selected === "Description" && (
              <Description description={item.description} />
            )}
            {selected === "Reviews" && (
              <Reviews
                reviews={item.reviews}
                imageUrl={item.supporting_images}
                productName={item.name}
              />
            )}
          </div>
        </div>
        <Heading h2 text="More from this store..." margin="mt-20 mb-4 ml-3" />
        <Carousel items={newArrivals} size={true} />

        <Heading h2 text="You may also like..." margin="mt-20 mb-4 ml-3" />
        <Carousel items={newArrivals} size={true} />

        <Heading h2 text="Others are looking at..." margin="mt-20 mb-4 ml-3" />
        <Carousel items={newArrivals} size={true} />
      </div>
    </Layout>
  );
};

export default Auctions;

export async function getStaticPaths() {
  const api = process.env.NEXT_PUBLIC_API;
  const res = await fetch(`${api}/items`);
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { sub: item.category.slug, slug: item.slug },
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
  console.log(slug);
  const res = await fetch(`${api}/items?slug=${slug}`);
  const data = await res.json();
  const categoryRes = await fetch(`${api}/categories`);
  const categoryData = await categoryRes.json();
  return {
    props: { item: data[0], categories: categoryData },
    revalidate: 200,
  };
}
