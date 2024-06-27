import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiDownArrow } from 'react-icons/bi'

const page = () => {
  return (
    <div className='max-sm max-md max-lg'>
        <div className='w-full h-screen'>
            <Image
            src={require("../../../public/Pictures/Model-X.jpg")}
            alt="Model X"
            className='h-full w-full object-cover'/>
        </div>
        <div className='absolute top-[14%] left-[45%] text-center'>
            <h1 className='text-5xl font-semibold text-gray-900'>Model X</h1>
            <p className='text-2xl font-semibold text-gray-900'>From $63,990</p>
            <p className='text-sm text-gray-600'>After Est. Savings</p>
        </div>
        <div className='hidden lg:block'>
        <div className='flex flex-row absolute bottom-[25%] left-[38%] text-center text-4xl font-serif text-white place-items-center gap-8'>
      <h1>76 cu ft</h1>
      <h1>320 mi</h1>
      <h1>AWD</h1>
    </div>
    <div className='flex flex-row absolute bottom-[22.5%] left-[42%] text-sm font-serif text-white place-items-center'>
      <h1 className='-mx-8'>Cargo Space</h1>
      <h1 className='mx-[6.9rem]'>Range (est.)</h1>
      <h1 className='mx-[-3.9rem]'>Dual Motor</h1>
    </div>
    </div>
        <div className='absolute bottom-[12%] left-[37%] flex flex-col gap-2 lg:flex-row'>
            <button className='text-gray-800 pl-16 pr-16 py-2 rounded-md bg-white hover:bg-yellow-50'>Order Now</button>
            <button className='pl-16 pr-16 py-2 rounded-md text-white bg-gray-800 hover:bg-gray-600 lg:ml-8'>Demo Drive</button>
        </div>
        <div className='absolute bottom-[2%] left-[50%] text-2xl text-white animate-bounce'>
      <Link href="/modely"><BiDownArrow/></Link>
    </div>
    </div>
  )
}

export default page