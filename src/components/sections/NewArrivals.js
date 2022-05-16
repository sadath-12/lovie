import React from "react";
import Carousel from "../DataDisplay/Carousel";
import { newArrivals } from "../../data";
import Heading from "../Typography/Heading";
import Link from "next/link";

const NewArrivals = () => {
  return (
    <section className="mt-[5rem]">
      <Link href="/new-arrivals">
        <a>
          <Heading h2 text="New Arrivals" margin="mb-4 ml-3" />
        </a>
      </Link>

      <Carousel items={newArrivals} size={false} />
    </section>
  );
};

export default NewArrivals;
