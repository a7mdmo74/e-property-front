import { useEffect, useState } from "react";
import Project from "../../components/Project";
import ProjectModal from "../../components/Modal/ProjectModal";
import axios from "axios";
export default function Projects({ results }) {
  const [projects, setProjects] = useState([]);
  const [isModal, setIsModal] = useState(false);

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5050/projects`);
      setProjects(response.data);
    } catch (error) {
      console.warn(error.message);
    }
  };

  useEffect(() => {
    const getProjects = async () => {
      await fetchData();
    };
    getProjects();
  }, []);

  return (
    <>
      {isModal && <ProjectModal toggleModal={toggleModal} />}
      <div className="flex items-center justify-between px-6 py-3 w-full">
        <button
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => setIsModal(true)}
        >
          إضافة مشروع جديد
        </button>
      </div>
      <div className="overflow-x-auto relative px-6 w-full">
        <table className="w-full text-gray-700 dark:text-gray-400">
          <thead className="text-sm md:text-md text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                id
              </th>
              <th scope="col" className="py-3 px-6">
                المشروع
              </th>
              <th scope="col" className="py-3 px-6">
                القسم
              </th>
              <th scope="col" className="py-3 px-6">
                اقسام مباني المشروع
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => {
              const { id } = project;
              return <Project key={id} project={project} />;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
