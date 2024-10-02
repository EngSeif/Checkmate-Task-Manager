'use client';

/*
 *                            DashBoard Component
 *
 *  This file Renders The Dashboard Page
 *
 *  Components included:
 *  - Dashboard (Main Export Function)
 *  - NavBar
 *  - UpBar
 */

import styles from './dashboard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faCalendar, faGear, faGrip, faChartSimple, faMoon, faSun, faBell, faMagnifyingGlass, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png';
import { useState, useEffect } from 'react';
import ProjectSection from './Overview/Overview';
import TaskList from './TaskList/tasklist';
import Calendar from './Calendar/calendar';
import Analytics from './Analytics/Analytics';

/*
 * Function Name :
 *    NavBar
 * Description:
 *    Renders the NavBar
 */
function NavBar({ darkMode, toggleDarkMode, setActivePanel, isNavVisible, setNavVisible }) {
    const closeNav = () => {
        setNavVisible(false);
    };
    return (
        <div className={`${styles.NavContainer} ${isNavVisible ? 'block' : 'hidden'} lg:w-60 lg:flex lg:flex-col lg:justify-between lg:static lg:h-full lg:shadow-2xl dark:bg-[#1A1A2E]`}>
            <div>
                <div className={styles.logoContainer}>
                    <img src={logo.src} className='w-10' />
                    <span className='text-xl font-semibold text-[#6c64ee] dark:text-white'>Checkmate</span>
                </div>
                <div className='w-[90%] mx-auto'>
                    <div className={styles.iconsContainer} onClick={() => {
                        setActivePanel('Overview');
                        closeNav();
                    }}>
                        <FontAwesomeIcon icon={faGrip} className={styles.navIcon} />
                        <span className='dark:text-white'>Overview</span>
                    </div>
                    <div className={styles.iconsContainer} onClick={() => {
                        setActivePanel('Tasklist');
                        closeNav();
                    }}>
                        <FontAwesomeIcon icon={faList} className={styles.navIcon} />
                        <span className='dark:text-white'>Task List</span>
                    </div>
                    <div className={styles.iconsContainer} onClick={() => {
                        setActivePanel('Analytics');
                        closeNav();
                    }}>
                        <FontAwesomeIcon icon={faChartSimple} />
                        <span className='dark:text-white'>Analytics</span>
                    </div>
                    <div className={styles.iconsContainer} onClick={() => {
                        setActivePanel('Calendar');
                        closeNav();
                    }}>
                        <FontAwesomeIcon icon={faCalendar} className={styles.navIcon} />
                        <span className='dark:text-white'>Calendar</span>
                    </div>
                    <div className={styles.iconsContainer}>
                        <FontAwesomeIcon icon={faGear} className={styles.navIcon} />
                        <span className='dark:text-white'>Settings</span>
                    </div>
                </div>
            </div>
            <div className='mt-auto mb-0 flex justify-center items-center gap-2 py-4'>
                <FontAwesomeIcon onClick={toggleDarkMode} icon={darkMode ? faMoon : faSun} className='cursor-pointer dark:text-white' />
            </div>
        </div>
    );
}

/*
 * Function Name :
 *    UpBar
 * Description:
 *    Renders the UpBar of User Data
 */
function UpBar({ userToken, toggleNav }) {
    const [userName, setUserName] = useState('');
    useEffect(() => {
        if (userToken && userToken.token) {
            fetch('http://54.158.221.58/user/data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userToken.token}`
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    setUserName(data.username);
                });
        }
    }, [userToken]);
    return (
        <div className='flex w-[92%] justify-between mx-auto my-4 items-center'>
            <div className='flex gap-2'>
                <input type='search' className={styles.searchBar} />
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='dark:text-white' />
                </button>
            </div>
            <div className='flex w-[25%] gap-3 items-center justify-end'>
                <FontAwesomeIcon className='text-[#6c64ee] text-2xl cursor-pointer lg:hidden' icon={faBars} onClick={toggleNav} />
                <FontAwesomeIcon icon={faBell} className='text-[#6c64ee]' />
                <FontAwesomeIcon icon={faUser} className='text-[#6c64ee]' />
                <span className='dark:text-white text-lg'>{userName}</span>
            </div>
        </div>
    );
}

/*
 * Function Name :
 *    Dashboard
 * Description:
 *    Container for all panels of the dashboard
 */
function Dashboard() {
    const [darkMode, setDarkMode] = useState(false);
    const [isNavVisible, setNavVisible] = useState(false);
    const toggleNav = () => {
        setNavVisible(!isNavVisible);
    };
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const [activePanel, setActivePanel] = useState('Overview');
    const [userToken, setUserToken] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token'); // Client-side only
        if (token) {
            setUserToken(JSON.parse(token)); // Only parse if token exists
        }
    }, []); 

    useEffect(() => {
        document.title = "Dashboard";
    }, []);

    return (
        <div className={`${darkMode ? "dark" : ""}`}>
            <div className='flex bg-white dark:bg-[#1a1a2e] w-full lg:h-[100vh] lg:overflow-hidden h-full'>
                <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} setNavVisible={setNavVisible} setActivePanel={setActivePanel} isNavVisible={isNavVisible} />
                <div className='w-full'>
                    {userToken && <UpBar userToken={userToken} toggleNav={toggleNav} />}
                    {activePanel === 'Overview' && <ProjectSection userToken={userToken} />}
                    {activePanel === 'Tasklist' && <TaskList userToken={userToken} />}
                    {activePanel === 'Calendar' && <Calendar userToken={userToken} />}
                    {activePanel === 'Analytics' && <Analytics userToken={userToken} />}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
