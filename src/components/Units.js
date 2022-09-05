import React from "react";
import { Link } from "react-router-dom";
import Img from "../assets/eskan-bg.png";
const Units = ({ unit }) => {
  const { id, name, numOfUnits, contract, empty, type } = unit;
  return (
    <div
      id={id}
      className="w-[380px] bg-white rounded-lg border border-gray-200 shadow-3xl dark:bg-gray-800 dark:border-gray-700 mb-6"
    >
      <img className="rounded-t-lg" src={Img} alt={name} />
      <div className="p-5 text-center">
        <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex flex-col justify-center gap-4">
          <span>{numOfUnits} عدد الوحدات</span>
          <span>{contract} وحدات تعاقد</span>
          <span>{empty} وحدات فارغة</span>
        </p>
        <Link to="/">
          <button
            href="towers"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            معرفة التفاصيل
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Units;