import React from 'react';

const About = () => {
	return (
		<div
			name='about'
			className='bg-black w-full h-screen flex justify-center'
		>
			<div className='w-full  flex flex-col justify-center items-center  '>
				<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
					<div className='pl-4 pb-8 sm:text-right'>
						<p className='text-5xl sm-text-7xl font-bold inline border-b-2'>
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className=' max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4'>
					<div className='sm:text-right text-2xl sm:text-5xl font-bold'>
						<p>Hi, I'm Pranav ,nice to meet you.Please take a look around.</p>
					</div>
					<div className='w-full sm:text-2xl'>
						<p>
							I am passionate about building excellent software that improves
							the lives of those around me. I specialize in creating software
							for clients ranging from individuals and small-businesses all the
							way to large enterprise corporations. What would you do if you had
							a software expert available at your fingertips?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
