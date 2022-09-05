import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <>
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
    </>
  );
};

export default Settings;
