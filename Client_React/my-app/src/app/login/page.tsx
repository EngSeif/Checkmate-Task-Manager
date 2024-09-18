"use client";

import React, { useState } from 'react';
import styles from './login.module.css';
import logo from '../images/logo.png'
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function TabInfo() {
  return (
    <Helmet>
      <title>Login</title>
      <link rel="shortcut icon" type="x-icon" href={logo.src} />
    </Helmet>
  );
}

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

function LogHeader() {
  return (
    <>
      <h1 className={styles.welcome}>Welcome Back!</h1>
      <p>Enter to your dashboard of tasks</p> 
    </>
  );
}

function LogForm({wrongData, setWrongData}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const logUser = {email: email, password: password};
    console.log(JSON.stringify(logUser))
    fetch('http://54.158.221.58/user/login', {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(logUser)
    }).then((r)=> {
      if (r.ok) {
        return r.json();
      }
      throw new Error("The Data You Entered is Not Correct");
    }).then((data) => {
      localStorage.setItem('token', JSON.stringify(data));
      router.push('/dashboard'); 
    }).catch((error)=> {
      setWrongData(true);
    })
  }
  return (
    <form onSubmit={(e)=>{handleSubmit(e)}}>
      <div className={styles.inputPlace}>
        <label className={styles.label}>
          Email
          <span className={styles.Req}>*</span>
        </label>
        <input
          onChange={(e)=>{setEmail(e.target.value)}}
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
          onChange={(e)=>{setPassword(e.target.value)}}
          placeholder="Enter password" />
      </div>
    <div className={styles.moreInfo}>
      <div>
        <input type="checkbox" />
        <label className={styles.label}>Remember me</label>
      </div>
      <a href="#">Forgot your password?</a>
    </div>
    { wrongData && 
    (<div className={`flex justify-center py-4 ${wrongData == true}`}>
      <p className='text-red-500'>The Data You Entered is Not Correct</p>
    </div>)
    }
    <input type="submit" value="Log in" className={styles.submit}/>
  </form>
  );
}

function GoogleSignUp() {
  return (
    <>
      <div className={styles.googleLog}>
        <p className={styles.googleLogText}>
          <span className={styles.googleLogSpan}>Or, Login with</span>
        </p>
        <hr />
      </div>
      <button className={styles.button}>
        <FontAwesomeIcon icon={faGoogle} className={styles.Icon}/> 
        Sign up with Google
      </button>
    </>
  );
}

function Login() {
  const [wrongData, setWrongData] = useState(false);
  return (
    <>
      <TabInfo />
      <div className={styles.container}>
      <div className={styles.form}>
          <Icon />
          <LogHeader />
          <LogForm wrongData={wrongData} setWrongData={setWrongData}/>
          <GoogleSignUp />
          <p className={styles.register}>
            Don't have an account? <Link href="/register">Register here</Link>
          </p>
        </div>
        <div className={styles.sideImg}></div>
      </div>
    </>
  );
}

export default Login;
