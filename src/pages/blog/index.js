import React from "react";
import Layout from "../../components/layout/Layout";
import Image from "next/image";
import BlogCard from "../../components/BlogCard/BlogCard";
import Pagination from "../../components/inputs/Pagination";
import PaginationTwo from "../../components/navigation/PaginationTwo";
import Link from "next/link";

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
  {
    id: 4,
    title: "How to sell more",
    image: "/woman-sport.jpg",
    writerName: "John Doe",
    date: "24/01/2022",
  },
  {
    id: 5,
    title: "The Title blog",
    image: "/man-tennis-court.jpg",
    writerName: "John Doe",
    date: "24/01/2022",
  },
  {
    id: 6,
    title: "Where to find handcrafted items.",
    image: "/returns-refunds.png",
    writerName: "John Doe",
    date: "24/01/2022",
  },
];

const Blog = ({ categories }) => {
  return (
    <Layout categories={categories}>
      <div className="bg-gray-50 h-[35rem] relative">
        <Image src="/blog.png" objectFit="cover" layout="fill" />
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[34rem] z-20 mr-8">
          <h1 className="text-9xl font-cool uppercase font-medium">
            The <br />
            Blog
          </h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="absolute -bottom-2 left-0 w-full h-[35rem] bg-gradient-to-t from-white"></div>
      </div>
      <div className="bg-gray-50 h-[24rem] relative my-24 group cursor-pointer">
        <Image src="/blog-editor.png" objectFit="cover" layout="fill" />
        <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer z-30">
          <h2 className="text-5xl text-center absolute whitespace-nowrap font-cool uppercase font-medium text-white transform -translate-x-1/2 top-1/2 -translate-y-1/2">
            Editors Pick
          </h2>
        </div>
        <div className="absolute h-full w-full bg-coolBlack bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-150 z-10"></div>
      </div>

      {/* POPULAR BLOGS */}
      <div className="my-24">
        <h3 className="text-3xl text-center font-cool uppercase font-bold">
          Popular
        </h3>
        <div className="flex items-center justify-between mt-10">
          {popularBlogs.slice(0, 3).map((blog) => (
            <Link key={blog.id} href="/blog/[slug]" as={`/blog/${blog.title}`}>
              <a>
                <BlogCard
                  image={blog.image}
                  title={blog.title}
                  writerName={blog.writerName}
                  date={blog.date}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>

      {/* BLOGS */}
      <div className="my-24">
        <h3 className="text-3xl text-center font-cool uppercase font-bold">
          CREATOR BLOG POSTS
        </h3>
        <div className="grid grid-cols-2 gap-20 mt-10 mb-14">
          {popularBlogs.map((blog) => (
            <Link key={blog.id} href="/blog/[slug]" as={`/blog/${blog.title}`}>
              <a>
                <BlogCard
                  image={blog.image}
                  title={blog.title}
                  writerName={blog.writerName}
                  date={blog.date}
                />
              </a>
            </Link>
          ))}
        </div>
        {/* <Pagination /> */}
        <PaginationTwo />
      </div>
    </Layout>
  );
};

export default Blog;

export async function getStaticProps() {
  const api = process.env.NEXT_PUBLIC_API;
  const categoryRes = await fetch(`${api}/categories`);
  const categoryData = await categoryRes.json();
  return {
    props: { categories: categoryData },
  };
}
