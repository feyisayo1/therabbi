import React from 'react'
import Image from 'next/image'
// import therabbi from '../../therabbi.PNG'
import therabbi from '../../../public/therabbi.PNG'

const HeroSection = () => {
  return (
    <>
    <section className="bg-[url('https://media.licdn.com/dms/image/D5612AQEWtCdEtqfmsg/article-cover_image-shrink_600_2000/0/1696699790434?e=2147483647&v=beta&t=4eHd7ptWfNEBmmPO5iTRxPBaX0W6UJi_XKEUKH0EMcY')] bg-cover bg-center bg-no-repeat">
        {/* <div className='bg-gradient-to-r from-fuchsia-400 to-violet-400 h-screen pt-40 flex flex-row justify-around'> */}
        <div className='bg-gradient-to-r from-fuchsia-400 to-transparent h-screen pt-40 flex flex-row justify-around'>
          <div className='flex flex-col justify-center w-2/5'>
            <p className='text-white font-extralight text-[40px]'>
              Greetings Generals. It is my privilege and honour to be here with us. My name is Rabbi Dr. MAS and I am a Son of God!
            </p>
          </div>
        

            <div className=''>
              <Image src={therabbi} alt='therabbi'className='h-[80vh] flex flex-row justify-center rounded-2xl'/>
              {/* <img src="https://images.msha.ke/d30b510f-8084-4048-8b89-5c3a7951a6e5?auto=format%2Ccompress&cs=tinysrgb&q=30&w=828" alt="TheRabbi" className='h-[80vh] flex flex-row justify-center '/> */}
            </div>
          
          {/* </div> */}
        </div>
      </section>
    </>
  )
}

export default HeroSection