import React from 'react';
import styles from "@/app/ui/login/login.module.css";
import { authenticate, setAdmin } from '../lib/actions';
import LoginForm from '../ui/login/loginForm/LoginForm';

function LoginPage() {
  return (
    <div className={styles.container}>
      <LoginForm/>
    </div>
  )
}

export default LoginPage