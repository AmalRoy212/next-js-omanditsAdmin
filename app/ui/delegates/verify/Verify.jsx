import { updateAllDocs, updateCheckIns } from '@/app/lib/actions';
import React from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import CheckIn from '../../checkin/CheckInComp';
import emailjs from '@emailjs/browser';
import Email from '../email/Email';


function Verify({ 
  error, 
  setError, 
  setRegister, 
  popUp, 
  setPopUp, 
  isGmail, 
  setIsGmail, 
  email, 
  setEmail, 
  data,
  setData,
  setLoader
}) {

  function checkEmail(email) {
    var regex = /@gmail\.com$/;
    if (regex.test(email)) {
      return true;
    } else {
      return false;
    }
  }

  const checkGmail = function (event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    setData(data);

    if(checkEmail(data.email)){
      setIsGmail(true);
    }else{
      setLoader(true)
      handleCheckin(data, null);
    }
  }

  const handleFinalSubmit = function (){
    if(!email) return setError({message:"Please fill the required feilds"})
    setLoader(true)
    if(checkEmail(email)){ 
      setLoader(false)
      return setError({message:"Please help us with your official email adress"});
    }
    handleCheckin(data,email);
  }

  const handleCheckin = async function (data, email) {

    if(!data.email || !data.mobile){ 
      setLoader(false)
      return setError({message : "Please fill the required feilds"});
    }
    
    try {
      const { result, updatedDocuments } = await updateCheckIns(data.email, data.mobile, email);
      setLoader(false)
      setIsGmail(false);

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

        const templateId = 'template_qzsc9nk'
        const serviceId = 'service_ngnwbg2'

        emailjs
          .send(serviceId, templateId, params, "zGJeXsGcBR6hBztYp")
          .then((res) => {
          })
          .catch((error) => {
            setError(error)
          });
      } 
    } catch (error) {
      setError(error);
    }

  }

  return (
    <div className='w-full md:h-[110vh] h-[85vh] flex justify-center items-center px-2 md:p-10 flex-col relative'>
      {
        error && <div className='bg-red-800 z-30 w-[96%] md:w-[300px] min-h-[100px] absolute top-5 left-2 rounded-2xl text-white p-3 flex justify-center items-center'>
          <h3>{error.message}</h3>
        </div>
      }
      <form onSubmit={checkGmail} className="w-full md:w-[40%] md:h-auto py-10 px-2 md:px-5 bg-[#dfecfe] rounded-2xl relative flex justify-center items-center flex-col">
        <img className='absolute top-[-1.5rem]' src="https://omandits.com/assets/images/dits.png" width={50} height={50} alt="" />
        <h1 className="absolute top-10 text-black">Verify your self</h1>
        <input className='w-full p-2 border rounded-xl bg-white md:mt-10 mt-10 text-black' type="email" name="email" id="email" placeholder='Please enter your registered email id' />
        <input className='w-full p-2 border rounded-xl bg-white md:mt-10 mt-6 text-black' type="text" name="mobile" id="mobile" placeholder='Please enter your registered mobile number' />
        <button type='submit' className='p-2 mt-10 bg-green-500 px-10 rounded-2xl text-white hover:border hover:bg-green-700'>Verify</button>
        <h2 className='p-2 text-black'>OR</h2>
        <button className='flex items-center gap-2 text-[15px] bg-blue-700 py-2 px-5  rounded-2xl hover:border hover:bg-blue-900' onClick={() => setRegister(true)}><FaArrowAltCircleRight />Register</button>
      </form>
      { popUp && <CheckIn /> }  
      { isGmail && <Email setEmail={setEmail} handleFinalSubmit={handleFinalSubmit}/> }
    </div>
  )
}

export default Verify
