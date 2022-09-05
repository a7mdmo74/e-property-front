import { AiFillHome } from "react-icons/ai";
import { BsBuilding, BsFillPeopleFill } from "react-icons/bs";
import { ImStatsBars } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { darkTheme } from "../context/darkTheme";
export default function Sidebar({ isShow }) {
  const { toggleMenu } = useContext(darkTheme);
  return (
    <div
      className={
        isShow
          ? `bg-gray-900 text-white min-h-screen min-w-full flex justify-center md:min-w-[250px] fixed left-0 pt-16 z-40 transition-all ease-in-out `
          : "bg-gray-900 text-white min-h-screen fixed -left-full z-40 transition-all ease-in-out "
      }
    >
      <div className="flex flex-col items-center pt-10">
        <ul className="w-full flex flex-col">
          <Link to="/">
            <li
              className="flex gap-2 text-2xl mb-6 duration-200 p-4 rounded-tl-xl  rounded-bl-xl cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 600) {
                  toggleMenu();
                }
              }}
            >
              <span>
                <AiFillHome />
              </span>
              <p
                className={
                  !isShow
                    ? `opacity-0 group-hover:opacity-100 duration-100`
                    : "opacity-100 duration-100"
                }
              >
                الرئيسية
              </p>
            </li>
          </Link>
          <Link to="/projects">
            <li
              className="flex gap-2 text-2xl mb-6 duration-200 p-4 rounded-tl-xl  rounded-bl-xl cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 600) {
                  toggleMenu();
                }
              }}
            >
              <span>
                <BsBuilding />
              </span>
              <p
                className={
                  !isShow
                    ? `opacity-0 group-hover:opacity-100 duration-100`
                    : "opacity-100 duration-100"
                }
              >
                المشاريع
              </p>
            </li>
          </Link>
          <Link to="/customers">
            <li
              className="flex gap-2 text-2xl mb-6 duration-200 p-4 rounded-tl-xl  rounded-bl-xl cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 600) {
                  toggleMenu();
                }
              }}
            >
              <span>
                <BsFillPeopleFill />
              </span>
              <p
                className={
                  !isShow
                    ? `opacity-0 group-hover:opacity-100 duration-100`
                    : "opacity-100 duration-100"
                }
              >
                العملاء
              </p>
            </li>
          </Link>
          <Link to="/accounts">
            <li
              className="flex gap-2 text-2xl mb-6 duration-200 p-4 rounded-tl-xl  rounded-bl-xl cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 600) {
                  toggleMenu();
                }
              }}
            >
              <span>
                <ImStatsBars />
              </span>
              <p
                className={
                  !isShow
                    ? `opacity-0 group-hover:opacity-100 duration-100`
                    : "opacity-100 duration-100"
                }
              >
                الحسابات
              </p>
            </li>
          </Link>
          <Link to="/settings">
            <li
              className="flex gap-2 text-2xl mb-6 duration-200 p-4 rounded-tl-xl  rounded-bl-xl cursor-pointer"
              onClick={() => {
                if (window.innerWidth < 600) {
                  toggleMenu();
                }
              }}
            >
              <span>
                <IoMdSettings />
              </span>
              <p
                className={
                  !isShow
                    ? `opacity-0 group-hover:opacity-100 duration-100`
                    : "opacity-100 duration-100"
                }
              >
                الإعدادات
              </p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
