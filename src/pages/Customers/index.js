import { useContext, useEffect, useState } from "react";
import Customer from "../../components/Customer";
import UserModal from "../../components/Modal/UserModal";

import axios from "axios";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { darkTheme } from "../../context/darkTheme";

export default function Customers() {
  const [customers, setCustomers] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [search, setSearch] = useState("");
  const { isDark, isShow } = useContext(darkTheme);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5050/customers`);
      setCustomers(response.data);
    } catch (error) {
      console.warn(error.message);
    }
  };

  useEffect(() => {
    const getCustomers = async () => {
      await fetchData();
    };
    getCustomers();
  }, []);

  return (
    <div className={isDark ? "dark" : "light"}>
      <div>
        <Header />
      </div>
      <main className="w-full dark:bg-slate-800 dark:text-white flex">
        <Sidebar isShow={isShow} />
        <div
          className={
            isShow
              ? "w-full min-h-screen pt-24 md:pl-[15.7rem] transition-all duration-400 ease-in-out"
              : "w-full min-h-screen pt-24 py-10 transition-all duration-400 ease-in-out"
          }
        >
          <div className="flex flex-col items-center justify-center px-6 py-3 w-full">
            {isModal && (
              <UserModal toggleModal={toggleModal} type="customers" />
            )}
            <div className="flex items-center justify-between px-6 py-3 w-full dark:text-white dark:bg-gray-900 mb-6">
              <button
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={() => setIsModal(true)}
              >
                إضافة عميل
              </button>
              <div>
                <h3 className="text-lg font-semibold">
                  عدد العملاء {customers.length}
                </h3>
              </div>
            </div>
            <div className="flex w-full">
              <form className="w-full mb-6 px-6">
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                >
                  Search
                </label>
                <div dir="rtl">
                  <input
                    type="search"
                    id="default-search"
                    className="block py-3 pr-10 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="إبحث بواسطة الاسم"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="overflow-x-auto relative px-6 w-full">
              <table className="w-full text-gray-500 dark:text-gray-400">
                <thead className="text-sm md:text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      id
                    </th>
                    <th scope="col" className="py-3 px-6">
                      الاسم
                    </th>
                    <th scope="col" className="py-3 px-6">
                      نايل تاورز
                    </th>
                    <th scope="col" className="py-3 px-6">
                      أبراج المدينة
                    </th>
                    <th scope="col" className="py-3 px-6">
                      مركز المدينة التجارى
                    </th>
                    <th scope="col" className="py-3 px-6">
                      العمر
                    </th>
                    <th scope="col" className="py-3 px-6">
                      النوع
                    </th>
                    <th scope="col" className="py-3 px-6">
                      رقم الهاتف
                    </th>
                    <th scope="col" className="py-3 px-6">
                      تعديل
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => {
                    const { id } = customer;
                    return <Customer key={id} customer={customer} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
