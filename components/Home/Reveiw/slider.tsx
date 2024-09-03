"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react'
import Slidercard from '@/components/Helper/slidercard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1324 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1324, min: 764 },
      items: 1,
      slidesToSlide:1  // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const Slider = () => {
  return <Carousel additionalTransfrom={0} arrows={true} autoPlay={true} autoPlaySpeed={3000} centerMode={false}
  infinite responsive={responsive} itemClass='item'>
         <Slidercard 
         image='/images/r1.jpg'
         name='Jasica Doe'
         role='Web Developer'/>
         <Slidercard 
         image='/images/r2.jpg'
         name='Jhon Doe'
         role='CEO'/>
         <Slidercard 
         image='/images/r3.jpg'
         name='Jane Smith'
         role='SEO'/>
  </Carousel>
}

export default Slider