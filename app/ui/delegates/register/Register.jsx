import { registerDirectDelegates } from '@/app/lib/actions';
import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";

function Register({ error, setError, setRegister }) {

  const handleCheckin = async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target); 
    const data = Object.fromEntries(formData.entries());

    try {
      await registerDirectDelegates(data);
    } catch (error) {
      error && setError(error)
    }
  }

  return (
    <div className='w-full h-[100vh] flex justify-center items-center p-10 flex-col relative'>
      {
        error && <div className='bg-red-800 w-[96%] md:w-[300px] min-h-[100px] absolute top-5 left-2 rounded-2xl text-white p-3 flex justify-center items-center'>
          <h3>{error.message}</h3>
        </div>
      }
      <h1 className='absolute top-10 text-[22px] bg-[#182237] p-5 rounded-2xl flex gap-3 items-center'>You already have registered mail id ?? <button className='flex items-center gap-2 text-[15px] bg-yellow-700 py-1 px-3 rounded' onClick={() => setRegister(false)}><FaArrowAltCircleRight />Verify</button></h1>
      <form onSubmit={handleCheckin} className="w-full md:w-[50%] h-auto p-10 bg-[#182237] rounded-2xl relative flex justify-center items-center flex-col">
        <img className='absolute top-[-1.5rem]' src="https://omandits.com/assets/images/dits.png" width={50} height={50} alt="" />
        <h1 className="absolute top-10">Delegate Form</h1>
        <div className='w-full h-auto md:flex-row flex-col flex gap-5 justify-center items-center md:mt-10 mt-[5rem]'>
          <input className='w-full p-2 border rounded-xl bg-[#151c2c]' type="text" name="fname" id="fname" placeholder='First name' />
          <input className='w-full p-2 border rounded-xl bg-[#151c2c]' type="text" name="lname" id="lname" placeholder='Last name' />
        </div>
        <div className='w-full h-auto md:flex-row flex-col flex gap-5 justify-center items-center md:mt-10 mt-6'>
          <input className='w-full p-2 border rounded-xl bg-[#151c2c]' type="email" name="email" id="email" placeholder='Email' />
          <input className='w-full p-2 border rounded-xl bg-[#151c2c]' type="text" name="job" id="job" placeholder='Job title' />
        </div>
        <input className='w-full p-2 border rounded-xl bg-[#151c2c] md:mt-10 mt-6' type="companyName" name="companyName" id="companyName" placeholder='Company name' />
        <button type='submit' className='p-2 mt-10 bg-green-500 px-10 rounded-2xl text-black'>Register</button>
      </form>
    </div>
  )
}

export default Register;
