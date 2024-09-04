"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/hero'
import About from './About/about'
import Course from './Course/course'
import Feature from './Feature/feature'
import Reveiw from './Reveiw/reveiw'
import Footer from './Footer/footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Homev = () => {

  useEffect(()=> {
   const aosint = async ()=>{
     await import('aos')
     AOS.init({
      duration: 1000,
      easing: 'ease',
      once:true,
      anchorPlacement:'top-bottom'
     })
   }
   aosint()
  },[])

  return (
    <div className=''>

       <Hero/>
       <About/>
       <Course/>
       <Feature/>
       <Reveiw/>
       
    </div>
  )
}

export default Homev