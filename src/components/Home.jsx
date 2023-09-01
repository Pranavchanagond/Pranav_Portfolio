import React from 'react'
import Homelogo from '../assets/pranavlogo.gif'

import {HiArrowNarrowRight} from 'react-icons/hi'

function Home() {
  return (
    <div className="bg-black w-full h-screen  flex  px-24" name='home'>

        <div className=' w-full flex flex-col  justify-center pl-44'>

            <p className='px-2'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl text-green-900 font-bold md:animate-pulse animate-none'>Pranav Chanagond</h1>
            <h2 className='text-4xl sm:text-6xl font-bold'>I'm Full Stack Developer</h2>
            <p className='py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perferendis eveniet itaque, atque maiores ea nulla fugiat error similique eligendi mollitia, voluptate laborum suscipit. Molestias, quisquam?</p>

            <div className=''>
                <button className='border-2 px-6 py-3 my-2 hover:bg-white hover:text-black flex items-center '>
                   View Work <HiArrowNarrowRight className='ml-2'/>
                </button>
            </div>
        </div>

        {/* <div > */}
            <img src={Homelogo} alt="" className='hidden md:flex py-44'/>
        {/* </div> */}

    </div>
  )
}

export default Home