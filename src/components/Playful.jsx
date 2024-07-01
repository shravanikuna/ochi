import LocomotiveScroll from 'locomotive-scroll';
import React, { useEffect, useState } from 'react'

const Playful = () => {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight / 2;
            

            var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setRotate(angle-180);

        })
    },[])

    return (
        <div className='w-full h-screen bg-slate-50  mt-20 overflow-hidden '>
            <div data-scroll data-scroll-section data-scroll-speed="-.3" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] '>
                <div data-scroll data-scroll-section data-scroll-speed=".3" className='eyes absolute flex gap-10 top-1/2 left-1/3 -translate-x-[50%] -translate-y-[50%] '>
                    <div className='w-[14vw] flex justify-center items-center h-[14vw] rounded-full bg-zinc-100'>
                        <div className='flex justify-center items-center w-[8.5vw] h-[8.5vw] relative rounded-full bg-zinc-900'>
                        <h2 className='text-[#ffffff] flex  text-[1.2vw] font-["Neue_Montreal"]'>PLAY</h2>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                                <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                            </div>
                            {/* <h1>PLAY</h1> */}


                        </div>
                    </div>
                    <div className='w-[14vw] flex justify-center items-center h-[14vw] rounded-full bg-zinc-100'>
                        <div className=' flex justify-center items-center w-[8.5vw] h-[8.5vw] relative rounded-full bg-zinc-900'> 
                        <h2 className='text-[#ffffff] flex  text-[1.2vw] font-["Neue_Montreal"]'>PLAY</h2>
                        <div  style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line w-full h-10 absolute top-1/2 left-1/2">
                              <div className='w-5 h-5 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Playful