import React from 'react';
import Homelogo from '../assets/pranavlogo.gif';

import { HiArrowNarrowRight } from 'react-icons/hi';

function Home() {
	return (
		<div
			className='bg-black w-full  pt-[90px] md:pt-[0px]  flex  px-24'
			name='home'
		>
			<div className=' w-full flex flex-col  justify-center md:pl-44'>
				<p className='px-2'>Hi, my name is</p>
				<h1 className='text-2xl sm:text-6xl py-4 pr-4 text-green-900 font-bold animate-typing overflow-hidden whitespace-nowrap'>
					Pranav Chanagond
				</h1>
				<h2 className='text-2xl sm:text-6xl font-bold'>
					I'm Full Stack Developer
				</h2>
				<p className='py-4 max-w-[700px]'>
					I am a fresher with a completed BE-IT degree and training in{' '}
					<span className='font-bold'>full-stack development</span>. I am
					passionate about programming and working with cutting-edge
					technologies. My strength lies in coding for problem statements, as I
					always try to challenge myself by implementing solutions for random
					problem statements. I am eager to find a good opportunity to apply my
					skills and contribute to a dynamic team. Feel free to reach out to me{' '}
					<span className='text-blue-500'>+91-9881275058</span> or{' '}
					<span className='text-blue-500'>
						<a href='https://mail.google.com/mail/?view=cm&fs=1&to=pranav.ssc@gmail.com'>
							pranav.ssc@gmail.com
						</a>
					</span>
					.
				</p>

				<div className=''>
					<button className='border-2 px-6 py-3 my-2 hover:bg-white hover:text-black flex items-center '>
						View Work <HiArrowNarrowRight className='ml-2' />
					</button>
				</div>
			</div>

			<img
				src={Homelogo}
				alt=''
				className='hidden lg:flex py-44'
			/>
		</div>
	);
}

export default Home;
