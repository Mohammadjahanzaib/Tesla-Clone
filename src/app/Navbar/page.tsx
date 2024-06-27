import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PiSignInDuotone } from "react-icons/pi";

const Navbar = () => {
  return (
    <div>
    <div className='max-sm max-md max-lg flex justify-between items-center w-full fixed top-0 z-10 m-3 p-3'>
        <Link href={"/models"}>
        <Image
        src={require("../../../public/Pictures/tesla.svg")}
        alt="Tesla Logo"
        height={100}
        width={100}
        />
        </Link>
      <div className='hidden lg:block'>          
    <Link href={"/models"} className='text-sm font-semibold hover:bg-gray-200 hover:border rounded-sm p-1 text-gray-900 mr-2'>Model S</Link>
    <Link href={"/model3"} className='text-sm font-semibold hover:bg-gray-200 hover:border rounded-sm p-1 text-gray-900 mr-2'>Model 3</Link>
    <Link href={"/modelx"} className='text-sm font-semibold hover:bg-gray-200 hover:border rounded-sm p-1 text-gray-900 mr-2'>Model X</Link>
    <Link href={"/modely"} className='text-sm font-semibold hover:bg-gray-200 hover:border rounded-sm p-1 text-gray-900 mr-2'>Model Y</Link>
    <Link href={"/solarpanels"} className='text-sm font-semibold hover:bg-gray-200 hover:border rounded-sm p-1 text-gray-900 mr-2'>Solar Panels</Link>
    <Link href={"/solarroof"} className='text-sm font-semibold hover:bg-gray-200 hover:border rounded-sm p-1 text-gray-900 mr-2'>Solar Roof</Link>
    </div>
    <div>
    <Link href={"/signin"}><PiSignInDuotone className='text-5xl pr-6'/></Link>
    </div>
    </div>
    </div>
  )
}

export default Navbar