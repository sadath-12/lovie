import React from "react";
import Link from "next/link";

const CareerItem = ({ category, jobs, margin }) => {
  return (
    <div className={`${margin}`}>
      <div>
        <h3 className="uppercase font-cool text-xl border-b pb-1 font-bold mb-10 border-gray-200">
          {category}
        </h3>
        {jobs.map((job) => (
          <Link key={job} href={`/career/[slug]`} as={`/career/${job}`}>
            <a className="font-semibold text-3xl mb-6 block">{job}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CareerItem;
