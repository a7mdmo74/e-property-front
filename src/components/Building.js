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
        <Link to={`/projects/project/${id}`}>{name}</Link>
      </th>
      <td className="py-5 px-6">
        <Link to={`/projects/project/${id}`}>{type}</Link>
      </td>
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
    </tr>
  );
};

export default Building;
