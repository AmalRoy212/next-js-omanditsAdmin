import React, { useState } from 'react';
import styles from './loginform.module.css'
import { authenticate } from '@/app/lib/actions';
import { useDispatch } from 'react-redux';
import { setLoader } from '@/app/store/loadingSlice';

function LoginForm() {

  const dispatch = useDispatch();

  const [ error, setError ] = useState();

  const loginHandle = async (formData) => {
    const data = await authenticate(formData);
    data.error && setError(data.error)
  }

  return (
    <div className={styles.container}>
      <form action={loginHandle} className={styles.form}>
        <img src="https://omandits.com/assets/images/dits.png" width={50} height={50} alt="" />
        <h5 style={{color:"red"}}>{error && error}</h5>
        <h1>Login</h1>
        <input type="text" name="username" id="" placeholder='username' />
        <input type="password" name="password" id="" placeholder='password' />
        <button onClick={() => dispatch(setLoader())}>Login</button>
      </form>
    </div>
  )
}

export default LoginForm
