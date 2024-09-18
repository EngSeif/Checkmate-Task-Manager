"use client";

import dynamic from "next/dynamic";
import '@dotlottie/player-component';
import logo from "../images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUserPlus, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './home.module.css';
import ReactPlayer from 'react-player';
import user from '../images/user.jpg';
import Link from "next/link";
import { useState } from "react";


function NavBar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible)
  }
  return (
    <header className="bg-white">
      <nav className={styles.navContainer}>
        <div className={styles.logoContainer}>
          <img className="w-16" src={logo.src} alt="Logo" />
          <div className={styles.logoTextContainer}>
            <span className={styles.logoText}>Checkmate</span>
          </div>
        </div>
        <div className={`${styles.navLinksContainer} md:block ${isNavVisible ? 'top-16' : 'top-[-100%]'}`}>
          <ul className={styles.ulContainer}>
            <li className={styles.liContainer}><a href="#">Home</a></li>
            <li className={styles.liContainer}><a href="#">About Us</a></li>
            <li className={styles.liContainer}><a href="#">Contact US</a></li>
          </ul>
        </div>
        <div className={styles.logSignConatiner}>
          <Link
            className={`${styles.logSignButton} border-solid border-2 border-[#6C64EE] text-white hover:text-[#6C64EE]`}
            href="/login"
          >
            <FontAwesomeIcon icon={faRightToBracket} className="w-4"/>
            <span>Login in</span>
          </Link>
          <Link className={`${styles.logSignButton} border-solid border-2 border-[#6C64EE] text-white hover:text-[#6C64EE]`} href="/register" >
            <FontAwesomeIcon icon={faUserPlus} className="w-4"/>
            <span>Sign up</span>
          </Link>
          <FontAwesomeIcon icon={faBars} className={`${styles.menuBar} md:hidden`} onClick={()=>{toggleNav()}}/>
        </div>
      </nav>
    </header>
  )
}

function Feature1() {
  return (
    <div className={styles.featurePurple}>
        <div className="text-white w-1/2">
          <h1 className="md:text-5xl text-2xl font-medium mb-7">
            Take Control Now: Start Organizing Everything with Ease!
          </h1>
          <p className="md:text-xl text-base">
            From work tasks to personal goals, TickTick helps you manage all
            your to-dos effortlessly!
          </p>
        </div>
        <dotlottie-player
          src="https://lottie.host/053f97b1-9cd5-4caa-9cb9-474aeef92c86/GLN3oSUEVJ.json"
          background="transparent"
          speed={1}
          style={{ width: '30%', height: '30%' }}
          loop
          autoplay
        ></dotlottie-player>
    </div>
  );
}

function Feature2() {
  return (
    <div className={styles.featureWhite}>
        <dotlottie-player
          src="https://lottie.host/23512e7c-832d-4e27-a335-65e7635d1cc2/GVKSgCDmXZ.json"
          background="transparent"
          speed={1}
          style={{ width: '30%', height: '30%' }}
          loop
          autoplay
        ></dotlottie-player>
        <div className="text-black w-1/2">
          <h1 className="md:text-5xl text-2xl font-medium mb-7">
            Prioritize your goals
          </h1>
          <p className="md:text-xl text-base">
            Focus on what matters most, streamline your efforts, and take
            decisive steps toward achieving your vision. Transform challenges
            into opportunities, maximize your potential, and elevate your
            journey to new heights of excellence.
          </p>
        </div>
    </div>
  );
}

function Feature3() {
  return (
    <div className={styles.featurePurple}>
        <div className="text-white w-1/2">
          <h1 className="md:text-5xl text-2xl font-medium mb-7">
          Transform Your Workflow with an Enhanced Calendar View
          </h1>
          <p className="md:text-xl text-base">
            Experience unparalleled organization and efficiency with a visually
            engaging interface that helps you stay on top of deadlines,
            prioritize tasks, and achieve your goals with ease
          </p>
        </div>
        <dotlottie-player
          src="https://lottie.host/890a4ec3-4710-4122-816b-c5537d8ff7b6/QtIcR5x52O.json"
          background="transparent"
          speed={1}
          style={{ width: '30%', height: '30%' }}
          loop
          autoplay
        ></dotlottie-player>
    </div>
  );
}

function Feature4() {
  return (
    <div className={styles.featureWhite}>
        <dotlottie-player
          src="https://lottie.host/69c86e07-2f01-48f5-810c-e6fcdfd31d10/VC7BwiQ7cs.json"
          background="transparent"
          speed={1}
          style={{ width: '30%', height: '30%' }}
          loop
          autoplay
        ></dotlottie-player>
        <div className="text-black w-1/2">
          <h1 className="md:text-5xl text-2xl font-medium mb-7">
          An Intuitive, Easy-to-Use Interface!
          </h1>
          <p className="md:text-xl text-base">
            Designed for simplicity and efficiency, our intuitive interface
            ensures you spend less time figuring things out and more time
            accomplishing your goals.
          </p>
        </div>
    </div>
  );
}

function Features() {
  return (
    <div className="h-auto w-full">
      <Feature1 />
      <Feature2 />
      <Feature3 />
      <Feature4 />
    </div>
  );
}

function OneReview() {
  return (
    <div className="bg-white md:w-1/4 p-4 rounded-md w-3/4">
    <div className="flex items-center gap-6 p-2">
      <img src={user.src} className="w-16 rounded-full" />
      <div>
        <h2>Vitaly Salakhmir</h2>
        <h3>IT Project manager</h3>
      </div>
    </div>
    <p className="p-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
      repellendus minima corporis nulla suscipit totam? Dolores natus,
      laudantium, distinctio cum vitae debitis quidem rem eum, nihil qui
      et fuga iste?
    </p>
  </div>
  );
}

function Reviews() {
  return (
    <div className="h-auto w-full bg-[#6C64EE] py-6">
        <h1 className="text-center text-5xl text-white py-14 font-medium">
          Everyone is loving it
        </h1>
        <div className="flex justify-center flex-wrap gap-6">
        <OneReview />
        <OneReview />
        <OneReview />
        <OneReview />
        <OneReview />
        <OneReview />
        <OneReview />
        <OneReview />
        </div>
    </div>
  );
}

function MainVideo() {
  return (
    <div className={styles.animation}>
      <ReactPlayer
        url='/videos/main_video.mp4'
        playing={true} 
        muted={true}
        width='100%'   
        height='80%'  
      />
    </div>
  );
}

function GetStarted() {
  return (
    <div className={styles.getStarted}>
      <div className={styles.bgContainer}>
      <div className="w-full h-full bg-black bg-opacity-55 flex items-center justify-center flex-col">
      <h1 className="text-center text-white text-5xl py-14 font-medium">
        Want to boost your productivity?
      </h1>
      <div className="text-center">
        <Link href="/register">
          <p className="flex items-center justify-center text-2xl mx-auto bg-[#6C64EE] text-white p-2 rounded-md font-medium hover:bg-white hover:text-[#6C64EE] border-solid border-2 border-[#6C64EE] duration-75 w-96">Get Started Now - Its free</p>
        </Link>
        </div>
      </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="h-auto w-full bg-[#6C64EE] py-3">
    <div className="flex items-center justify-between gap-6">
      <div className="flex sm:w-32">
        <img className="w-16" src={logo.src} alt="Logo" />
        <div className="flex justify-center items-center">
          <p className="sm:text-xl font-bold text-white">Checkmate</p>
        </div>
      </div>

      <ul
        className="flex flex-row items-center gap-6 text-white mr-5 text-base"
      >
        <li><a className="hover:text-gray-200" href="#">Home</a></li>
        <li><a className="hover:text-gray-200" href="#">About Us</a></li>
        <li><a className="hover:text-gray-200" href="#">Contact US</a></li>
      </ul>
    </div>
    <div className="text-white font-bold text-center">
      © 2023 Copyright: Checkmate
    </div>
  </footer>
  );
}

function Home() {
  return (
    <>
      <NavBar />
      <MainVideo />
      <Features />
      <Reviews />
      <GetStarted />
      <Footer />
    </>
  );
}

export default dynamic (() => Promise.resolve(Home), {ssr: false})

