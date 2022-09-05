import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { BsMoon, BsSun } from "react-icons/bs";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { darkTheme } from "../context/darkTheme";
export default function Header() {
  const { isDark, toggleDark, isShow, toggleMenu } = useContext(darkTheme);
  return (
    <div
      className={
        isShow
          ? `w-full h-16 bg-white shadow-lg flex items-center justify-between px-10 fixed z-50 dark:bg-slate-800 dark:text-white`
          : `w-full h-16 bg-white shadow-lg flex items-center justify-between px-10 fixed z-50 dark:bg-slate-800 dark:text-white`
      }
    >
      <div className="cursor-pointer text-xl">
        {!isShow ? (
          <FaBars onClick={toggleMenu} />
        ) : (
          <AiOutlineClose onClick={toggleMenu} />
        )}
      </div>
      <div className="flex items-center gap-4 text-xl">
        <button onClick={toggleDark}>{isDark ? <BsSun /> : <BsMoon />}</button>
        <span className="text-lg font-semibold cursor-pointer">
          <Link to="/profile">
            <AccountCircleIcon />
          </Link>
        </span>
      </div>
    </div>
  );
}
