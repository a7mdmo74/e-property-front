import { useState } from "react";
import { BiEdit } from "react-icons/bi";
const Customer = ({ customer }) => {
  const { id, name, nile, towers, center, age, gender, phone } = customer;
  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => {
    setIsModal(!isModal);
  };
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
      <td className="py-4 px-6">{name}</td>
      <td className="py-4 px-6">{nile}</td>
      <td className="py-4 px-6">{towers}</td>
      <td className="py-4 px-6">{center}</td>
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
