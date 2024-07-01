import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Landing = () => {
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-[#f0f0f0] text-[#000] pt-2'>
            <div className="text-structure mt-40 px-12 font-[900]" >
                {["we create", "eye opening", "presentations"].map((item, index) => {
                    return <div className="masker">
                        <div className='w-fit flex  tracking-tighter leading-none'>
                            {index === 1 && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "9vw" }} transition={{ ease: [0.76, 0, 0.24, 1],duration:2 }}
                                    
                                    className='w-[9vw] h-[5vw] relative top-[0.1vw] '>
                                    <img  className='rounded-md' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                                    </motion.div>)}
                            <h1 className='uppercase text-[8vw] leading-[7vw] font-["Founders_Grotesk_Condensed"] font-black'>{item}</h1>
                            </div>
                    </div>

                })}
                <div className='font-["Neue_Montreal"] capitalize w-full border-t-2 border-zinc-600  mt-20 flex justify-between items-center py-3 px-20 '>
                    {["for public and private companies", "from the first pitech to ipo"].map((item, index) => {

                        return <p className='text-[1.1vw] font-[500] text-zinc-700 '>{item}</p>
                    })}

                    <div className="start flex items-center gap-5  ">
                        <div className='px-5 py-2 border-[2px] border-zinc-500 rounded-full uppercase text-[1.1vw] font-[500] text-zinc-700'>Start The project</div>
                        <div className="w-10 h-10 border-[2px]  border-zinc-500 flex items-center justify-center rounded-full">
                        <MdArrowOutward />

                        </div>
                   </div>
                </div>


            </div>
        </div>

    )
}

export default Landing