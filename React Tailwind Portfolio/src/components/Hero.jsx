import React from 'react';
const Hero = () => {
  return (
    <div className='h-screen w-screen overflow-hidden 
          bg-cover bg-heroimage bg-blend-multiply bg-slate-300 
          flex flex-col justify-evenly items-center md:flex-row'  >
        <div>
           <h1 className='text-[5rem] font-bold text-gray-100'>Webdeveloper</h1>
           <p className='text-3xl font-semibold mt-6 text-gray-200'>Frontend | Backend | React | Node</p>
           <p className='text-3xl font-semibold mt-6 text-gray-200'>The sky is the limit</p>
        </div>
        <div>
        <button className='animate-bounce font-bold text-2xl 
        text-gray-100 bg-orange-400 pt-3 pb-3 pl-4 pr-4 
        rounded-md hover:bg-orange-300 hover:delay-300
         hover:text-gray-600'>IN TRAINING</button>
        </div>  
    </div>
  )
}

export default Hero