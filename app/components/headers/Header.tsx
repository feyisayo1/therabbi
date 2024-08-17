import Link from 'next/link'
import React from 'react'
import { zedaya } from '@/app/fonts'


const Header = () => {
  return (
    <>
        <div className="flex justify-between items-center bg-black text-purple-400 px-[5%] pt-2 fixed w-full">
            <h1 className={`font-logofont text-[3rem] ${zedaya.className}`}>TheRabbi</h1>
            <div className='flex justify-between items-center w-2/4'>
                <Link href="#Home" className='hover:text-white hover:border-b-2 transition ease-in-out delay-100'>Home</Link>
                <Link href="#about" className='hover:text-white hover:border-b-2 delay-100'>About</Link>
                <Link href="#contact" className='hover:text-white hover:border-b-2 delay-100'>Contact</Link>
            </div>
        </div>
    </>
  )
}

export default Header