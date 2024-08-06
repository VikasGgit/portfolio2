import React from 'react'
import vikasj from '../assets/vikasj.png'
import { PROFILE, logo } from '../data/index.jsx'
import {motion} from "framer-motion"
const HeroSection = () => {
  return (
     <>
     <div className='relative flex items-end justify-center min-h-screen' id='hero' >
        <motion.img src={vikasj} alt={PROFILE.name} className='absolute inset-0 z-10 object-cover w-full h-full'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
        viewport={{once:false}} />
        <motion.div  className='absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
        viewport={{once:false}} > 
        </motion.div>
        <motion.div className='z-20 max-w-3xl pb-20 mx-4' initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2 , delay:1}}
        viewport={{once:false}} >
            <h1 className='text-5xl font-semibold tracking-wide uppercase md:text-7xl' >
                    {PROFILE.name}
            </h1>
            <p className='pt-2 font-semibold' >{PROFILE.info}</p>
        </motion.div>
        
     </div>
     </>
  )
}

export default HeroSection