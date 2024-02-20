"use client"
import React, { useState, useEffect } from 'react';
import Register from '../ui/delegates/register/Register';
import Verify from '../ui/delegates/verify/Verify';
import emailjs from '@emailjs/browser'

function Page() {

  const [ error, setError ] = useState(null);
  const [ register, setRegister ] = useState(true);
  const [ popUp, setPopUp ] = useState(false);

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
      
    </div>
  );
}

export default Page;
