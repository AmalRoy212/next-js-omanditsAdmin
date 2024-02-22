import { updateAllDocs, updateCheckIns } from '@/app/lib/actions';
import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import CheckIn from '../../checkin/CheckInComp';
import emailjs from '@emailjs/browser';


function Verify({ error, setError, setRegister, popUp, setPopUp }) {

  const handleCheckin = async function (event) {
    event.preventDefault();

    

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const { result, updatedDocuments } = await updateCheckIns(data.email, data.mobile);

      const delegate = updatedDocuments[0];

      if (result.message){
        setError(result);
        return
      }

      if (result.matchedCount === 1) {
        setPopUp(result);
        const params = {
          name: delegate.name,
          companyName: delegate.companyName,
          country: delegate.country,
          email: delegate.email,
          industry: delegate.industry,
          jobTitle: delegate.jobTitle,
          lookingFor: delegate.lookingFor,
          numOfEmployees: delegate.numOfEmployees,
          phone: delegate.phone,
          role: delegate.role,
          timing: delegate.timing,

        }

        const templateId = 'template_ir9lddd'
        const serviceId = 'service_8ke8tpa'

        emailjs
          .send(serviceId, templateId, params, "iMBmW4ddMSG0gl5yp")
          .then((res) => {
            console.log(res)
          })
          .catch((error) => {
            console.log(error)
            setError(error)
          });


      } 
    } catch (error) {
      setError(error);
    }

  }

  return (
    <div className='w-full h-[100vh] flex justify-center items-center p-10 flex-col relative'>
      {
        error && <div className='bg-red-800 z-10 w-[96%] md:w-[300px] min-h-[100px] absolute top-5 left-2 rounded-2xl text-white p-3 flex justify-center items-center'>
          <h3>{error.message}</h3>
        </div>
      }
      <h1 className='absolute top-10 text-[22px] bg-[#182237] p-5 rounded-2xl flex gap-3 items-center'>Register as new ?? <button className='flex items-center gap-2 text-[15px] bg-blue-700 py-1 px-3 rounded' onClick={() => setRegister(true)}><FaArrowAltCircleRight />Register</button></h1>
      <form onSubmit={handleCheckin} className="w-full md:w-[50%] h-auto p-10 bg-[#182237] rounded-2xl relative flex justify-center items-center flex-col">
        <img className='absolute top-[-1.5rem]' src="https://omandits.com/assets/images/dits.png" width={50} height={50} alt="" />
        <h1 className="absolute top-10">Verify your self</h1>
        <input className='w-full p-2 border rounded-xl bg-[#151c2c] md:mt-10 mt-6' type="email" name="email" id="email" placeholder='Please enter your registered email id' />
        <input className='w-full p-2 border rounded-xl bg-[#151c2c] md:mt-10 mt-6' type="text" name="mobile" id="mobile" placeholder='Please enter your registered mobile number' />
        <button type='submit' className='p-2 mt-10 bg-green-500 px-10 rounded-2xl text-black'>Verify</button>
      </form>
      {popUp && <CheckIn />}
      {/* <div className="selection:bg-rose-500 selection:text-white">
  <div className="min-h-screen flex justify-center items-center">
    <div className="p-8 flex-1">
      <div className="w-full bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
        <div className="relative h-48 bg-rose-500 rounded-bl-4xl">
          <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
          <h1 className="text-2xl font-semibold text-gray-900">Welcome back!</h1>
          <form className="mt-12" action="" method="POST">
            <div className="relative">
              <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="john@doe.com" />
              <label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email address</label>
            </div>
            <div className="mt-10 relative">
              <input id="password" type="password" name="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="Password" />
              <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
            </div>

            <input type="sumbit" value="Sign in" className="mt-20 px-4 py-2 rounded bg-rose-500 hover:bg-rose-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer" />
          </form>
          <a href="#" className="mt-4 block text-sm text-center font-medium text-rose-600 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500"> Forgot your password? </a>
        </div>
      </div>
    </div>
  </div>
</div> */}
    </div>
  )
}

export default Verify
