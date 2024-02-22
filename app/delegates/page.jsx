"use client"
import React, { useState, useEffect } from 'react';
import Register from '../ui/delegates/register/Register';
import Verify from '../ui/delegates/verify/Verify';
import emailjs from '@emailjs/browser';
import Loader from '../ui/loader/Loader';
import Navbar from '../ui/delegates/navbar/Navbar';
import Footer from '../ui/delegates/footer/Footer';


function Page() {

  const [ error, setError ] = useState(null);
  const [ register, setRegister ] = useState(true);
  const [ popUp, setPopUp ] = useState(false);
  const [ loader, setLoader ] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setError(null);
    }, 3000);

    (function(){
      emailjs.init({
        publicKey: "iMBmW4ddMSG0gl5yp",
      });
   })();

    return () => clearTimeout(timer);
  }, [error]); 

  return (
    <div>
      <img src="https://images.vexels.com/media/users/3/145258/raw/34c0da699da0478a4086d0760f376b2c-minimalist-wavy-white-background.jpg" className='absolute top-0 w-full h-full object-cover overflow-hidden' alt="" />
      <Navbar/>
      {
        register ? 
        (
          <Register error={error} setError={setError} setRegister={setRegister} />
        )
        :
        (
          <Verify error={error} setError={setError} setRegister={setRegister} setPopUp={setPopUp} popUp={popUp} />
        )
      }
      <Footer/>
      {/* {<Loader/>} */}
    </div>
  );
}

export default Page;
