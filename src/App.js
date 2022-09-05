import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { darkTheme } from "./context/darkTheme";
import Accounts from "./pages/Accounts";
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";
import MainProjects from "./pages/MainProjects";
import Login from "./pages/Login";
function App() {
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
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/projects/main-project" element={<MainProjects />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
