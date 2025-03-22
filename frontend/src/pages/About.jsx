import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='mv-10 flex flex-col md:flex-row gap-12 '>
        <img className='w-full md:max-w-[360px]' src={assets.about} alt="Image" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm-gray-600 '>
          <p>Welcome to AppointEase, your trusted platform in managing your healthcare needs</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, ab officiis qui non, nesciunt nulla dolore aperiam, quasi et quas molestiae sit! Similique necessitatibus accusantium voluptatibus vero fuga officiis dicta.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus facere aliquam nemo vitae sunt autem nesciunt temporibus laborum tempora hic.</p>
        </div>
      </div>


      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indigo-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency: </b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, aut maiores vel tempora magni quas? Minima voluptate, eaque eius fuga eligendi, culpa consequuntur aliquid ipsa, ducimus impedit cupiditate molestiae consectetur?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indigo-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience: </b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, inventore est amet fugiat sed ipsa temporibus recusandae consequuntur pariatur quisquam perferendis! Ducimus exercitationem tempore sequi nulla nam deserunt nihil velit?</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-indigo-400 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization: </b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta minus cupiditate sunt quidem, voluptatibus doloremque possimus iste repellat tenetur aut veniam. Id, optio! Distinctio quae deserunt esse cupiditate laborum debitis.</p>
        </div>

      </div>

    </div>
  )
}

export default About