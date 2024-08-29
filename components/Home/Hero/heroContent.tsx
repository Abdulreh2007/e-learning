"use client";
import { Main } from "next/document";
import { TextGenerateEffect } from "../../ui/textgenerate";
 
const words = `Best Online Platform For Education.`;


const HeroContent = () => {
    return (
        <div>
    
    <TextGenerateEffect duration={2} filter={false} words={words}  />;
    <p className="mt-6 text-sm md:text-base text-white text-opacity-60">
    The best online education platform offers comprehensive courses flexible learning expert instructors and certifications for career advancement
    </p>
    <div className="mt-8 flex items-center space-x-4">
        <button className="md:px12 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg bg-green-700 hover:bg-green-900 hover:underline">Get Started</button>
        <button className="md:px12 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 rounded-lg bg-yellow-700 hover:bg-yellow-900 hover:underline">Learn More</button>
    </div>
    {/* stars */}
    <div className=" flex items-center flex-wrap space-x-16 mt-8">
        {/* tutors */}
     <div>
        <p className="md:text-xl lg:text-2xl text-base text-white font-bold">260+</p>
        <p className="w-[100px] h-[3px] mt-2 mb-2 bg-green-600 hover:bg-green-900 rounded-lg" ></p>
        <p className="md:text-lg text-sm text-white text-opacity-70 font-semibold ">Tutors</p>
     </div>
     {/* Students */}
     <div>
        <p className="md:text-xl lg:text-2xl text-base text-white font-bold">2260+</p>
        <p className="w-[100px] h-[3px] mt-2 mb-2 bg-blue-600 rounded-lg hover:bg-blue-900" ></p>
        <p className="md:text-lg text-sm text-white text-opacity-70 font-semibold ">Students</p>
     </div>
     {/* Courses */}
     <div>
        <p className="md:text-xl lg:text-2xl text-base text-white font-bold">60+</p>
        <p className="w-[100px] h-[3px] mt-2 mb-2 bg-pink-600 rounded-lg hover:bg-pink-900" ></p>
        <p className="md:text-lg text-sm text-white text-opacity-70 font-semibold ">Courses</p>
     </div>
    </div>
    </div>
    )
    
}

export default HeroContent