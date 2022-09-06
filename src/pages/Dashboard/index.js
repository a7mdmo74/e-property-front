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
            <div className="w-full md:w-[80%]">
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
                  <thead className="text-sm md:text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        تعاقدات اليوم
                      </th>
                      <th scope="col" className="py-3 px-6">
                        تعاقدات الاسبوع
                      </th>
                      <th scope="col" className="py-3 px-6">
                        تعاقدات الشهر
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-4 px-6 font-bold">12</td>
                      <td className="py-4 px-6 font-bold">25</td>
                      <td className="py-4 px-6 font-bold">30</td>
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
