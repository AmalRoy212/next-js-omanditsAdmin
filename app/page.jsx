"use client"
import styles from './page.module.css';
import Loader from './ui/loader/Loader';
import LoginForm from './ui/login/loginForm/LoginForm';

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <LoginForm/>
        {/* <Loader /> */}
      </div>
    </main>
  )
}
