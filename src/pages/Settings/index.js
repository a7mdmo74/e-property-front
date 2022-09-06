import { useContext } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { darkTheme } from "../../context/darkTheme";

const Settings = () => {
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
            <div className="flex items-center justify-center px-6 py-3 w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/">
                  <div className="cursor-pointer block py-6 px-4 md:px-16 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      الاقسام
                    </p>
                  </div>
                </Link>
                <Link to="/projects">
                  <div className="cursor-pointer block py-6 px-4 md:px-16 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      المشاريع الرئيسية
                    </p>
                  </div>
                </Link>
                <Link to="/">
                  <div className="cursor-pointer block py-6 px-4 md:px-16 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      الاقسام الفرعية
                    </p>
                  </div>
                </Link>
                <Link to="/">
                  <div className="cursor-pointer block py-6 px-4 md:px-16 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      الطوابق
                    </p>
                  </div>
                </Link>
                <Link to="/">
                  <div className="cursor-pointer block py-6 px-4 md:px-16 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      الموقع
                    </p>
                  </div>
                </Link>
                <Link to="/">
                  <div className="cursor-pointer block py-6 px-4 md:px-16 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      المباني
                    </p>
                  </div>
                </Link>
                <Link to="/">
                  <div className="cursor-pointer block py-6 px-4 md:px-16 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      الوحدات
                    </p>
                  </div>
                </Link>
                <Link to="/">
                  <div className="cursor-pointer block py-6 px-4 md:px-16 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      انظمة السداد
                    </p>
                  </div>
                </Link>
                <Link to="/">
                  <div className="cursor-pointer block py-6 px-4 md:px-16 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      الدفعات
                    </p>
                  </div>
                </Link>
                <Link to="/">
                  <div className="cursor-pointer block py-6 px-4 md:px-16 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      مواعيد الاستحقاق
                    </p>
                  </div>
                </Link>
                <Link to="/customers">
                  <div className="cursor-pointer block py-6 px-4 md:px-16 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      العملاء
                    </p>
                  </div>
                </Link>
                <Link to="/">
                  <div className="cursor-pointer block py-6 px-4 md:px-16 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      جدول المدفوعات
                    </p>
                  </div>
                </Link>
                <Link to="/">
                  <div className="cursor-pointer block py-6 px-4 md:px-16 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700">
                    <p className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                      جدول الاقساط
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
