import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image';
import profilePic from "../../public/images/profile/dev4.png";
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';

export default function Home() {
  return (
    <>
      <Head>
        <title>Joseph Rasanjana | Main Page</title>
        <meta name="description" content="Joseph Rasanjana | Main Page" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="Joseph Rasanjana" className="w-full h-auto lg:hidden md:inline-block md:w-full"
              priority
              sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw'
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText text="Crafting Digital Solutions, Translating Ideas into Code and Architecture." className='!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg!text-6xl md:!text-5xl sm:!text-3xl
              '/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                As a proficient backend developer with a specialization in AI/ML and robotics, I am committed to transforming concepts into cutting-edge web applications and innovative robotic solutions. My expertise spans across backend technologies, AI/ML programming, and the development of intelligent robotic systems. Explore my latest projects and writings, showcasing my mastery in backend development, AI/ML, and robotics, including my work with Python and TensorFlow.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/josephrasanjana_cv.pdf" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base
                '
                download={true}
                >Resume <LinkArrow className={"w-6 ml-1"}/> </Link>
                <Link href="mailto:joeseph.rasanjana@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
      </main>
    </>
  )
}
