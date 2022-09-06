import { useContext } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { darkTheme } from "../../context/darkTheme";

const Accounts = () => {
  const { isDark, isShow } = useContext(darkTheme);

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
            <div className="flex items-center justify-center w-full flex-wrap gap-6 mb-10">
              <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                مدفوعات اليوم
              </button>
              <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                مدفوعات الاسبوع
              </button>
              <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                مدفوعات الشهر
              </button>
              <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                الاقساط
              </button>
              <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                نسب الدفعات
              </button>
              <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                انظمة السداد
              </button>
            </div>
            <div className="overflow-x-auto relative w-full">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      الوحدة
                    </th>
                    <th scope="col" className="py-3 px-6">
                      المبنى
                    </th>
                    <th scope="col" className="py-3 px-6">
                      العميل
                    </th>
                    <th scope="col" className="py-3 px-6">
                      المدفوع
                    </th>
                    <th scope="col" className="py-3 px-6">
                      تاريخ الحركة
                    </th>
                    <th scope="col" className="py-3 px-6">
                      الدفعة
                    </th>
                    <th scope="col" className="py-3 px-6">
                      قيمة الدفعة
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td colSpan={5} className="py-4 px-6 text-center">
                      لا يوجد بعد
                    </td>
                    <td colSpan={2} className="py-4 px-6 text-center">
                      لا يوجد بعد
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Accounts;
