import React from "react";

const ProjectModal = ({ toggleModal }) => {
  return (
    <div
      id="defaultModal"
      tabIndex="-1"
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 w-full md:inset-0 h-screen justify-center items-center flex bg-slate-800/75"
      aria-modal="true"
      role="dialog"
      dir="rtl"
    >
      <div className="relative p-4 w-full max-w-4xl h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              إضافة مشروع جديد
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mr-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => toggleModal()}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-6 space-y-6">
            <form className="flex flex-col items-center gap-3 mt-6">
              <div className="flex flex-col gap-4 w-full">
                <input
                  type="text"
                  className="py-1 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
                  placeholder="اسم المشروع"
                />
                <select
                  defaultValue={"DEFAULT"}
                  id="projects"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="DEFAULT" disabled>
                    اختر القسم
                  </option>
                  <option value="سكنى ادارى تجارى">سكنى ادارى تجارى</option>
                  <option value="سكني تجاري">سكني تجاري</option>
                  <option value="سكني اداري">سكني اداري</option>
                  <option value="تجاري اداري">تجاري اداري</option>
                  <option value="سكني طبي تجاري">سكني طبي تجاري</option>
                  <option value="تجاري">تجاري</option>
                  <option value="سكني">سكني</option>
                </select>
                <select
                  defaultValue={"DEFAULT"}
                  id="projects"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="DEFAULT" disabled>
                    اقسام مباني المشروع
                  </option>
                  <option value="US">سكنى ادارى تجارى</option>
                  <option value="CA">سكني تجاري</option>
                </select>
              </div>
            </form>
          </div>
          <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 ml-2"
              onClick={toggleModal}
            >
              إلغاء
            </button>
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              إضافة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
