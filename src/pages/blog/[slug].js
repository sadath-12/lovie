import React from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import { FacebookIcon, TwitterIcon } from "../../components/icons/SocialIcons";
import { ChevronForward, ChevronBack } from "react-ionicons";
import BlogCard from "../../components/BlogCard/BlogCard";

const popularBlogs = [
  {
    id: 1,
    title: "How to sell more",
    image: "/woman-sport.jpg",
    writerName: "John Doe",
    date: "24/01/2022",
  },
  {
    id: 2,
    title: "The Title blog",
    image: "/man-tennis-court.jpg",
    writerName: "John Doe",
    date: "24/01/2022",
  },
  {
    id: 3,
    title: "Where to find handcrafted items.",
    image: "/returns-refunds.png",
    writerName: "John Doe",
    date: "24/01/2022",
  },
];

const BlogPost = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className="mb-36">
        <div className="relative w-full h-[24rem] object-top">
          <Image
            src="/about-us.png"
            objectFit="cover"
            layout="fill"
            className="object-top"
          />
        </div>
        <div className="mt-10 w-full h-full flex items-center justify-center flex-col text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase text-coolBlack font-medium font-cool z-20 mb-4">
            THIS IS THE BLOG TITLE
          </h1>
          <p className="text-coolBlack font-semibold text-lg">Author</p>
          <p className="text-gray-500 uppercase">Cloth</p>
          <p className="text-gray-500 text-sm">24/32/2022</p>
        </div>

        {/* BLOG CONTENT */}
        <div className="mt-16 w-[40rem] mx-auto">
          <p className="text-gray-500 leading-relaxed">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.”
          </p>
          <p className="text-gray-500 leading-relaxed mt-6">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.”
          </p>
          <p className="text-gray-500 leading-relaxed mt-6">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.”
          </p>
          <p className="text-gray-500 leading-relaxed mt-6">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.”
          </p>
          <p className="text-gray-500 leading-relaxed mt-6">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.”
          </p>
        </div>

        {/* PREVIOUS NEXT */}
        <div className="flex justify-between items-center mt-20">
          <div className="flex items-center">
            <ChevronBack />{" "}
            <p className="text-coolBlack font-semibold uppercase text-sm ml-2">
              Previous Post
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <TwitterIcon size="30" />
            <FacebookIcon size="30" />
          </div>
          <div className="flex items-center">
            <p className="text-coolBlack font-semibold uppercase text-sm mr-2">
              Next Post
            </p>
            <ChevronForward />{" "}
          </div>
        </div>
        <div className="my-24">
          <h3 className="text-3xl text-center font-cool uppercase font-bold">
            Popular Posts
          </h3>
          <div className="flex items-center justify-between mt-10">
            {popularBlogs.slice(0, 3).map((blog) => (
              <BlogCard
                key={blog.id}
                image={blog.image}
                title={blog.title}
                writerName={blog.writerName}
                date={blog.date}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;

export async function getServerSideProps() {
  const api = process.env.NEXT_PUBLIC_API;
  const categoryRes = await fetch(`${api}/categories`);
  const categoryData = await categoryRes.json();
  return {
    props: { categories: categoryData },
  };
}
