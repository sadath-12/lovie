import Chat from "../components/Chat/Chat";
import Layout from "../components/layout/Layout";
import AuctionSection from "../components/sections/AuctionSection";
import BestSellersSection from "../components/sections/BestSellersSection";
import Creators from "../components/sections/Creators";
import DealsSection from "../components/sections/DealsSection";
import EditorsChoice from "../components/sections/EditorsChoice";
import HeroSection from "../components/sections/HeroSection";
import NewArrivals from "../components/sections/NewArrivals";
import PopularStories from "../components/sections/PopularStories";
import PreOrder from "../components/sections/PreOrder";
import ShopHomeSection from "../components/sections/ShopHomeSection";

export default function Home({ data, categories, stores }) {
  return (
    <Layout categories={categories}>
      <HeroSection
        imageUrl="/hero-image.jpg"
        text="Meet the makers"
        paragraph="We're LOVIE AURORA, a community-driven online marketplace that
          connects you with uinique, exciting creators and their products from
          all over the world."
      />
      <div className="max-w-[1320px] mx-auto">

        <BestSellersSection items={data} />
        <ShopHomeSection items={data} />
        <DealsSection />
        <NewArrivals />
        <EditorsChoice />
        <AuctionSection />
        <PreOrder />
        <PopularStories stores={stores} />
        <Creators />
      </div>
    </Layout>
  );
}


export async function getStaticProps() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/items`);
  const data = await res.json();
  // const data = [];

  const resC = await fetch(`${process.env.NEXT_PUBLIC_API}/categories`);
  const dataC = await resC.json();
  // const dataC = [];

  const resS = await fetch(`${process.env.NEXT_PUBLIC_API}/stores`);
  const dataS = await resS.json();
  // const dataS = [];
  return {
    props: { data: data, categories: dataC, stores: dataS },
  };
}
