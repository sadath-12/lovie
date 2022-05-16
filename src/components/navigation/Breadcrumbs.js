import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

const Breadcrumbs = () => {
  const router = useRouter();

  return (
    <div>
      <Link href="/categories">
        <a className="hover:text-coolOrange transition duration-150 text-sm text-coolDarkGreen font-light capitalize">
          All
        </a>
      </Link>
      <span className="text-coolDarkGreen text-xs mx-1">|</span>
      <Link href="/categories/[sub]" as={`/categories/${router.query.sub}`}>
        <a className="hover:text-coolOrange transition duration-150 text-sm text-coolDarkGreen font-light capitalize">
          {router.query.sub}
        </a>
      </Link>
      <span className="text-coolDarkGreen text-xs mx-1">|</span>
      <Link
        href="/[categories]/[slug]"
        as={`/${router.query.categories}/${router.query.slug}`}
      >
        <a className="hover:text-coolOrange transition duration-150 text-sm text-coolDarkGreen font-light capitalize">
          {router.query.slug}
        </a>
      </Link>
    </div>
  );
};

export default Breadcrumbs;
