import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Item from "../../components/Item";
import Sidebar from "../../components/Sidebar";
import { darkTheme } from "../../context/darkTheme";
const Index = () => {
  const { isDark, toggleDark, isShow, toggleMenu } = useContext(darkTheme);
  const [constructions, setConstructions] = useState([]);
  let { id } = useParams();
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5050/constructions`);
      setConstructions(response.data);
    } catch (error) {
      console.warn(error.message);
    }
  };

  useEffect(() => {
    const getConstructions = async () => {
      await fetchData();
    };
    getConstructions();
  }, []);

  return (
    <div
      className={
        isDark
          ? "dark transition-all duration-500 ease-in-out"
          : "light transition-all duration-500 ease-in-out"
      }
    >
      <div>
        <Header
          toggleMenu={toggleMenu}
          isShow={isShow}
          toggleDark={toggleDark}
          isDark={isDark}
        />
      </div>
      <main className="w-full dark:bg-slate-800 dark:text-white flex">
        <Sidebar isShow={isShow} toggleDark={toggleDark} />
        <div
          className={
            isShow
              ? "w-full min-h-screen pt-24 md:pl-[15.7rem]"
              : "w-full min-h-screen pt-24 py-10"
          }
        >
          <div className="w-full bg-slate-200 dark:text-white dark:bg-gray-900 flex items-center justify-between p-4 mb-6">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              فلتر البحث
            </button>
            <p>عمارة {id}</p>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              إضافة وحدات
            </button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 p-2">
            {constructions.map((tower) => {
              const { id } = tower;
              return <Item key={id} tower={tower} />;
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
