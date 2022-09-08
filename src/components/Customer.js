import { useState } from "react";
import { BiEdit } from "react-icons/bi";
const Customer = ({ customer }) => {
  const { id, name, mid_name, last_name, units, age, gender, phone } = customer;
  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => {
    setIsModal(!isModal);
  };
  console.log(units[0].mainProject.name === "ابراج المدينة" ? units.length : 0);
  return (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center"
      id={id}
    >
      <td
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id}
      </td>
      <td className="py-4 px-6">{`${name} ${mid_name} ${last_name}`}</td>
      <td className="py-4 px-6">{`${
        units[0].length > 0
          ? units[0].mainProject.name === "نايل تاورز"
            ? units[0].mainProject.length
            : 0
          : 0
      }`}</td>
      <td className="py-4 px-6">{`${
        units[0].mainProject.name === "ابراج المدينة" ? units.length : 0
      }`}</td>
      <td className="py-4 px-6">{`${
        units[0].length > 0
          ? units[0].mainProject.name === "مركز المدينة التجارى"
            ? units[0].mainProject.length
            : 0
          : 0
      }`}</td>
      <td className="py-4 px-6">{age}</td>
      <td className="py-4 px-6">{gender}</td>
      <td className="py-4 px-6">{phone}</td>
      <td className="py-4 px-6">
        <button className="flex items-center gap-1" onClick={toggleModal}>
          تعديل <BiEdit />
        </button>
      </td>
    </tr>
  );
};

export default Customer;
