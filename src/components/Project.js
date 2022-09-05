import { Link } from "react-router-dom";
const Project = ({ project }) => {
  const { id, name, section, types } = project;
  return (
    <tr
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center group"
      id={id}
    >
      <td
        scope="row"
        className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white  group-hover:bg-gray-50 dark:group-hover:bg-gray-600"
      >
        <Link to="/projects/main-project">{id}</Link>
      </td>
      <td className="py-4 px-6  group-hover:bg-gray-50 dark:group-hover:bg-gray-600">
        <Link to="/projects/main-project">{name}</Link>
      </td>
      <td className="py-4 px-6  group-hover:bg-gray-50 dark:group-hover:bg-gray-600">
        <Link to="/projects/main-project">{section}</Link>
      </td>
      <td className="py-4 px-6 group-hover:bg-gray-50 dark:group-hover:bg-gray-600">
        {types.map((type) => {
          const { id, name } = type;
          return (
            <p
              key={id}
              className="px-3 flex flex-col gap-2 group-hover:bg-gray-50 dark:group-hover:bg-gray-600"
            >
              <Link to="/projects/main-project">{name}</Link>
            </p>
          );
        })}
      </td>
    </tr>
  );
};

export default Project;
