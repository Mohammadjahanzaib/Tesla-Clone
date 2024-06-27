import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiDownArrow } from 'react-icons/bi'

const page = () => {
  return (
    <div className='max-sm max-md max-lg'>
        <div className='w-full h-screen'>
            <Image
            src={require("../../../public/Pictures/Solar Panels.jpg")}
            alt="Solar Panels"
            className='h-full w-full object-cover'/>
        </div>
        <div className='absolute top-[14%] left-[40%] text-center'>
            <h1 className='text-4xl font-semibold text-white'>Solar Panels</h1>
            <p className='text-sm font-semibold text-white underline'>Schedule a Virtual Consultation</p>
        </div>
        <div className='absolute bottom-[14%] left-[32%] text-center flex flex-col gap-2 lg:flex-row'>
            <button className='text-gray-800 pl-16 pr-16 py-2 rounded-md bg-white hover:bg-yellow-50'>Order Now</button>
            <button className='pl-16 pr-16 py-2 rounded-md text-white bg-gray-800 hover:bg-gray-600 lg:ml-8'>Learn More</button>
        </div>
        <div className='absolute bottom-[2%] left-[50%] text-white text-2xl animate-bounce'>
      <Link href="/solarroof"><BiDownArrow/></Link>
    </div>
    </div>
  )
}

export default page