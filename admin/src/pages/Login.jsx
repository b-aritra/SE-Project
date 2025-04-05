import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [state, setState] = useState('Admin')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setAToken, backendUrl } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === 'Admin') {
        const { data } = await axios.post(`${backendUrl}/api/admin/login`, { email, password });

        if (data.success) {
          setAToken(data.token); // ✅ First, update React state
          localStorage.setItem('aToken', data.token); // ✅ Then, update localStorage
          toast.success("Login successful! 🎉");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data?.message || error.message);
      toast.error(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <form className='min-h-[80vh] flex items-center' onSubmit={onSubmitHandler} id='login_form'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border-amber-50 rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'><span className='text-indigo-400'>{state}</span> Login</p>

        <div className='w-full'>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='border border-[#DADADA] rounded w-full p-2 mt-1' required />
        </div>

        <button type='submit' className='bg-indigo-400 text-white w-full py-2 rounded-md text-base cursor-pointer'>Login</button>

        {state === 'Admin' ? (
          <p>Doctor Login? <span onClick={() => setState('Doctor')} className='text-indigo-400 underline cursor-pointer'>Click Here</span></p>
        ) : (
          <p>Admin Login? <span onClick={() => setState('Admin')} className='text-indigo-400 underline cursor-pointer'>Click Here</span></p>
        )}
      </div>
    </form>
  );
};

export default Login;
