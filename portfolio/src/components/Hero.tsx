import React from 'react'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/banner-bg.png)] bg-left lg:bg-[15%] bg-cover'
    style={{backgroundSize:"35%"}}
    >
    <Navbar />  
    </div>
  )
}

export default Hero 
