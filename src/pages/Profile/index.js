import Avatar from "../../assets/avatar.jpg";
const Profile = () => {
  return (
    <div className="w-[90%] h-96 flex flex-col p-6 bg-white rounded-lg shadow-xl dark:bg-gray-900">
      <div className="my-5 text-center">
        <h2>إسم المستخدم</h2>
      </div>
      <div className="flex justify-around items-center">
        <img src={Avatar} alt="avatar" className="rounded-lg w-36 h-28" />
        <div>
          <button
            type="button"
            className="py-2.5 px-5 mr-2 mt-3 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            تعديل البيانات
          </button>
        </div>
      </div>
      <div className="overflow-x-auto relative mt-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                ID
              </th>
              <th scope="col" className="py-3 px-6">
                السن
              </th>
              <th scope="col" className="py-3 px-6">
                الجنس
              </th>
              <th scope="col" className="py-3 px-6">
                الهاتف
              </th>
              <th scope="col" className="py-3 px-6">
                الوظيفة
              </th>
              <th scope="col" className="py-3 px-6">
                الصلاحية
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
              <td className="py-4 px-6">21</td>
              <td className="py-4 px-6">Male</td>
              <td className="py-4 px-6">01554887447</td>
              <td className="py-4 px-6">Programmer</td>
              <td className="py-4 px-6">accounting</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profile;
