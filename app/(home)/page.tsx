"use client"
import React, { useEffect, useState } from 'react'
import CarouslHome from './components/Carousel'
import Image from 'next/image'
import { Transition } from '@headlessui/react'

function Home() {

  const [isShow,setIsShow]=useState(false);
  useEffect(()=>{
setIsShow(true)
  },[])
  return (

    <div
    className='w-full
    inset-0
    h-full'> 

   
    <div
    className=' 
    inset-0
    w-full'
    >
       <Transition
       
          appear={true}
          show={isShow}
          enter="transform transition duration-1000"
          enterFrom="translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
          leave="transform transition duration-1000"
          leaveFrom="translate-y-0 opacity-100"
          leaveTo="translate-y-full opacity-0"
        >
        <div
        className='w-full
        h-full
        inset-0'
        > <CarouslHome/></div>
        </Transition>
      
      </div>



  </div>
  )
}

export default Home