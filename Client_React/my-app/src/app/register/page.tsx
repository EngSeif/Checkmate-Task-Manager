"use client";

import styles from './register.module.css';
import logo from '../images/logo.png';
import { Helmet } from 'react-helmet';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


function TabInfo() {
  return (
    <Helmet>
      <title>Register</title>
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

function RegHeader() {
  return (
    <>
      <h1 className={styles.welcome}>Register!</h1>
      <p>Get ready to take control and organize your life like never before!</p> 
    </>
  );
}

function RegForm() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); 

  const handleSubmit = (e) => {
    e.preventDefault()
    const newUser = {username, email, password};
    fetch('http://52.3.242.103/user/register', {
      method: 'POST',
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify(newUser)
    }).then((r)=> {
      console.log(r.status)
      router.push('/login')
    })
  }
  return (
    <form onSubmit={(e)=>{handleSubmit(e)}}>
      <div className={styles.inputPlace}>
        <label className={styles.label}>
          Username<span className={styles.Req}>*</span>
        </label>
        <input
        type="text"
        name="username"
        required
        placeholder="Enter your username"
        onChange={(e)=> {setUserName(e.target.value)}}
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
        onChange={(e)=> {setEmail(e.target.value)}}
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
        onChange={(e)=> {setPassword(e.target.value)}}
        className={styles.inputTag}
        placeholder="Enter password" />
      </div>
      <input type="submit" value="Sign Up" className={styles.submit}/>
  </form>
  );
}

function Register() {

  return (
    <>
      <TabInfo />
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
