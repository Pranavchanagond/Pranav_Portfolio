import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JAVA from '../assets/java.png';
import JAVASCRIPT from '../assets/javascript.png';
import REACT from '../assets/react.png';
import SERVLET from '../assets/servlet.png';
import SPRINGBOOT from '../assets/springboot.png';
import SQL from '../assets/sql.png';
import TAILWIND from '../assets/tailwind.png';

function Skills() {
	return (
		<div
			className='w-full  bg-black pt-[80px]'
			name='skills'
		>
			{/* Container */}
			<div className='max-w-[1000px] w-full h-screen p-4 mx-auto flex flex-col justify-center'>
				<div>
					<p className='text-4xl border-b-4 inline font-bold'>Skills</p>
					<p className='py-5'>These are the technologies I've worked with.</p>
				</div>

				<div className='py-10 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center'>
					<div className='hover:scale-110'>
						<img
							src={JAVA}
							alt=''
							className='w-10 md:w-20 mx-auto'
						/>
						<p className='my-4'>JAVA</p>
					</div>

					<div className='hover:scale-110'>
						<img
							src={SERVLET}
							alt=''
							className='w-10 md:w-20 mx-auto'
						/>
						<p className='my-4'>SERVLET</p>
					</div>

					<div className='hover:scale-110'>
						<img
							src={SPRINGBOOT}
							alt=''
							className='w-10 md:w-20 mx-auto'
						/>
						<p className='my-4'>SPRING-BOOT</p>
					</div>

					<div className='hover:scale-110'>
						<img
							src={HTML}
							alt=''
							className='w-10 md:w-20 mx-auto'
						/>
						<p className='my-4'>HTML</p>
					</div>

					<div className='hover:scale-110'>
						<img
							src={CSS}
							alt=''
							className='w-10 md:w-20 mx-auto'
						/>
						<p className='my-4'>CSS</p>
					</div>

					<div className='hover:scale-110'>
						<img
							src={TAILWIND}
							alt=''
							className='w-10 md:w-20 mx-auto'
						/>
						<p className='my-4'>TAILWIND</p>
					</div>

					<div className='hover:scale-110'>
						<img
							src={JAVASCRIPT}
							alt=''
							className='w-10 md:w-20 mx-auto'
						/>
						<p className='my-4'>JAVASCRIPT</p>
					</div>

					<div className='hover:scale-110'>
						<img
							src={REACT}
							alt=''
							className='w-10 md:w-20 mx-auto'
						/>
						<p className='my-4'>React</p>
					</div>

					<div className='hover:scale-110'>
						<img
							src={SQL}
							alt=''
							className='w-10 md:w-20 mx-auto'
						/>
						<p className='my-4'>SQL</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Skills;
