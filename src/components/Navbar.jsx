import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';
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

			<ul className='md:flex md:justify-between md:w-[450px] md:p-4 md:text-xl hidden hover:cursor-pointer'>
				<li className='hover:scale-125'>
					<Link
						to='home'
						smooth={true}
						duration={500}
					>
						It's Me
					</Link>
				</li>
				<li className='hover:scale-125'>
					<Link
						to='about'
						smooth={true}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className='hover:scale-125'>
					<Link
						to='skills'
						smooth={true}
						duration={500}
					>
						Skills
					</Link>
				</li>
				<li className='hover:scale-125'>
					<Link
						to='contact'
						smooth={true}
						duration={500}
					>
						Contact
					</Link>
				</li>
			</ul>

				{/* Navbar social */}
				<div className='lg:hidden md:justify-between md:max-w-[200px] md:p-4 md:text-xl flex hover:cursor-pointer'>
			<ul className='py-2'>
					<li className=''>
						<a
							href='https://github.com/Pranavchanagond'
							className='flex justify-between w-full items-center '
						>
							{<FaGithub size={25} />}
						</a>
					</li>
				</ul>
				<ul className='py-2'>
					<li className=' '>
						<a
							href='https://www.linkedin.com/in/pranav-chanagond-aa01b219a'
							className='flex  w-full items-center '
						>
							{<FaLinkedin size={25} />}
						</a>
					</li>
				</ul>
			</div>


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
				<li className='py-5 text-2xl hover:cursor-pointer  hover:scale-125'>
					<Link
						onClick={handleClick}
						to='home'
						smooth={true}
						duration={500}
					>
						It's Me
					</Link>
				</li>
				<li className='py-5 text-2xl hover:cursor-pointer hover:scale-125'>
					<Link
						onClick={handleClick}
						to='about'
						smooth={true}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className='py-5 text-2xl hover:cursor-pointer hover:scale-125'>
					<Link
						onClick={handleClick}
						to='skills'
						smooth={true}
						duration={500}
					>
						Skills
					</Link>
				</li>
				<li className='py-5 text-2xl hover:cursor-pointer hover:scale-125'>
					<Link
						onClick={handleClick}
						to='contact'
						smooth={true}
						duration={500}
					>
						Contact
					</Link>
				</li>
			</ul>

			
			{/* social */}
			<div className='hidden lg:flex flex fixed flex-col top-[35%] left-0 '>
				<ul className='py-2 '>
					<li className='flex w-[150px]  ml-[-90px] hover:ml-[-60px] duration-300 h-[40px] justify-between items-center '>
						<a
							href='https://github.com/Pranavchanagond'
							className='flex justify-between w-full items-center '
						>
							Github {<FaGithub size={35} />}
						</a>
					</li>
				</ul>
				<ul className='py-2 '>
					<li className='flex w-[150px]  ml-[-90px] hover:ml-[-60px] duration-300 h-[40px] justify-between items-center '>
						<a
							href='https://www.linkedin.com/in/pranav-chanagond-aa01b219a'
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
