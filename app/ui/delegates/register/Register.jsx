import { registerDirectDelegates } from '@/app/lib/actions';
import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";


function Register({ error, setError, setRegister }) {

  const handleCheckin = async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target); 
    const data = Object.fromEntries(formData.entries());

    if (!data.fname, !data.lname, !data.job, !data.email, !data.companyName){
      setError("Please fill the required feilds")
    }

    if(checkEmail(data.email)){
      setError({message:"Please enter a official email address"});
      return
    }

    try {
      await registerDirectDelegates(formData);
      window.location.href = '/checkin';  
    } catch (error) {
      error && setError(error)
    }
  }

  function checkEmail(email) {
    var regex = /@gmail\.com$/;
    if (regex.test(email)) {
      return true;
    } else {
      return false;
    }
  }


  return (
    <div className='w-full h-[85vh]  flex justify-center items-center p-2 md:p-10 flex-col relative'>
      {
        error && <div className='z-10 bg-red-800 w-[96%] md:w-[300px] min-h-[100px] absolute top-5 left-2 rounded-2xl text-white p-3 flex justify-center items-center'>
          <h3>{error.message}</h3>
        </div>
      }
      {/* <h1 className='absolute top-10 text-[22px] bg-[#182237] p-5 rounded-2xl flex gap-3 items-center'>Please Verify Your Registered Email Address To Check In At The Event<button className='flex items-center gap-2 text-[15px] bg-green-700 py-1 px-3 rounded' onClick={() => setRegister(false)}><FaArrowAltCircleRight />Verify</button></h1> */}
      <div className="w-full md:w-[50%] min-h-[40vh] p-10 bg-[#e6e6e6] rounded-2xl relative flex justify-center items-center flex-col">
        <img className='absolute top-[-1.5rem] bg-slate-800 rounded-full' src="https://omandits.com/assets/images/dits.png" width={50} height={50} alt="" />
        {/* <h1 className="absolute top-10">Delegate Form</h1> */}
        {/* <div className='w-full h-auto md:flex-row flex-col flex gap-5 justify-center items-center md:mt-10 mt-[5rem]'>
          <input required className='w-full p-2 border rounded-xl bg-[#151c2c]' type="text" name="fname" id="fname" placeholder='First name' />
          <input required className='w-full p-2 border rounded-xl bg-[#151c2c]' type="text" name="lname" id="lname" placeholder='Last name' />
        </div>
        <div className='w-full h-auto md:flex-row flex-col flex gap-5 justify-center items-center md:mt-10 mt-6'>
          <input required className='w-full p-2 border rounded-xl bg-[#151c2c]' type="email" name="email" id="email" placeholder='Email' />
          <input required className='w-full p-2 border rounded-xl bg-[#151c2c]' type="text" name="job" id="job" placeholder='Job title' />
        </div>
        <input required className='w-full p-2 border rounded-xl bg-[#151c2c] md:mt-10 mt-6' type="companyName" name="companyName" id="companyName" placeholder='Company name' />
        <button type='submit' className='p-2 mt-10 bg-green-500 px-10 rounded-2xl text-black'>Register</button> */}
        
        <a href="https://omandits.com/delegateEnquiry.html" className='flex items-center gap-2 md:text-[15px] text-[12px] py-2 px-12 rounded-lg bg-green-800 hover:border hover:bg-green-600'><FaArrowAltCircleRight />Countinue as a new delegate</a>
        <h1 className='text-black'>OR</h1> 
        <button className='flex items-center gap-2 md:text-[15px] text-[12px]  py-2 md:px-6 px-7 rounded-lg bg-blue-800 hover:border hover:bg-blue-600' onClick={() => setRegister(false)}><FaArrowAltCircleRight />Verify your registered email address</button>
      </div>
    </div>
  )
}

export default Register;
