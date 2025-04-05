import React, { useContext, useEffect, useState } from "react";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from './pages/Admin/Dashboard'
import AllAppointments from './pages/Admin/AllAppointments'
import AddDoctor from './pages/Admin/AddDoctor'
import DoctorsList from './pages/Admin/DoctorsList'

const App = () => {
  const { aToken } = useContext(AdminContext);
  const [isAuth, setIsAuth] = useState(!!aToken);

  // ✅ Update `isAuth` whenever `aToken` changes
  useEffect(() => {
    console.log("🔥 Token change detected in App.js:", aToken);
    setIsAuth(!!aToken);
  }, [aToken]); // ✅ Runs every time `aToken` updates

  if (aToken === undefined) return <div>Loading...</div>;

  return (
    <>
      <ToastContainer />
      {isAuth ? (
        <div className="bg-[#F8F9FD] min-h-screen">
          <Navbar />
          <div className="p-6">Welcome to the Dashboard</div>

          <div className="flex items-start">
            <Sidebar />
            <Routes>
              <Route path="/" element={<></>} />
              <Route path="/admin-dashboard" element={<Dashboard />} />
              <Route path="/all-appointments" element={<AllAppointments />} />
              <Route path="/add-doctor" element={<AddDoctor />} />
              <Route path="/doctor-list" element={<DoctorsList />} />
            </Routes>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default App;
