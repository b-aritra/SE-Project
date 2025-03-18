import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
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
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
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