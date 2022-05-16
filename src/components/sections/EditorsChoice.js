import React from "react";
import Carousel from "../DataDisplay/Carousel";
import { newArrivals } from "../../data";
import Heading from "../Typography/Heading";
import Link from "next/link";

const EditorsChoice = () => {
  return (
    <section className="mt-[5rem]">
      <Link href="/editors-choice">
        <a>
          <Heading h2 text="Editors Choice" margin="mb-4 ml-3" />
        </a>
      </Link>

      <Carousel items={newArrivals} />
    </section>
  );
};

export default EditorsChoice;
