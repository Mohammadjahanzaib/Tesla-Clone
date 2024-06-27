import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiDownArrow } from 'react-icons/bi'

const page = () => {
  return (
    <div className='max-sm max-md max-lg'>
        <div className='w-full h-screen'>
            <Image
            src={require("../../../public/Pictures/Model-Y.jpg")}
            alt="Model Y"
            className='w-full h-full object-cover'/>
        </div>
        <div className='absolute top-[14%] left-[45%] text-center'>
            <h1 className='text-5xl font-semibold text-gray-900'>Model Y</h1>
            <p className='text-2xl font-semibold text-gray-900'>From $31,490</p>
            <p className='text-sm text-gray-600'>After Est. Savings</p>
        </div>
        <div className='hidden lg:block'>
        <div className='flex flex-row absolute bottom-[25%] left-[33%] text-center text-4xl font-serif text-white place-items-center gap-8'>
      <h1>326 mi</h1>
      <h1>2.5 s</h1>
      <h1>9.9 s</h1>
      <h1>1,020 hp</h1>
    </div>
    <div className='flex flex-row absolute bottom-[22.5%] left-[36%] text-sm font-serif text-white place-items-center'>
      <h1 className='-mx-8'>Range (EPA est.)</h1>
      <h1 className='mx-16'>0-60 mph*</h1>
      <h1 className='mx-[-.9rem]'>1/4 Mile</h1>
      <h1 className='mx-[4.1rem]'>Peak Power</h1>
    </div>
    </div>
        <div className='absolute bottom-[10%] left-[37%] text-center flex flex-col gap-2 lg:flex-row'>
            <button className='text-gray-800 pl-14 pr-14 py-2 rounded-md bg-white hover:bg-yellow-50'>Order Now</button>
            <button className='pl-14 pr-14 py-2 rounded-md text-white bg-gray-800 hover:bg-gray-600 lg:ml-8'>Demo Drive</button>
        </div>
        <div className='absolute bottom-[2%] left-[50%] text-2xl animate-bounce'>
      <Link href="/solarpanels"><BiDownArrow/></Link>
    </div>
        <div>
          
        </div>
    </div>
  )
}

export default page