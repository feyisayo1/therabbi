import Image from 'next/image'
import React from 'react'
// import capture from '../../../public/capture.PNG'
import rabbi from '../../../public/rabbi.jpg'

const More = () => {
  return (
    <>
        <section className='bg-purple-100 pb-14 pt-14'>
            <div className="flex w-full h-fit items-center justify-center">
                <h1 className="flex border-none rounded-2xl outline-none text-[1.5rem] py-3 px-4  text-purple-400 leading-none hover:bg-black">
                    #Tags 
                </h1>
            </div>

            <div className='flex flex-row justify-around max-lg:flex-wrap '>
                <div className='flex flex-col justify-center w-2/5 [&>*]:text-black gap-2'>
                    <p className='text-2xl font-bold'>
                        ⚔️Body of Christ Church⚔️
                    </p>

                    <p className='font-bold'>
                        Apostle Dr. Isaac Attah <br />
                        Boamah <span className='text-purple-400'>#Rabbi</span> <br />
                        Dr.MAS <br />
                    </p>

                    <div className='inline-flex gap-2 [&>*]:text-purple-400 font-bold'>
                        <p>#Kabo Kaba.</p>
                        <p>#Apostle Glory.</p>
                        <p>#Son of the Living GOD.</p>
                        <p>#Writer.</p>
                        <p>#Counselor.</p>
                    </div>

                    <div className='inline-flex gap-2 [&>*]:text-purple-400 font-bold'>
                        <p>#Rabbi (Teacher) .</p>
                        <p>#Watcher (Keeper of Gates) in the mystical realms of God.</p>
                        {/* <p>#Reformer</p>
                        <p>#Revivalist</p>
                        <p>#Apostle of Christ.</p> */}
                    </div>

                    <div className='inline-flex gap-2 [&>*]:text-purple-400 font-bold'>
                        <p>#Revivalist</p>
                        <p>#Reformer</p>
                        <p>#Apostle of Christ.</p>
                        <p>#Apostle in the Market Place </p>
                        
                    </div>

                    <div className='inline-flex gap-2 [&>*]:text-purple-400 font-bold'>
                        <p>#Seer of God.</p>
                        <p>#Seer of the Unseen.</p>
                        <p>#Voice of the Voiceless. </p>
                        <p>#Anointing Horse Power. </p>
                        
                    </div>

                    <div className='inline-flex gap-2 [&>*]:text-purple-400 font-bold'>
                        <p>#Spiritual Bulldozer.</p>
                        <p>#Spiritual Encyclopedia. </p>
                        <p>#Bible Pasco </p>
                        <p>#The Catalyst</p>
                        <p>#Osikaba</p>
                    </div>
                    

                    <div className='inline-flex gap-2 [&>*]:text-purple-400 font-bold'>
                        <p>#Spirit took on Body</p>
                        <p>#Seal Breaker</p>
                        <p>#Spiritual Jig Saw</p>
                        <p>#Intercontinental Ballistic Missile</p>
                    </div>

                    <div className='inline-flex gap-2 [&>*]:text-purple-400 font-bold'>
                        <p>#Prophetic Ancestor</p>
                    </div>
                    <p>
                        I am God's gift to you, called to serve you with the grace message that Abba has given me.
                    </p>
                    <p> 
                        I do the Supernatural (miracles, signs and wonders) naturally.
                    </p>
                    <p>
                        I make Believers think and Thinkers believe.
                    </p>
                    <p>
                        I am for you always and I love you with the love of Christ❤️
                    </p>
                </div>

                <div className='w-[25%] h-full'>
                    <Image src={rabbi} alt='therabbi' className='rounded-2xl'/>
                </div>

            </div>
        </section>
        

       
    </>
  )
}

export default More
