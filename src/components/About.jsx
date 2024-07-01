import React from 'react'
import { GoDotFill } from "react-icons/go";
import { motion } from 'framer-motion'


const About = () => {


    
    return (
        <div data-scroll data-scroll-speed="-.3" className='w-full min-h-screen bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl'>
            <h1 className='text-[#212121] pt-[6vw] pl-[3.5vw]
           font-["Neue_Montreal"]  text-[3.6vw] leading-[3.9vw]'>Ochi is a strategic partner for fast-grow­ing tech <br /> businesses that need to <span 
                    className='border-b-2 border-black cursor-pointer'>raise funds, sell prod­ucts,</span> <br /><span className='border-b-2 border-black cursor-pointer'>ex­plain com­plex ideas,</span> and <span className='border-b-2 border-black cursor-pointer'> hire great peo­ple.</span>
            </h1>

            <div className="line border-t-2 border-zinc-500 mt-[3.5vw]"></div>

            <div>
                <div className="flex justify-around text-[1.1vw] font-['Neue_Montreal'] text-[#212121] mt-[1.4vw]">
                    <h2 className='-ml-[17vw]'>What you can expect:</h2>
                    <div className="right flex ">
                        <div className="paragraph flex flex-col w-[20vw] h-[12vw] font-normal text-[1.1vw]">
                            <p className=' text-[1.1vw]'>
                                We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                            <p className='mt-6 font-normal  text-[1.1vw]'>
                                We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
                            </p>
                        </div>
                        <div className="sociallinks ml-[10vw] mt-[5.5vw] font-normal flex flex-col">
                            {/* <Link to="#">Instagram</Link> */}
                            <h1>S:</h1>
                            <a href="#">Instagram</a>
                            <a href="#">Behance</a>
                            <a href="#">Facebook</a>
                            <a href="#">Linkedin</a>
                        </div>
                    </div>

                </div>

                <div className="line border-t-2 border-zinc-500 mt-[6.5vw]"> </div>

                <div className='flex justify-between
                mt-[1.5vw] ml-11 '>
                    <div className=''>
                    <h1 className='text-zinc-900  text-6xl  font-["Neue_Montreal"] mb-6'>Our approach:</h1>
                        <button className='px-5 py-4  flex justify-center items-center bg-[#212121] text-white rounded-full uppercase font-["Neue_Montreal"] font-normal text-md '>Read More <GoDotFill
                        className='ml-8'/></button>
                    </div>
                    <div className='rounded-2xl'>
                        <img className='object-cover bg-center rounded-2xl h-[72vh] mr-[3vw] mb-[4vw]' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
                    </div>
                  </div>

               
            </div>
        </div>
    )
}

export default About