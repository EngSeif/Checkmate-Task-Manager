"use client";

/*
 *                            Home Component
 *
 *  This file Renders The Home Page
 *
 *  Components included:
 *  - MainLand (Main Export Function)
 *  - TabInfo
 *  - GetStarted
 *  - Footer
 */

import "@dotlottie/player-component"; // Ensure this is safe for SSR or dynamically import it if needed
import logo from "./images/logo.png";
import styles from "./home.module.css";
import Link from "next/link";
import dynamic from 'next/dynamic'; // Import dynamic for SSR control

/*
 * Function Name :
 *    GetStarted
 * Description:
 *   Display Get Started Banner
 */

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
              <p className="flex items-center justify-center text-2xl mx-auto bg-[#6C64EE] text-white p-2 rounded-md font-medium hover:bg-white hover:text-[#6C64EE] border-solid border-2 border-[#6C64EE] duration-75 w-96">
                Get Started Now - Its free
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
 * Function Name :
 *    Footer
 * Description:
 *    Footer For HomePage
 */

function Footer() {
  return (
    <footer className="h-auto w-full bg-[#6C64EE] py-3">
      <div className="flex items-center justify-between gap-6 w-[95%] mx-auto">
        <div className="flex sm:w-32">
          <img className="w-16" src={logo.src} alt="Logo" />
          <div className="flex justify-center items-center">
            <p className="sm:text-xl font-bold text-white">Checkmate</p>
          </div>
        </div>
        <div className="text-white font-bold text-center">
          © 2023 Copyright: Checkmate
        </div>
      </div>
    </footer>
  );
}

/*
 * Function Name :
 *    Home
 * Description:
 *    Container For All HomePage Components
 */

// Dynamically import components that may use window or require client-side rendering
const DynamicMainLand = dynamic(() => import('./Land'), { ssr: false });
const DynamicFeatures = dynamic(() => import('./Features'), { ssr: false });
const DynamicAboutUS = dynamic(() => import('./AboutUs'), { ssr: false });

function Home() {
  return (
    <>
      <DynamicMainLand />
      <DynamicFeatures />
      <DynamicAboutUS />
      <GetStarted />
      <Footer />
    </>
  );
}

export default Home;
