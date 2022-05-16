import { ArrowBack, ArrowForward } from "react-ionicons";

const arr1 = [{ page: 1 }, { page: 2 }, { page: 3 }];

const arr2 = [{ page: 8 }, { page: 9 }, { page: 10 }];

export default function Example() {
  return (
    <nav className="max-w-[30rem] mx-auto px-4 flex items-center justify-between sm:px-0">
      <div className="-mt-px w-0 flex-1 flex">
        <button className="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
          <ArrowBack />
          Previous
        </button>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {arr1.map((item, index) => (
          <button
            key={index}
            aria-current="page"
            className="border-coolOrange text-coolOrange hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          >
            {item.page}
          </button>
        ))}

        <span className="border-transparent text-gray-500 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
          ...
        </span>
        {arr2.map((item, index) => (
          <button
            key={index}
            aria-current="page"
            className="border-coolOrange text-coolOrange hover:text-gray-700 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
          >
            {item.page}
          </button>
        ))}
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        <button className="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
          Next
          <ArrowForward />
        </button>
      </div>
    </nav>
  );
}
