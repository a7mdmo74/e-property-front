import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Units from "../../components/Units";
import { darkTheme } from "../../context/darkTheme";
function Dashboard() {
  const [units, setUnits] = useState([]);
  const { isDark, isShow } = useContext(darkTheme);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5050/units`);
      setUnits(response.data);
    } catch (error) {
      console.warn(error.message);
    }
  };

  useEffect(() => {
    const getUnits = async () => {
      await fetchData();
    };
    getUnits();
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
            <div className="flex items-center justify-center w-full flex-wrap gap-6">
              {units.map((unit) => {
                const { id } = unit;
                return <Units key={id} unit={unit} />;
              })}
            </div>
            <div className="w-[85%]">
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg px-6">
                <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
                  <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th
                        scope="row"
                        className="text-lg py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                      >
                        مدفوعات اليوم
                      </th>
                      <td className="py-4 px-6 text-lg font-bold text-black">
                        0
                      </td>
                      <th
                        scope="row"
                        className="text-lg py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                      >
                        تعاقدات اليوم
                      </th>
                      <td className="py-4 px-6 text-lg font-bold text-black">
                        0
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th
                        scope="row"
                        className="text-lg py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                      >
                        مدفوعات الاسبوع
                      </th>
                      <td className="py-4 px-6 text-lg font-bold text-black">
                        0
                      </td>
                      <th
                        scope="row"
                        className="text-lg py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                      >
                        تعاقدات الاسبوع
                      </th>
                      <td className="py-4 px-6 text-lg font-bold text-black">
                        0
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th
                        scope="row"
                        className="text-lg py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                      >
                        مدفوعات الشهر
                      </th>
                      <td className="py-4 px-6 text-lg font-bold text-black">
                        0
                      </td>
                      <th
                        scope="row"
                        className="text-lg py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                      >
                        تعاقدات الشهر
                      </th>
                      <td className="py-4 px-6 text-lg font-bold text-black">
                        0
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Dashboard;
