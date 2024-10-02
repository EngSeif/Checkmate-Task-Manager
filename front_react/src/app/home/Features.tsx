/*
 *                            Features Component
 *  
 *  This file contains all components needed for the 'Features' section 
 *  on the home page. It is designed to provide users with information 
 *  about features of the app.
 *  
 *  Components included:
 *  - Features (Main Export Function)
 *  - Feature1
 *  - Feature2
 *  - Feature3
 *  - Feature4
 */

import styles from "./home.module.css";


/*
* Function Name :
*    Feature1
* Description:
*   Contains Info About Feature 1 ( Organizing Everything with Ease ) 
*/

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

/*
* Function Name :
*    Feature2
* Description:
*   Contains Info About Feature 2 ( Prioritize your goals ) 
*/

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

/*
* Function Name :
*    Feature3
* Description:
*   Contains Info About Feature 3 ( Enhanced Calendar View ) 
*/

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

/*
* Function Name :
*    Feature4
* Description:
*   Contains Info About Feature 4 ( Easy-to-Use Interface ) 
*/

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

/*
* Function Name :
*    Feature4
* Description:
*    Container For All Features 
*/

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

export default Features;