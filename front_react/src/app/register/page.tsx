"use client";

/*
 *                            Register Component
 *
 *  This file Renders The Register Page
 *
 *  Components included:
 *  - Register (Main Export Function)
 *  - TabInfo
 *  - Icon
 *  - RegHeader
 *  - RegForm
*/


import styles from './register.module.css';
import logo from '../images/logo.png';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


/*
 * Function Name :
 *    Icon
 * Description:
 *    Renders App Icon
 */

function Icon() {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo.src} alt="Logo" />
      <div className={styles.logo_text}>
        <p className={styles.BrandName}>Checkmate</p>
      </div>
    </div>
  );
}

/*
 * Function Name :
 *    RegHeader
 * Description:
 *    Returns Main Header of Registeration Page Header
 */

function RegHeader() {
  return (
    <>
      <h1 className={styles.welcome}>Register!</h1>
      <p>Get ready to take control and organize your life like never before!</p>
    </>
  );
}

/*
 * Function Name :
 *    RegForm
 * Description:
 *    Renders Form That user will fill
 */

function RegForm() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [wrongData, setWrongData] = useState(false);
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = { username, email, password };
    fetch('http://54.158.221.58/user/register', {
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify(newUser)
    }).then((r) => {
      console.log(r.status)
      if (r.ok) {
        router.push('/login')
      } else {
        setWrongData(true);
      }
    })
  }
  return (
    <form onSubmit={(e) => { handleSubmit(e) }}>
      <div className={styles.inputPlace}>
        <label className={styles.label}>
          Username<span className={styles.Req}>*</span>
        </label>
        <input
          type="text"
          name="username"
          required
          placeholder="Enter your username"
          onChange={(e) => { setUserName(e.target.value) }}
          className={styles.inputTag}
        />
      </div>
      <div className={styles.inputPlace}>
        <label className={styles.label}>
          Email<span className={styles.Req}>*</span>
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your mail address"
          onChange={(e) => { setEmail(e.target.value) }}
          className={styles.inputTag}
        />
      </div>
      <div className={styles.inputPlace}>
        <label className={styles.label}>
          Password
          <span className={styles.Req}>*</span>
        </label>
        <input
          type="password"
          name="password"
          required
          onChange={(e) => { setPassword(e.target.value) }}
          className={styles.inputTag}
          placeholder="Enter password" />
      </div>
      {wrongData &&
        (<div className={`flex justify-center py-4`}>
          <p className='text-red-500 text-sm'>The email or username is already used</p>
        </div>)
      }
      <input type="submit" value="Sign Up" className={styles.submit} />
    </form>
  );
}

/*
 * Function Name :
 *    RegForm
 * Description:
 *    Container for all registeration page components
 */

function Register() {
  useEffect(()=> {
    document.title = "Register"
  })

  return (
    <>
      <div className={styles.container}>
        <div className={styles.sideImg}></div>
        <div className={styles.form}>
          <Icon />
          <RegHeader />
          <RegForm />
          <p className={styles.register}>
            You have an account? <Link href="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
