import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {

  const {speciality} = useParams()
  const [filterDoc, setFilterDoc] = useState([])

  const navigate = useNavigate()

  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors,speciality])


  return (
    <div>
      <p>Choose from the best doctors</p>
      <div>
        <div>
          <p>General physician</p>
          <p>Gynecologist</p>
          <p>Dermatologist</p>
          <p>pediatricians</p>
          <p>Neurologist</p>
          <p>Gastroenterologist</p>
        </div>
        <div>
          {
            filterDoc.map((item, index) => (

              <div key={item._id} onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden hover:translate-y-[-10px] transition-all duration-500 cursor-pointer'>

                <img className='bg-blue-50' src={item.image} alt="Image" />

                <div className='p-4'>

                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>

                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>

                    <p>Available</p>

                  </div>

                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>

                  <p className='text-gray-600 text-sm'>{item.speciality}</p>

                </div>

              </div>

            ))}
        </div>
      </div>
    </div>
  )
}

export default Doctors