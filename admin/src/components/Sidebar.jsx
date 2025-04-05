import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';
import { assets } from '../assets/assets';

const Sidebar = () => {
  const { aToken } = useContext(AdminContext); // Get aToken from context

  return (
    <div className='min-h-screen border border-zinc-300'>
      {
        aToken && (
          <ul className='text-[#515151] mt-5'>
            <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-indigo-400' :''}`} to={'/admin-dashboard'}>
              <img src={assets.home_icon} alt="Home" />
              <p>Dashboard</p>
            </NavLink>
            
            <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-indigo-400' :''}`} to={'/all-appointments'}>
              <img src={assets.appointment_icon} alt="Appointments" />
              <p>Appointments</p>
            </NavLink>
            
            <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-indigo-400' :''}`} to={'/add-doctor'}>
              <img src={assets.add_icon} alt="Add Doctor" />
              <p>Add Doctor</p>
            </NavLink>

            <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-indigo-400' :''}`} to={'/doctor-list'}>
              <img src={assets.people_icon} alt="Doctors List" />
              <p>Doctors List</p>
            </NavLink>
          </ul>
        )
      }
    </div>
  );
}

export default Sidebar;
