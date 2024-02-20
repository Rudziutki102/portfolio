'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import {BsArrowRight, BsLinkedin} from 'react-icons/bs'
import {HiDownload} from 'react-icons/hi'
import Link from 'next/link'
import { FaGithubSquare } from 'react-icons/fa'
import profilePicture from '@/public/profilePicture.png'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Intro() {
    
  const {ref} = useSectionInView('Home',0.5);
  const {activeSection,setActiveSection,setTimeOfLastClick} = useActiveSectionContext()
  return (
    <section ref={ref} id="home" className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className="flex items-center justify-center">
            <div className='relative'>
                <motion.div
                initial={{opacity:0,scale:0}}
                animate={{opacity:1, scale:1}}
                transition={{
                    type:"tween",
                    duration:0.2
                }}>
                    <Image 
                    src={profilePicture} 
                    alt='Mateusz Portrait'
                    width='192'
                    height='192'
                    quality="95"
                    priority={true}
                    className='h-24 w-24 rounded-full border-[0.35rem] object-cover border-white shadow-xl'
                    />
                </motion.div>
                <motion.span 
                className='absolute bottom-0 right-0 text-4xl'
                initial={{opacity:0,scale:0}}
                animate={{opacity:1,scale:1}}
                transition={{
                    type:'spring',
                    stiffnes:125,
                    delay:0.1,
                    duration:0.7
                }}
                >
                ✌️
                </motion.span>
            </div>
        </div>
        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}>
        <span className="font-bold">Hello, I'm Mateusz.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">4 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
        </motion.h1>
        <motion.div className='flex flex-col sm:flex-row items-center gap-2 px-4 text-lg font-medium'
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{delay:0.1}}>
            <Link className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition' href="#contact" onClick={()=>{
                            setActiveSection('Contact')
                            setTimeOfLastClick(Date.now())
                        }}>Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/></Link>
            <a className='border border-black/10 cursor-pointer bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 group active:scale-105 transition dark:bg-white/10' href="/CV.pdf" download>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/></a>
            <a href="https://www.linkedin.com/in/mateusz-makowski-650155196/" target='_blank' className='border border-black/10 cursor-pointer bg-white p-4 flex text-gray-700 dark:text-white/60 items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 group active:scale-105 transition dark:bg-white/10'><BsLinkedin/></a>
            <a target='_blank' href="https://github.com/Rudziutki102?tab=repositories" className='border border-black/10 cursor-pointer dark:bg-white/10 bg-white p-4 dark:text-white/60 flex text-gray-700 items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-110 hover:scale-110 group active:scale-105 transition'><FaGithubSquare/></a>
        </motion.div>
    </section>
  )
}
