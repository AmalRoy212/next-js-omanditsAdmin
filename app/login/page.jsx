import React from 'react';
import styles from "@/app/ui/login/login.module.css";
import LoginForm from '../ui/login/loginForm/LoginForm';
import connectToDB from '../lib/utils';
import { setAdmin } from '../lib/actions';

function LoginPage() {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  )
}

export default LoginPage