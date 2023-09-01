import React from 'react'
import Homelogo from '../assets/pranavlogo.gif'

import {HiArrowNarrowRight} from 'react-icons/hi'

function Home() {
  return (
    <div className="bg-black w-full h-screen flex justify-center items-center" name='home'>

        <div className='max-w-[1000px] mx-auto px-[150px] h-full flex flex-col justify-center'>

            <p className='px-2'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl text-green-900 font-bold sm:animate-pulse animate-none'>Pranav Chanagond</h1>
            <h2 className='text-4xl sm:text-7xl font-bold'>I'm Full Stack Developer</h2>
            <p className='py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perferendis eveniet itaque, atque maiores ea nulla fugiat error similique eligendi mollitia, voluptate laborum suscipit. Molestias, quisquam?</p>

            <div className=''>
                <button className='border-2 px-6 py-3 my-2 hover:bg-white hover:text-black flex items-center '>
                   View Work <HiArrowNarrowRight className='ml-2'/>
                </button>
            </div>
        </div>

        <div className='pr-[100px] hidden lg:flex'>
            <img src={Homelogo} alt="" />
        </div>

    </div>
  )
}

export default Home