import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/ai-car-simulation.webp"
import project2 from "../../public/images/projects/cyber-tool.webp"
import project3 from "../../public/images/projects/hms.webp"
import project4 from "../../public/images/projects/mcms-app.webp"
import project5 from "../../public/images/projects/sliot.jpeg"
import project6 from "../../public/images/projects/challenger-x.webp"
import project7 from "../../public/images/projects/spira.webp"
import Image from "next/image";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className="w-full flex items-center justify-between relative rounded-3xl rounded-br-2xl
        border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        ">
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
            '/>

            <Link href={link} target="_blank"
            className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                />
            </Link>

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
                <div className="mt-2 flex items-center ">
                    <Link href={github} target="_blank" className="w-10">
                        {" "}
                        <GithubIcon/>{" "}
                        </Link>
                    <Link href={link} target="_blank"
                    className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
                    sm:px-4 sm:text-base
                    "
                    >Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({type, title, img, link, github}) => {
    return(
        <article className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
        xs:p-4
        ">
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
            rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>

            <Link href={link} target="_blank"
            className="w-full cursor-pointer overflow-hidden rounded-lg"
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw'
                />
            </Link>

            <div className="w-full flex flex-col items-start justify-between mt-4">
                <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                    <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">{title}</h2>
                </Link>
                <div className="w-full mt-2 flex items-center justify-between">
                    <Link href={link} target="_blank"
                    className="text-lg font-semibold underline md:text-base"
                    >
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className="w-8 md:w-6">
                        <GithubIcon/>{" "}
                    </Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return(
        <>
            <Head>
                <title>Joseph Rasanjana | Projects Page</title>
                <meta name="desctiption" content="Joseph Rasanjana | Projects Page"/>
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Imagination Trumps Knowledge!"
                    className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
                    />

                    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedProject
                                title="AI Car Simulation"
                                img={project1}
                                summary="The AI Car Simulation project embodies the synergy of artificial intelligence, robotics, and simulation, culminating in an interactive and educational experience. Utilizing CoppeliaSim simulation software, this initiative aims to engineer an autonomous AI car, proficient in navigating complex mazes. Accompanied by an in-depth YouTube tutorial series, the project offers a systematic guide for enthusiasts to construct and grasp the nuances of the AI-powered car."
                                link="https://www.youtube.com/watch?v=fQAKmKmehiU&list=PL0KGWoMfwEChfuZDXdl9Afl4Sr2OP6grn"
                                github="https://github.com/JosephLahiru/coppeliasim-python"
                                type="Featured Project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Hostel Management System"
                                img={project3}
                                link="https://github.com/JosephLahiru/hostel-management-system-backend"
                                github="https://github.com/JosephLahiru/hostel-management-system-backend"
                                type="Project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="Medical Center Management System - Mobile App"
                                img={project4}
                                link="https://github.com/JosephLahiru/mcms_app"
                                github="https://github.com/JosephLahiru/mcms_app"
                                type="Project"
                            />
                        </div>

                        <div className="col-span-12">
                            <FeaturedProject
                                    title="Cyber Tool"
                                    img={project2}
                                    summary="Cyber Tool is a versatile online platform designed to offer a wide range of tools for various cyber-related tasks. The website features a variety of functionalities, including 
                                    ,Torrent to Magnet Conversion, Magnet to Torrent Conversion, Base64 Encoding and Decoding, Convert to Leet Text, Remove Image Background, Word to PDF and PDF to Word Conversion.
                                    These tools cater to a broad spectrum of needs, from file sharing and text manipulation to image editing and document conversion, making Cyber Tool a comprehensive resource for cyber enthusiasts and professionals alike."
                                    link="https://cyber-tool.github.io/"
                                    github="https://github.com/cyber-tool/cyber-tool.github.io"
                                    type="Featured Project"
                                />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="IFS x Hatch ChallengerX"
                                img={project6}
                                link="https://github.com/JosephLahiru/SLIoT-2022"
                                github="https://github.com/JosephLahiru/SLIoT-2022"
                                type="Project"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                title="SPIRA Website"
                                img={project7}
                                link="https://spira.mtron.biz/"
                                github="https://spira.mtron.biz/"
                                type="Project"
                            />
                        </div>
                        <div className="col-span-12">
                            <FeaturedProject
                                    title="SLIOT 2022 - Advanced Energy Monitoring System (Undergraduate First Place)"
                                    img={project5}
                                    summary="AEMS is a smart electric power meter designed to monitor energy consumption and power fluctuations for domestic users and send the data to a server so that both the CEB and the domestic users can check the data using our web portal. Additionally, it has a function to detect grid failures pinpoint the exact location, and report it to the CEB for prompt resolution. Normally in SriLanka, the power factor is not considered when calculating bills, which leads to a large waste of resources and money, this meter can provide users with the power factor of their household electric items so they can maintain it at the desired level, and in return, receive discounts on their bills as a reward."
                                    link="https://github.com/JosephLahiru/SLIoT-2022"
                                    github="https://github.com/JosephLahiru/SLIoT-2022"
                                    type="Featured Project"
                                />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects;