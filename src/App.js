import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Adminlogin from "./pages/Adminlogin";
import Adduser from "./pages/Adduser";
import Dashboard from "./pages/DashBoard";
import Fpass from "./components/Cards/Forgot_pass/Fpass";
import CsvDetails from "./pages/CsvDetails";
import Resetpw from "./components/Cards/Reset_password/Resetpw";
import Logout from "./pages/Logout";
import ListUsers from "./pages/ListUsers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Adminlogin />} />
        <Route path="/add" element={<Adduser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pass" element={<Fpass />} />
        <Route path="/csv" element={<CsvDetails />} />
        <Route path="/reset" element={<Resetpw />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/Lusers" element={<ListUsers />} />
      </Routes>
    </>
  );
}

export default App;
