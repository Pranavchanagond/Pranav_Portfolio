import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

import Logo from '../assets/Pranav.png';

function Navbar() {
	const [nav, setNav] = useState(false);

	const handleClick = () => setNav(!nav);

	return (
		<div className='fixed bg-black w-full h-60px flex justify-between items-center p-5'>
			<div>
				<img
					src={Logo}
					alt=''
					style={{ width: '60px' }}
				/>
			</div>

			{/* Options */}

			<ul className='md:flex hidden'>
				<li>Home</li>
				<li>About</li>
				<li>Skill</li>
				<li>Work</li>
				<li>Contact</li>
			</ul>

			{/* Hamburg */}
			<div
				onClick={handleClick}
				className='md:hidden z-30 '
			>
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* mobile menu */}
			<ul
				className={
					!nav
						? 'hidden'
						: 'absolute bg-black top-0 left-0 h-screen w-full pl-10 flex flex-col justify-center items-center z-20 '
				}
			>
				<li className='py-5 text-2xl'>Home</li>
				<li className='py-5 text-2xl'>About</li>
				<li className='py-5 text-2xl'>Skill</li>
				<li className='py-5 text-2xl'>Work</li>
				<li className='py-5 text-2xl'>Contact</li>
			</ul>

			{/* social */}
			<div className='hidden lg:flex flex fixed flex-col top-[35%] left-0 '>
				<ul  className='py-2 '>
					<li  className='flex w-[150px]  ml-[-90px] hover:ml-[-60px] duration-300 h-[40px] justify-between items-center '>
						<a
							href='/'
                            className='flex justify-between w-full items-center '
						>
						 Github {<FaGithub size={35} />}
						</a>
					</li>
				</ul>
                <ul  className='py-2 '>
					<li  className='flex w-[150px]  ml-[-90px] hover:ml-[-60px] duration-300 h-[40px] justify-between items-center '>
						<a
							href='/'
                            className='flex justify-between w-full items-center '
						>
						 Linkedi {<FaLinkedin size={35} />}
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
