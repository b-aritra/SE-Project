import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate();


    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                {/* Left Section */}
                <div>
                    <img className='mb-5 w-40' src={assets.logo} alt="Logo" />
                    <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt ipsum laboriosam, ad exercitationem quaerat tempore ducimus dolorum veritatis voluptates nostrum hic libero accusantium dolorem. Similique non quod molestiae eveniet!</p>
                </div>


                {/* Center Section */}
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>

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
                </div>

                {/* Right Section */}
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-2 text-gray-600'>
                        <li>+91-XXX-XXX-XXXX</li>
                        <li>appointease@example.com</li>
                    </ul>
                </div>
            </div>

            {/* Copyright Info */}
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2025 &copy; AppointEase | All Rights are reserved.</p>
            </div>
        </div>
    )
}

export default Footer