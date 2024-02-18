"use client"
import React, { useState, useEffect } from 'react';
import Register from '../ui/delegates/register/Register';
import Verify from '../ui/delegates/verify/Verify';

function Page() {

  const [ error, setError ] = useState(null);
  const [ register, setRegister ] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setError(null);
    }, 3000);

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
          <Verify error={error} setError={setError} setRegister={setRegister} />
        )
      }
      
    </div>
  );
}

export default Page;
