import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

type Props ={
  name:string,
  role:string,
  image:string
} 

const Slidercard = ({image,name,role}:Props) => {
  return (
    <div className='flex flex-wrap sm:flex-nowrap items-center space-x-10'>
      <div className='h-full w-full'>
        <Image src={image} alt='reviw' width={350} height={350} className='w-full h-full'/>
      </div>
      <div className='mt-6 mb-7'>
        <div className='flex items-center'>
          <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'/>
          <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'/>
          <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'/>
          <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'/>
          <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'/>
        </div>
        <p className='mt-6 text-gray-800 w-[95%] md:w-[80%] font-semibold text-xs md:text-sm lg:text-base text-opacity-65'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi iure nulla, reprehenderit quaerat exercitationem repudiandae doloribus asperiores odio ipsam quo, corporis vitae! Neque nisi, minima sunt eum alias quod illo!</p>
        <div className='mt-7'>
           <p className='text-xl font-semibold text-black'>{name}</p>
           <p className='text-lg text-opacity-60'>{role}</p>
        </div>

      </div>
       <div className='w-[80%] grid mx-auto items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20'>

        </div>
    </div>
    
  )
}

export default Slidercard