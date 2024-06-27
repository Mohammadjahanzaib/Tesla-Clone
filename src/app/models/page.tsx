import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiDownArrow } from 'react-icons/bi'

const page = () => {
  return (
    <div className='max-sm max-md max-lg'>
    <div className='w-full h-screen'>
        <Image
        src={require("../../../public/Pictures/Model-S.jpg")}
        alt="Model S"
        className='w-full h-full object-cover'/>
    </div>
    <div className='absolute top-[14%] left-[45%] text-center'>
        <h1 className='text-5xl font-semibold text-gray-900'>Model S</h1>
        <p className='text-2xl font-semibold text-gray-900'>From $66,490</p>
        <p className='text-sm text-gray-600'>After Est. Savings</p>
    </div>
    <div className='hidden lg:block'>
    <div className='flex flex-row absolute bottom-[25%] left-[33%] text-center text-4xl font-serif text-white place-items-center gap-8'>
      <h1>359 mi</h1>
      <h1>1.99 s</h1>
      <h1>200 mph</h1>
      <h1>1,020 hp</h1>
    </div>
    <div className='flex flex-row absolute bottom-[22.5%] left-[36%] text-sm font-serif text-white place-items-center'>
      <h1 className='-mx-8'>Range (EPA est.)</h1>
      <h1 className='mx-16'>0-60 mph*</h1>
      <h1 className='mx-[1.99rem]'>Top Speed†</h1>
      <h1 className='mx-[4.1rem]'>Peak Power</h1>
    </div>
    </div>
    <div className='absolute bottom-[14%] left-[37%] text-center flex flex-col gap-2 lg:flex-row'>
    <button className='border-2 rounded-md px-16 py-2 hover:bg-yellow-50 text-gray-800'>Order Now</button>
    <button className='rounded-md bg-gray-800 px-16 py-2 text-white hover:bg-gray-600 lg:ml-8'>Demo Drive</button>
    </div>
    <div className='hidden lg:block absolute bottom-[6%] mx-[26rem] text-center text-sm text-white'>
      <p>*Price before estimated savings is $72,990, excluding taxes and fees. Subject to change.</p>
<p>Specs displayed are Model S Plaid values.</p></div>
<div className='absolute bottom-[2%] left-[50%] text-lg animate-bounce'>
      <Link href="/model3"><BiDownArrow/></Link>
    </div>
    </div>
  )
}

export default page