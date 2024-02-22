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
      <div  style={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }} className="w-full md:w-[40%] min-h-[40vh] p-10 bg-[#e6e6e6] rounded-2xl relative flex justify-center items-center flex-col">
        <img className='absolute top-[-1.5rem] bg-slate-800 rounded-full' src="https://omandits.com/assets/images/dits.png" width={50} height={50} alt="" />
        <a href="https://omandits.com/delegateEnquiry.html" className='flex items-center gap-2 md:text-[15px] text-[12px] py-2 px-12 rounded-lg bg-green-800 hover:border hover:bg-green-600'><FaArrowAltCircleRight />Countinue as a new delegate</a>
        <h1 className='text-black'>OR</h1> 
        <button className='flex items-center gap-2 md:text-[15px] text-[12px]  py-2 md:px-6 px-7 rounded-lg bg-blue-800 hover:border hover:bg-blue-600' onClick={() => setRegister(false)}><FaArrowAltCircleRight />Verify your registered email address</button>
      </div>
    </div>
  )
}

export default Register;
