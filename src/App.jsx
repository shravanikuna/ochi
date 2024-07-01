import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marquee from './components/Marquee'
import About from './components/About'
import Playful from './components/Playful'
import Featured from './components/Featured'
import Freecards from './components/Freecards'
import Contact from './components/Contact'
import Footer from './components/Footer'
import locomotiveScroll from 'locomotive-scroll';


const App = () => {
  const scroll = new locomotiveScroll();

  return (
    <div className='w-full min-h-screen bg-[#f1f1f1] '>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Playful />
      <Featured />
      <Freecards />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App