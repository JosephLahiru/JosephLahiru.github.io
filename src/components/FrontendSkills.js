import React from "react";
import { motion } from "framer-motion";

const FrontendSkill = ({name, x, y}) => {
    return(
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold
        " 
        whileHover={{scale: 1.1}}
        initial={{x:0, y:0}}
        whileInView={{x:x, y:y, transition: {duration: 1.5}}}
        transition={{duration:1.5}}
        viewport={{once: true}}
        >
            {name}
        </motion.div>
    )
}

const FrontendSkills = () =>{
    return (
        <>
            <h2 className="font-bold text-8xl mb-10 mt-64 w-full text-center md:text-6xl md:mt-32">Frontend Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
            lg:h-[80vh] sm:h-[60vh] xs-h[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm
            ">
                <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
                p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2
                " whileHover={{scale: 1.05}}>
                    frontend
                </motion.div>
                <FrontendSkill name="NextJS" x="-20vw" y="2vw" />
                <FrontendSkill name="ReactJS" x="-5vw" y="-8vw" />
                <FrontendSkill name="CSS 3" x="18vw" y="6vw" />
                <FrontendSkill name="HTML 5" x="0vw" y="13vw" />
                <FrontendSkill name="NextJS" x="-20vw" y="-12vw" />
                <FrontendSkill name="Web Design" x="32vw" y="-5vw" />
                <FrontendSkill name="Figma" x="0vw" y="-22vw" />
                <FrontendSkill name="Firebase" x="-25vw" y="20vw" />
                <FrontendSkill name="Tailwind CSS" x="18vw" y="18vw"/>
            </div>
        </>
    )
}

export default FrontendSkills;