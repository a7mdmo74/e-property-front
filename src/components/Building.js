import { Link } from "react-router-dom";
import React from "react";

const Building = ({ tower }) => {
  const { id, name, type, numOfUnits, contract, empty, cost, sell } = tower;
  return (
    <tr
      id={id}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <th
        scope="row"
        className="py-5 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <Link to={`/projects/project/${id}`}>
          <>
            <span>{name}</span>
            <span className="text-[10px]">({type})</span>
          </>
        </Link>
      </th>

      <td className="py-5 px-6">
        <Link to={`/projects/project/${id}`}>{numOfUnits}</Link>
      </td>
      <td className="py-5 px-6">
        <Link to={`/projects/project/${id}`}>{contract}</Link>
      </td>
      <td className="py-5 px-6">
        <Link to={`/projects/project/${id}`}>{empty}</Link>
      </td>
      <td className="py-5 px-6">
        <Link to={`/projects/project/${id}`}>{cost}</Link>
      </td>
      <td className="py-5 px-6">
        <Link to={`/projects/project/${id}`}>{sell}</Link>
      </td>
      <td className="py-5 px-6">
        <Link to={`/projects/project/${id}`}>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            ذهاب
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default Building;
