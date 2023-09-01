import React from 'react'

function Contact() {
  return (
    <div name='contact' className='p-4 bg-black w-full h-screen flex justify-center items-center'>

      <form method='post' action="https://getform.io/f/6c19bd59-9fba-430b-a39e-bcb60ad1b7a7" className='flex flex-col w-full max-w-[600px]'>
        <div className='pb-2 px-3'>
          <p className='text-4xl border-b-2 font-bold inline '>Contact</p>
          <p className='py-4'>Submit the form below or shoot me an email - pranav.ssc@gmail.com</p>
        </div>

        <input className=' p-2 bg-gray-700 ' type="text" placeholder='Name' name='name' />
        <input className='p-2 my-4 bg-gray-700' type="email" placeholder='Email' name='email' />
        <textarea  className='bg-gray-700 p-2' name="message" rows="10" placeholder='Message'></textarea>

        <button className='border-2 px-6 py-3 my-8 mx-auto hover:bg-white hover:text-black  '>
                   Let's Collaborate
                </button>
      </form>
        
    </div>
  )
}

export default Contact