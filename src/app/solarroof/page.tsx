import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className=''>
        <div className='w-full h-screen'>
            <Image
            src={require("../../../public/Pictures/Solar Roof.jpg")}
            alt="Solar Roof"
            className='w-full h-full object-cover'/>
        </div>
        <div className='absolute top-[14%] left-[40%] text-center'>
            <h1 className='text-4xl font-semibold text-black'>Solar Roof</h1>
            <p className='text-sm font-semibold text-black'>Produce Clean Energy From Your Roof</p>
        </div>
        <div className='absolute bottom-[14%] left-[32%] text-center flex flex-col gap-2 lg:flex-row'>
            <button className='text-gray-800 pl-16 pr-16 py-2 rounded-md bg-white hover:bg-yellow-50'>Order Now</button>
            <button className='pl-16 pr-16 py-2 rounded-md text-white bg-gray-800 hover:bg-gray-600 lg:ml-8'>Learn More</button>
        </div>
    </div>
  )
}

export default page