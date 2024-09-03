import React from 'react'
import { BsQuote } from 'react-icons/bs'
import Slider from './slider'

const Reveiw = () => {
  return (
    <div className='pt-16 pb-16 bg-black'>
      <div className='w-[80%] mx-auto grid grid-cols-1 xl:grid-cols-3 items-center gap-20'>
        {/* text  */}
        <div className='xl:col-span-1'>
        <div className='flex items-center space-x-4'>
      <div className='h-12 w-12 bg-red-600 rounded-full flex items-center justify-center flex-col'>
        <BsQuote className='h-6 w-6 text-white '/>
      </div>
      <h1 className='text-xl font-semibold text-white'>Student feedback</h1>
    </div>
    {/* title */}
    <h1 className='text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] mt-6'>Trusted by genius people.</h1>
        <p className='text-base font-light  text-white text-opacity-50 mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aspernatur adipisci mollitia possimus nam impedit</p>
        <div className='flex items-center space-x-10 mt-8'>
          <p className='text-white font-bold text-5xl'>99%</p>
          <p className='text-white'> Student Complete <br /> Course Successfully</p>
        </div>
        </div>
        {/* slider */}
        <div className='xl:col-span-2 rounded-lg bg-white overflow-hidden'>
          {/* import */}
          <Slider/>
          
        </div>
      </div>
      <div className='w-[80%] grid mx-auto items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-70'>

</div>
    </div>
  )
}

export default Reveiw