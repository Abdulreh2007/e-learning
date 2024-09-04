"use client"
import React from 'react'

import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import { FaAward, FaBriefcase } from 'react-icons/fa'

const Feature = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='mt-8 grid grid-cols-1 xl:grid-cols-2 items-center gap-12 w-[80%] mx-auto'>
          {/* image */}
          <div className='mr-10'>
            <Tilt>
              <div data-aos="zoom-in" 
                      data-aos-anchor-placement='top-center' >             
            <Image src='/images/f.png'
            width={1000}
            height={1000}
            alt='hero' />
             </div>
            </Tilt>
          </div>
          {/* content */}
          <div>
        <div>
        <div className='flex items-center space-x-4'>
      <div className='h-12 w-12 bg-red-600 rounded-full flex items-center justify-center flex-col'>
        <FaBriefcase className='h-6 w-6 text-white '/>
      </div>
      <h1 className='text-xl font-semibold text-black'>Premium learning experience</h1>
    </div>
    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold md:leading-[3rem]
        lg:leading-[3.5rem] xl:leading-[4rem] text-black mt-8 '>Providing amazing online courses.
    </h1>
    {/* heading 1 */}
     <h1 className='mt-5 text-gray-600 font-semibold text-xl text-opacity-70'>
       Master the skills that matter to you
       <p className='text-base font-light mt-3 text-opacity-100'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis a aliquid necessitatibus consequuntur delectus quas ipsam illum ipsum.
       </p>
       </h1>
       {/* heading 2 */}
       <h1 className='mt-4 text-gray-600 font-semibold text-xl text-opacity-70'>
       Increase your learning skills
       <p className='text-base font-light mt-3 text-opacity-100'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis a aliquid necessitatibus consequuntur delectus quas ipsam illum ipsum.
       </p>
       </h1>
        </div>
          </div>
        </div>
    </div>
  )
}

export default Feature