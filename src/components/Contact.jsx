import React from 'react'
import Button from './Button'
import { color } from 'framer-motion'
import Playful from './Playful'

const Contact = () => {
  return (
      <div data-scroll data-scroll-section data-scroll-speed=".3" className='w-full min-h-screen flex flex-col justify-center  items-center bg-[#c7e465]'>
      <h1 className='text-[#212121] text-[14vw] leading-[11vw] font-["Founders_Grotesk_Condensed"] font-black text-center tracking-normal'>READY <br />
              TO START <br /> THE PROJECT?
              
          </h1>
      <div className='flex flex-col items-center mt-5 justify-center gap-4'>
      <Button className="" btnname="START A PROJECT">
        
              
        </Button>
        <p className=''>OR</p>
        <Button btnname="HELLO@OCHI.DESIGN">
          </Button>
      </div>

    </div>
  )
}

export default Contact