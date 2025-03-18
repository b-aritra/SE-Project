import React, { use, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, setShowMenu] =  useState(false)
    const [token, setToken] = useState(true)

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>

            <img className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />

            <ul className='hidden md:flex items-start gap-5 font-medium '>

                <NavLink to='/' className={({ isActive }) => isActive ? 'text-indigo-400 font-semibold border-b-2 border-indigo-400 pb-1' : 'text-gray-700'}>
                    <li className='py-1'>Home</li>
                    <hr className='border-none outline-none h-0.5 bg-indigo-400 w3/5 m-auto hidden' />      
                    </NavLink>

                <NavLink to='/doctors' className={({ isActive }) => isActive ? 'text-indigo-400 font-semibold border-b-2 border-indigo-400 pb-1' : 'text-gray-700'}>
                    <li className='py-1'>All Doctors</li>
                    <hr className='border-none outline-none h-0.5 bg-indigo-400 w3/5 m-auto hidden' />
                </NavLink>

                <NavLink to='/about' className={({ isActive }) => isActive ? 'text-indigo-400 font-semibold border-b-2 border-indigo-400 pb-1' : 'text-gray-700'}>
                    <li className='py-1'>About</li>
                    <hr className='border-none outline-none h-0.5 bg-indigo-400 w3/5 m-auto hidden' />       
                    </NavLink>

                <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-indigo-400 font-semibold border-b-2 border-indigo-400 pb-1' : 'text-gray-700'}>
                    <li className='py-1'>Contact</li>
                    <hr className='border-none outline-none h-0.5 bg-indigo-400 w3/5 m-auto hidden' />         
                    </NavLink>
            </ul>
            <div className='flex items-center'>
                
                {
                    token 
                    ? <div className='flex items-center gap-2 cursor-pointer group relative'>
                        <img className='w-8 rounded-full' src={assets.profile_pic} alt="profile picture" />
                        <img className='w-2.5' src={assets.dropdown_icon} alt="profile picture" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                        <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                        <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                        <p onClick={()=> setToken(false)} className='hover:text-black cursor-pointer'>Logout </p>
                        </div>
                    </div>
                    </div>
                    : <button onClick={()=>navigate('/login')} className='bg-indigo-400 text-white px-8 py-3 rounded-full font-light hidden md:block hover:cursor-pointer'>Create Account</button>
                }
                
                
            </div>
        </div>
    )
}

export default Navbar