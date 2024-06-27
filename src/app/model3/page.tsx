import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiDownArrow } from 'react-icons/bi'

const page = () => {
  return (
    <div className='max-sm max-md max-lg'>
      <div className='w-full h-screen'>
     <Image
     src={require("../../../public/Pictures/Model-3.jpg")}
     alt="Model 3"
     className='w-full h-full object-cover'
     />
      </div>
      <div className='absolute top-[14%] left-[40%] text-center'>
      <h1 className='text-5xl font-semibold text-gray-900'>Model 3</h1>   
      <p className='text-2xl font-semibold text-gray-900'>Long Range AWD From $34990</p>
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
      <div className='absolute bottom-[15%] left-[37%] flex flex-col gap-2 lg:flex-row'>
        <button className='text-gray-800 pl-16 pr-16 py-2 rounded-md bg-white hover:bg-yellow-50'> Order Now</button>
        <button className='pl-16 pr-16 py-2 rounded-md text-white bg-gray-800 hover:bg-gray-600 lg:ml-8'>Demo Drive</button>
      </div>
      <div className='hidden lg:block absolute bottom-[6%] mx-[26rem] text-center text-sm text-white'>
      <p>*Price before estimated savings is $72,990, excluding taxes and fees. Subject to change.</p>
<p>Specs displayed are Model S Plaid values.</p></div>
    <div className='absolute bottom-[2%] left-[50%] text-lg animate-bounce'>
      <Link href="/modelx"><BiDownArrow/></Link>
    </div>
    </div>
  )
}

export default page