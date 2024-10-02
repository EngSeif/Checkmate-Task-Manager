/*
 *                            About Us Component
 *  
 *  This file contains all components needed for the 'About Us' section 
 *  on the home page. It is designed to provide users with information 
 *  about the develpers and project story.
 *  
 *  Components included:
 *  - AboutUS (Main Export Function)
 *  - SeifInfo
 *  - AhmedInfo
 *  - TheProgramers
 *  - Story
 */


import styles from "./home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import seif from "./images/Seif_Mohmaed.jpg";
import ahmed from "./images/Ahmed_Ali.jpeg";

import Link from "next/link";

/*
* Function Name :
*    SeifInfo
* Description:
*   Contains Info About The Developer "Seif"
*/

function SeifInfo() {

    return (
        <div className={styles.cardProg}>
            <img src={seif.src} className="rounded-full w-[50%]" />
            <h3 className="text-3xl font-semibold text-center">Seif Mohamed</h3>
            <h4 className="text-center">Software Engineer & Electronics Student</h4>
            <p className="text-sm px-4">
                Passionate about using technology to inspire innovation and create
                positive impact, I am currently studying Electronics at Cairo
                University’s Faculty of Engineering. Alongside, I am part of the ALX
                Software Engineering Program, where I’m sharpening my skills in software
                development and engineering. Dedicated to community service, I volunteer
                with Lifemakers Foundation, supporting initiatives that empower and
                uplift others.
            </p>
            <div className="flex justify-center items-center gap-2 text-2xl">
                <Link href="https://github.com/EngSeif">
                    <FontAwesomeIcon icon={faGithub} className="hover:text-[#6C64EE]" />
                </Link>
                <Link href="https://www.linkedin.com/in/seif-mohamed-bb7b33252/">
                    <FontAwesomeIcon icon={faLinkedin} className="hover:text-[#6C64EE]" />
                </Link>
            </div>
        </div>
    );
}

/*
* Function Name :
*    AhmedInfo
* Description:
*   Contains Info About The Developer "Ahmed"
*/


function AhmedInfo() {
    return (
        <div className={styles.cardProg}>
            <img src={ahmed.src} className="rounded-full w-[50%]" />
            <h3 className="text-3xl font-semibold text-center">Ahmed Ali Henawy</h3>
            <h4 className="text-center">Nodejs & Python Software Developer</h4>
            <p className="text-sm px-4">
                Focused on software infrastructure and web engineering, I’ve been
                building robust solutions at ALX Africa since May 2023, with a strong
                commitment to quality. While completing my BBA at Benha University, I
                combine academic insights with technical skills, certified in web
                development by MCIT. As a Holberton School student, I aim to drive
                innovation and business growth through a blend of technology
                andentrepreneurial spirit.
            </p>
            <div className="flex justify-center items-center gap-2 text-2xl">
                <Link href="https://github.com/AhmedHenawy11">
                    <FontAwesomeIcon icon={faGithub} className="hover:text-[#6C64EE]" />
                </Link>
                <Link href="https://www.linkedin.com/in/ahmedhenawy/">
                    <FontAwesomeIcon icon={faLinkedin} className="hover:text-[#6C64EE]" />
                </Link>
            </div>
        </div>
    );
}

/*
* Function Name :
*    TheProgramers
* Description:
*   Container For Programmers Section
*/

function TheProgramers() {
    return (
        <div className="w-[92%] mx-auto flex md:flex-row flex-col gap-4 justify-center items-center">
            <SeifInfo />
            <AhmedInfo />
        </div>
    );
}

/*
* Function Name :
*    TheProgramers
* Description:
*   Container For Story Of The Project
*/

function Story() {
    return (
        <div className="w-[92%] mx-auto flex lg:flex-row flex-col gap-3 justify-center mb-9">
            <div className={styles.bgImg}></div>
            <div className="space-y-6 text-white h-full lg:w-1/2 w-full">
                <div className="w-full">
                    Why did we build Checkmate? Well, as programmers, both Ahmed and Seif
                    constantly juggle multiple projects, and with that comes an
                    overwhelming number of tasks to manage. they found themselves needing
                    a tool to organize and track our work more efficiently. When they
                    explored the existing apps available on the market, they noticed that
                    most of them were designed for teams, filled with features that
                    required time and effort to adapt to. While these tools are powerful,
                    they often felt overcomplicated for our personal needs. They wanted
                    something simple, something that just worked without the steep
                    learning curve.
                </div>
                <div className="w-full">
                    That’s when the idea for Checkmate was born. They asked Themselves:
                    Why not create a task management app, but make it incredibly simple
                    and intuitive? One that allows us to manage our personal projects
                    without getting bogged down in unnecessary features. They envisioned
                    an app that focuses on individual productivity, not just team
                    collaboration, making it ideal for solo developers or anyone with a
                    busy schedule.
                </div>
                <div className="w-full">
                    Our goal was to strip away the complexity, leaving behind a tool that
                    is comfortable and easy to use, without sacrificing functionality.
                    After all, simplicity is key — simple tools are not only easier to
                    adopt but also more enjoyable to use, especially when managing tasks
                    day in and day out. With Checkmate, we aimed to create a task
                    management solution that helps you stay organized without the struggle
                    of learning a complicated new system. It’s built for those who value
                    ease and efficiency in their daily routine
                </div>
            </div>
        </div>
    );
}

/*
* Function Name :
*    TheProgramers
* Description:
*   Container For 'About Us' Section
*/

function AboutUS() {
    
    return (
        <div className="h-auto w-full bg-[#6C64EE] py-3">
            <h2 className="text-center text-5xl font-semibold text-white py-4 mb-5">
                Who Are We
            </h2>
            <TheProgramers />
            <h2 className="text-center text-5xl font-semibold text-white py-6 my-5">
                Our Story
            </h2>
            <Story />
        </div>
    );
}

export default AboutUS;
