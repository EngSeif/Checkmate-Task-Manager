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

import dynamic from "next/dynamic";
import "@dotlottie/player-component";
import logo from "../images/logo.png";
import styles from "./home.module.css";
import Link from "next/link";
import AboutUS from "./AboutUs";
import Features from "./Features";
import MainLand from "./Land";
import { Helmet } from "react-helmet";

/*
 * Function Name :
 *    TabInfo
 * Description:
 *    Has Tab Info
 */

function TabInfo() {
  return (
    <Helmet>
      <title>Home</title>
      <link rel="shortcut icon" type="x-icon" href={logo.src} />
    </Helmet>
  );
}


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

function Home() {
  return (
    <>
      <TabInfo />
      <MainLand />
      <Features />
      <AboutUS />
      <GetStarted />
      <Footer />
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), { ssr: false });
