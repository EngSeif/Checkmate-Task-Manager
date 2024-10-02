"use client";

/*
 *                            Register Component
 *
 *  This file Renders The Login Page
 *
 *  Components included:
 *  - Login (Main Export Function)
 *  - TabInfo
 *  - Icon
 *  - LogHeader
 *  - LogForm
 *  - 
*/

import React, { useEffect, useState } from 'react';
import styles from './login.module.css';
import logo from '../images/logo.png'
import Link from 'next/link';
import { useRouter } from 'next/navigation';


/*
 * Function Name :
 *    TabInfo
 * Description:
 *    Has Tab Info
 */

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
 *    Returns Main Header of Login Page Header
 */

function LogHeader() {
  return (
    <>
      <h1 className={styles.welcome}>Welcome Back!</h1>
      <p>Enter to your dashboard of tasks</p>
    </>
  );
}

/*
 * Function Name :
 *    RegForm
 * Description:
 *    Renders Form That user will log in his data
 */

function LogForm({ wrongData, setWrongData }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
      e.preventDefault();
      const logUser = { email, password };
      console.log(JSON.stringify(logUser));
      
      try {
          const response = await fetch('http://54.158.221.58/user/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(logUser),
          });

          if (!response.ok) {
              throw new Error('The Data You Entered is Not Correct');
          }

          const data = await response.json();
          
          // Store token in localStorage
          if (typeof window !== 'undefined') {
              localStorage.setItem('token', JSON.stringify(data));
          }

          router.push('/dashboard');
      } catch (error) {
          console.error(error);
          setWrongData(true);
      }
  };

  return (
      <form onSubmit={handleSubmit}>
          <div className={styles.inputPlace}>
              <label className={styles.label}>
                  Email
                  <span className={styles.Req}>*</span>
              </label>
              <input
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  name="email"
                  placeholder="Enter your mail address"
                  className={styles.inputTag}
              />
          </div>
          <div className={styles.inputPlace}>
              <label className={styles.label}>
                  Password
                  <span className={styles.Req}>*</span>
              </label>
              <input
                  className={styles.inputTag}
                  required
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
              />
          </div>
          <div className={styles.moreInfo}>
              <div>
                  <input type="checkbox" />
                  <label className={styles.label}>Remember me</label>
              </div>
              <a href="#">Forgot your password?</a>
          </div>
          {wrongData && (
              <div className={`flex justify-center py-4`}>
                  <p className='text-red-500'>The Data You Entered is Not Correct</p>
              </div>
          )}
          <input type="submit" value="Log in" className={styles.submit} />
      </form>
  );
}

/*
 * Function Name :
 *    RegForm
 * Description:
 *    Container for all registeration page components
 */

function Login() {
  const [wrongData, setWrongData] = useState(false);
  useEffect(()=> {
    document.title = "Login"
  })
  return (
    <>
      <div className={styles.container}>
        <div className={styles.form}>
          <Icon />
          <LogHeader />
          <LogForm wrongData={wrongData} setWrongData={setWrongData} />
          <p className={styles.register}>
            Don&apos;t have an account? <Link href="/register">Register here</Link>
          </p>
        </div>
        <div className={styles.sideImg}></div>
      </div>
    </>
  );
}

export default Login;
