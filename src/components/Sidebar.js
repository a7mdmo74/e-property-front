import { AiFillHome } from "react-icons/ai";
import { BsBuilding, BsFillPeopleFill } from "react-icons/bs";
import { ImStatsBars } from "react-icons/im";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { darkTheme } from "../context/darkTheme";
export default function Sidebar() {
  const { toggleMenu, isShow, isDark } = useContext(darkTheme);
  return (
    <div
      className={
        isShow
          ? `min-h-screen min-w-full flex justify-center md:min-w-[250px] fixed left-0 pt-16 z-40 transition-all ease-in-out `
          : "min-h-screen fixed -left-full z-40 transition-all ease-in-out "
      }
    >
      <div
        className={
          isDark
            ? "w-full min-h-screen bg-gray-900 text-white"
            : "w-full min-h-screen bg-[#f0f0f0] text-dark/95"
        }
      >
        <div className="flex flex-col items-center pt-10">
          <ul className="w-full flex flex-col">
            <NavLink to="/">
              <li
                className="flex gap-2 text-2xl duration-200 p-4 rounded-tl-xl  rounded-bl-xl cursor-pointer my-2"
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
            </NavLink>
            <NavLink to="/projects">
              <li
                className="flex gap-2 text-2xl duration-200 p-4 rounded-tl-xl  rounded-bl-xl cursor-pointer my-2"
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
            </NavLink>
            <NavLink to="/customers">
              <li
                className="flex gap-2 text-2xl duration-200 p-4 rounded-tl-xl  rounded-bl-xl cursor-pointer my-2"
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
            </NavLink>
            <NavLink to="/accounts">
              <li
                className="flex gap-2 text-2xl duration-200 p-4 rounded-tl-xl  rounded-bl-xl cursor-pointer my-2"
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
            </NavLink>
            <NavLink to="/settings">
              <li
                className="flex gap-2 text-2xl duration-200 p-4 rounded-tl-xl  rounded-bl-xl cursor-pointer my-2"
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
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
