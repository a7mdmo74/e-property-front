import axios from "axios";
import { useState } from "react";

function UserModal({ toggleModal }) {
  const [fName, setfName] = useState("");
  const [mName, setmName] = useState("");
  const [lName, setlName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [national, setNational] = useState("");
  const [phone, setPhone] = useState("");
  const [info, setInfo] = useState("");
  const [gender, setGender] = useState("male");

  const postData = (e) => {
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/customers`, {
      name: fName,
      mid_name: mName,
      lName: lName,
      email,
      age,
      gender,
      phone,
      national_id: national,
    });
  };

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
              إضافة عميل
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
            <form
              className="flex flex-col items-center gap-3 mt-6 dark:text-black"
              method="post"
              onSubmit={postData}
            >
              CSRF()
              <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                <input
                  type="text"
                  className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
                  placeholder="اسم المستخدم"
                  value={fName}
                  onChange={(e) => setfName(e.target.value)}
                />
                <input
                  type="text"
                  className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
                  placeholder="الاسم الاوسط"
                  value={mName}
                  onChange={(e) => setmName(e.target.value)}
                />
                <input
                  type="text"
                  className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
                  placeholder="اللقب"
                  value={lName}
                  onChange={(e) => setlName(e.target.value)}
                />
                <input
                  type="number"
                  className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
                  placeholder="العمر"
                  min={22}
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <input
                  type="text"
                  className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
                  placeholder="البريد الالكتروني"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
                  placeholder="رقم الهاتف"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  type="number"
                  className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
                  placeholder="الرقم القومي"
                  value={national}
                  onChange={(e) => setNational(e.target.value)}
                />
                <input
                  type="text"
                  className="py-2 px-3 border-2 border-slate-200 rounded-lg w-full outline-none font-serif"
                  placeholder="بيانات إضافية"
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-6 my-4">
                <div className="flex items-center">
                  <input
                    checked={gender === "male"}
                    id="default-radio-1"
                    type="radio"
                    value="male"
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={() => setGender("male")}
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Male
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    checked={gender === "female"}
                    id="default-radio-2"
                    type="radio"
                    value="female"
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onChange={() => setGender("female")}
                  />
                  <label
                    htmlFor="default-radio-2"
                    className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Female
                  </label>
                </div>
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
              onClick={postData}
            >
              إضافة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserModal;
