/*
 *                            MainLand Component
 *  
 *  This file contains all components needed for the 'Main Land' section 
 *  on the home page.
 *  
 *  Components included:
 *  - MainLand (Main Export Function)
 *  - NavBar
 *  - MainVideo
 */


import styles from "./home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Link from "next/link";
import logo from "./images/logo.png";
import ReactPlayer from "react-player";

/*
* Function Name :
*    NavBar
* Description:
*   Contains Navigation Bar 
*/

function NavBar() {
    return (
        <header className="bg-white">
            <nav className={styles.navContainer}>
                <div className={styles.logoContainer}>
                    <img className="w-16" src={logo.src} alt="Logo" />
                    <div className={styles.logoTextContainer}>
                        <span className={styles.logoText}>Checkmate</span>
                    </div>
                </div>
                <div className={styles.logSignConatiner}>
                    <Link
                        className={`${styles.logSignButton} border-solid border-2 border-[#6C64EE] text-white hover:text-[#6C64EE]`}
                        href="/login"
                    >
                        <FontAwesomeIcon icon={faRightToBracket} className="w-4" />
                        <span>Login in</span>
                    </Link>
                    <Link className={`${styles.logSignButton} border-solid border-2 border-[#6C64EE] text-white hover:text-[#6C64EE]`} href="/register" >
                        <FontAwesomeIcon icon={faUserPlus} className="w-4" />
                        <span>Sign up</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}


/*
* Function Name :
*    MainVideo
* Description:
*   Contains Main Animation of Land Page
*/

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


/*
* Function Name :
*    MainVideo
* Description:
*   Container For Main Components Of Land Animation
*/

function MainLand() {
    return (
        <>
            <NavBar />
            <MainVideo />
        </>
    )
}

export default MainLand;
