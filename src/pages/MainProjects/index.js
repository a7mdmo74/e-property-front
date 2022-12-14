import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Building from "../../components/Building";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { darkTheme } from "../../context/darkTheme";
const Index = () => {
  const [towers, setTowers] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const { isDark, isShow } = useContext(darkTheme);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5050/towers`);
      setTowers(response.data);
    } catch (error) {
      console.warn(error.message);
    }
  };

  useEffect(() => {
    const getTowers = async () => {
      await fetchData();
    };
    getTowers();
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
            <div className="w-full bg-slate-200 dark:text-white dark:bg-gray-900 flex items-center justify-between p-4 rounded-lg mb-6">
              <p>المشروع : أبراج المدينة</p>
              <button
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                onClick={toggleModal}
              >
                إضافة منشأت
              </button>
            </div>

            <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      إسم المشروع
                    </th>
                    <th scope="col" className="py-3 px-6">
                      عدد الوحدات
                    </th>
                    <th scope="col" className="py-3 px-6">
                      وحدات تعاقد
                    </th>
                    <th scope="col" className="py-3 px-6">
                      وحدات خالية
                    </th>
                    <th scope="col" className="py-3 px-6">
                      تكلفة المشروع
                    </th>
                    <th scope="col" className="py-3 px-6">
                      إجمالي المبيعات
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {towers.map((tower) => {
                    const { id } = tower;
                    return <Building key={id} tower={tower} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
