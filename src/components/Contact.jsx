import React from 'react';
import TEDDYEYE from '../assets/teddy_eye.png';
import TEDDYE from '../assets/teddy_img.png';

function Contact() {
	return (
		<div
			name='contact'
			className='p-4 pt-[80px] bg-black w-full  flex justify-center items-center'
		>
			<form
				method='post'
				action='https://getform.io/f/6c19bd59-9fba-430b-a39e-bcb60ad1b7a7'
				className='flex flex-col w-full max-w-[600px]'
			>
				<div className='pb-2 px-3'>
					<p className='text-4xl border-b-2 font-bold inline '>Contact</p>
					<p className='py-4'>
						Submit the form below or shoot me an email - pranav.ssc@gmail.com
					</p>
				</div>
				<div>
					<div className='relative  mb-2  top-5'>
						<div className='flex justify-center animate-bounce'>
							<div className='absolute inline-block top-[60px] sm:top-[100px] left-[44%]'>
								<img
									src={TEDDYEYE}
									className='w-[20%] '
									alt=''
								/>
							</div>

							<img
								src={TEDDYE}
								className='w-[30%] bg-transparent rounded-full'
								alt=''
							/>
						</div>
					</div>
				</div>

				<input
					className=' p-2 bg-gray-700 '
					type='text'
					placeholder='Name'
					name='name'
					required
				/>
				<input
					className='p-2 my-4 bg-gray-700'
					type='email'
					placeholder='Email'
					name='email'
					required
				/>
				<textarea
					className='bg-gray-700 p-2'
					name='message'
					rows='10'
					placeholder='Message'
				></textarea>

				<button className='border-2 px-6 py-3 my-8 mx-auto hover:bg-white hover:text-black  '>
					Let's Collaborate
				</button>
			</form>
		</div>
	);
}

export default Contact;
