"use client"
import React from 'react'
import AnalogClock from './Timer'
import Link from 'next/link'
import { CallCalling, Message } from "iconsax-react";


const Contact = () => {
  return (
    <>
      <section id='contact' className='pb-14 pt-14'>
        <div className="flex w-full h-fit items-center justify-center">
              <h1 className="flex border-none rounded-2xl outline-none text-[1.5rem] py-3 px-4  text-purple-400 leading-none hover:bg-black">
                  Get In Touch
              </h1>
          </div>

          <div className='text-center'>
            <h1 className='text-[2rem] pt-4 pb-4'>ONE ON ONE SESSIONS ARE AVAILABLE</h1>

            <h1 className='text-[2rem] pt-4 pb-4'>COUNSELLING DAYS /TIME WITH DR. MAS</h1>

            <AnalogClock/>
          </div>

          <div className='flex flex-row justify-around text-center max-sm:flex-col'>
            <div>
              <h1 className='text-2xl font-bold'>WEDNESDAYS</h1>
              <p>2:30pm - 5:30pm GMT</p>
            </div>
            <div>
              <h1 className='text-2xl font-bold'>THURSDAYS</h1>
              <p>3:30pm - 5:30pm GMT</p>
            </div>
            <div>
              <h1 className='text-2xl font-bold'>FRIDAYS</h1>
              <p>2:30pm - 5:30pm GMT</p>
            </div>
          </div>

          <h1 className='text-center text-[2rem] pt-4 pb-4'>COUNSELLING IS BY APPOINTMENT ONLY</h1>

          <h2 className='text-center text-[1.5rem]'>
            Please contact Dr MAS Personal Assistants to secure your appointment today.
          </h2>

          <h2 className='text-center text-[1.5rem]'>
            Text or Call via WhatsApp.
          </h2>
          
          <div className="flex flex-row gap-4 text-black justify-center text-[20px] font-medium max-md:text-[18px] max-sm:text-[16px] pt-4">
            <Link href="mailto:abc@gmail.com" className="flex gap-2 items-center">
              <Message className='text-purple-400'/>
              <p>abc@gmail.com</p>
            </Link>

            <Link href="https://wa.me/260771581193?text=HELLO%20Dr%20MAS%20I%20WOULD%20LIKE%20TO%20HAVE%20A%20SESSION " className="flex gap-2 items-center">
              <CallCalling className='text-purple-400'/>
              <p>+260 771581193</p>
            </Link>
          </div>
      </section>
    
    </>
  )
}

export default Contact