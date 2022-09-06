import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { darkTheme } from "../../context/darkTheme";
const UnitID = () => {
  const { isDark, toggleDark, isShow, toggleMenu } = useContext(darkTheme);
  let { id } = useParams();

  return (
    <div className={isDark ? "dark " : "light "}>
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
              حجز
            </button>
            <p className="font-semibold">الوحدة {id}</p>
            <p className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              الحالة: خالية
            </p>
          </div>
          <div className="w-full mt-6 bg-slate-200 dark:text-white dark:bg-gray-900 flex items-center justify-around py-3 mb-6">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              تحديث البيانات
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              حذف
            </button>
          </div>
          <div className="px-10">
            <div className="overflow-x-auto relative mt-8">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      ID
                    </th>
                    <th scope="col" className="py-3 px-6">
                      التميز
                    </th>
                    <th scope="col" className="py-3 px-6">
                      الدور
                    </th>
                    <th scope="col" className="py-3 px-6">
                      المبنى
                    </th>
                    <th scope="col" className="py-3 px-6">
                      القسم
                    </th>
                    <th scope="col" className="py-3 px-6">
                      المشروع الرئيسي
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      3
                    </th>
                    <td className="py-4 px-6">بحرى</td>
                    <td className="py-4 px-6">الأول سكنى</td>
                    <td className="py-4 px-6">عمارة 2</td>
                    <td className="py-4 px-6">سكني</td>
                    <td className="py-4 px-6">أبراج المدينة</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="overflow-x-auto relative mt-8">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      نظام الدفع
                    </th>
                    <th scope="col" className="py-3 px-6">
                      اجمالي الوحدة
                    </th>
                    <th scope="col" className="py-3 px-6">
                      سعر المتر
                    </th>
                    <th scope="col" className="py-3 px-6">
                      المساحة
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      لا يوجد نظام دفع
                    </th>
                    <td className="py-4 px-6">350000.00 </td>
                    <td className="py-4 px-6">3500</td>
                    <td className="py-4 px-6">100</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex my-6 justify-center items-center">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              إضافة نظام للدفع
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UnitID;
