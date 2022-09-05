import axios from "axios";
import { useEffect, useState } from "react";
import Units from "../../components/Units";
function Dashboard() {
  const [units, setUnits] = useState([]);

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
    <>
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
                <td className="py-4 px-6 text-lg font-bold text-black">0</td>
                <th
                  scope="row"
                  className="text-lg py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  تعاقدات اليوم
                </th>
                <td className="py-4 px-6 text-lg font-bold text-black">0</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="text-lg py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  مدفوعات الاسبوع
                </th>
                <td className="py-4 px-6 text-lg font-bold text-black">0</td>
                <th
                  scope="row"
                  className="text-lg py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  تعاقدات الاسبوع
                </th>
                <td className="py-4 px-6 text-lg font-bold text-black">0</td>
              </tr>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th
                  scope="row"
                  className="text-lg py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  مدفوعات الشهر
                </th>
                <td className="py-4 px-6 text-lg font-bold text-black">0</td>
                <th
                  scope="row"
                  className="text-lg py-4 px-6 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  تعاقدات الشهر
                </th>
                <td className="py-4 px-6 text-lg font-bold text-black">0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
