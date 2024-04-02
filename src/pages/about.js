import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import proPic from '../../public/images/profile/dev3.png'
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import BackendSkills from '@/components/BackendSkills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import FrontendSkills from '@/components/FrontendSkills'

const AnimatedNumbers = ({value}) =>{
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000})
    const isInView = useInView(ref, {once: true})

    useEffect(()=>{
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    useEffect(()=>{
        springValue.on("change", (latest)=>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <div>
        <Head>
            <title>Joseph Rasanjana | About Page</title>
            <meta name="desctiption" content="Joseph Rasanjana | About Page"/>
        </Head>
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>

                        <p className='font-medium'>
                        Hello! I'm Joseph Rasanjana, a backend developer with a specialization in AI/ML and robotics. With over 4 years in the tech industry, I'm passionate about creating innovative digital solutions and robotic systems. My expertise includes backend development, AI/ML programming, and robotics, where I focus on developing intelligent algorithms and machines that interact with their environment.
                        </p>
                        <p className='my-4 font-medium'>
                        I believe in designing solutions that solve real-world problems and enhance user experiences. My commitment to excellence and user-centered design is evident in every project I undertake, whether it's a website, mobile app, or a complex robotic system.
                        </p>
                        <p className='font-medium'>
                        I'm always on the lookout for new challenges and technologies to apply my skills and passion. My goal is to bring my expertise to your next project, helping to bring your vision to life with cutting-edge technology and innovative solutions.
                        </p>
                    </div>
                    <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8
                    ">
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                        <Image src={proPic} alt="Joseph Rasanjana" className="w-full h-auto rounded-2xl"
                        priority
                        sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw'
                        />
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={12}/>+
                            </span>
                            <h2 className='text-xl font-medium captitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg
                            sm:text-base xs:text-sm
                            '>Satisfied Clients</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={16}/>+
                            </span>
                            <h2 className='text-xl font-medium captitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg
                            sm:text-base xs:text-sm'>Projects Completed</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={4}/>+
                            </span>
                            <h2 className='text-xl font-medium captitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg
                            sm:text-base xs:text-sm'>Years of Experience</h2>
                        </div>
                    </div>
                </div>
                <BackendSkills/>
                <FrontendSkills/>
                <Experience/>
                <Education/>
            </Layout>
        </main>
    </div>
  )
}

export default about
