import { Route, Routes } from "react-router-dom";
import Accounts from "./pages/Accounts";
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";
import MainProjects from "./pages/MainProjects";
import Login from "./pages/Login";
import ProjectID from "./pages/ProjectID";
import UnitID from "./pages/UnitID";
import Register from "./pages/Register";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/projects/main-project" element={<MainProjects />} />
      <Route path="/projects/project/:id" element={<ProjectID />} />
      <Route path="/projects/unit/:id" element={<UnitID />} />
    </Routes>
  );
}

export default App;
