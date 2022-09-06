import { Link } from "react-router-dom";
import React from "react";

const Item = ({ tower }) => {
  const { id, name, cost, area, type } = tower;
  return (
    <Link to={`/projects/unit/${id}`}>
      <div
        id={id}
        className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center cursor-pointer"
      >
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div className="flex items-center justify-around my-4">
          <p className="text-sm font-bold text-gray-700 dark:text-gray-400">
            <span className="font-normal">المساحة: </span>
            {area}م
          </p>
          <p className="text-sm font-bold text-gray-700 dark:text-gray-400">
            <span className="font-normal">النوع: </span>
            {type}
          </p>
        </div>
        <p className="font-bold text-gray-700 dark:text-gray-400 text-md">
          <span className="font-normal">سعر الوحدة : </span>
          {cost}
        </p>
      </div>
    </Link>
  );
};

export default Item;
