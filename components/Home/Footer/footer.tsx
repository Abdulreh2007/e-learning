import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-black'>
        <div className='w-[80%] grid mx-auto items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20'>
   {/* 1st */}
     <div>
        <Image src='/images/logo.png' alt='images' height={100} width={100} />
        <p className='text-white text-opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quaerat!</p>
        {/* socail io */}
        <div className='flex items-center space-x-4 mt-6'>
            <FaFacebookF className='w-6 h-6 text-[#3b5999] '/>
            <FaLinkedinIn className='w-6 h-6 text-[#0077b5] '/>
            <FaTwitter className='w-6 h-6 text-[#006db5]'/>
            <FaInstagram className='w-6 h-6 text-[#e4405f]'/>
        </div>
     </div>
      {/* 2nd */}
      <div>
        <h1 className='footer__heading'>Popular Courses</h1>
        <p className='footer__link'>Web development</p>
        <p className='footer__link'>Hacking</p>
        <p className='footer__link'>UI/UX Design</p>
        <p className='footer__link'>App Development</p>
        <p className='footer__link'>Desktop Development</p>
        <p className='footer__link'>Digital Marketing</p>
      </div>
      {/* 3rd */}
      <div>
      <h1 className='footer__heading'>Quick Link</h1>
        <p className='footer__link'>Home</p>
        <p className='footer__link'>About</p>
        <p className='footer__link'>Courses</p>
        <p className='footer__link'>Instructor</p>
        <p className='footer__link'>Profile</p>
        <p className='footer__link'>Privacy Policy</p>
      </div>
      {/* 4 */}
      <div>
        <h1 className='footer__heading'>Subscribe our Newsletter</h1>
        <input type="text" placeholder='Enter your email' className='px-3 py-2 rounded-lg outline-none bg-gray-600 w-full text-white'/>
        <button className='px-3 py-2 mt-4 rounded-lg outline-none bg-rose-600 w-full text-white'>Subscribe</button>
      </div>
        </div>
        <p className='text-center mt-4 text-white text-opacity-70 text-base'>©Copyright 2024 by webdev <span className='font-bold'>Abdul</span> </p>
    </div>
  )
}

export default Footer