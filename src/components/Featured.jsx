import { motion, useAnimate, useAnimation } from 'framer-motion'
import { Power4 } from 'gsap/all'
import React, { useState } from 'react'
import { GoDotFill } from 'react-icons/go'

const Featured = () => {
    const cards = [useAnimation(), useAnimation()]

    const handleHover = (index) => {
        cards[index].start({ y: "0" })
    }

    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" })
    }
    return (
        <div className='w-full py-20' data-scroll data-scroll-section data-scroll-speed="-.2">
            <div className='w-full px-10 border-b-2	 border-zinc-400  mt-20 pb-10'>
   <h1 className='text-6xl  font-["Neue_Montreal"]'>Featured Projects</h1>
            </div>
            <div className='px-20'>
                <div className="cards w-full flex gap-5 mt-20">

                    <motion.div onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="cardcontainer relative w-[45vw] h-[75vh] ">
                        <div className="heading absolute -mt-10 flex text-black items-center">
                            <GoDotFill className='' /><h1 className=''>FYDE</h1>
                        </div>
                        <div className='absolute text-[#CDEA68] left-full -translate-x-1/2 top-1/2 z-[9] -translate-y-1/2 text-8xl'>
                            <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2
                            font-black  -translate-y-1/2 text-9xl
                            tracking-normal
                            font-["Founders_Grotesk_Condensed"]'>
                                {"FYDE".split("").map((item, index) => (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[0]}
                                        transition={{ ease: Power4.easeInOut, delay: index * .06 }}
                                        className='inline-block'
                                    >{item}</motion.span>
                                ))}
                            </h1>

                            
                        </div>

                        <div className="card w-full rounded-lg h-full overflow-hidden">
                            <img className="w-full h-full object-contain bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                        </div>
                        <div className="btncontainer flex justify-center">

                        </div>

                    </motion.div>

                    <motion.div onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="cardcontainer flex justify-center items-center  relative w-[45vw] h-[75vh] ">
                        <div className="heading absolute flex text-black items-center justify-center">
                            <GoDotFill className='' /><h1 className=''>VISE</h1>
                        </div>
                        <div className='  absolute text-[#CDEA68] right-full -translate-x-1/2 top-1/2 z-[9] -translate-y-1/2 text-8xl'>
                            <h1 className='absolute flex overflow-hidden right-full text-[#CDEA68]  translate-x-1/2 top-1/2 
                            font-black 
                            tracking-normal
                            font-["Founders_Grotesk_Condensed"]
                            -translate-y-1/2 text-9xl' >
                                {"VISE".split("").map((item, index) => (
                                    <motion.span
                                        initial={{ y: "100%" }}
                                        animate={cards[1]}
                                        transition={{ ease: Power4.easeInOut, delay: index * .06 }}
                                        className='inline-block'
                                    >{item}</motion.span>
                                ))}
                            </h1>
                        </div>

                        <div className="card w-full rounded-lg h-full overflow-hidden">
                            <img className="w-full h-full object-contain bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                        </div>
                        <div className="btncontainer felx justify-center">

                        </div>
                    </motion.div>
                </div>
            </div>
        </div>


    )
}

export default Featured