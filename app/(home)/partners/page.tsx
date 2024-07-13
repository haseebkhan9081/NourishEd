"use client"
import { Transition } from '@headlessui/react';
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface Partner{
  id:number;
  img:string;
  title:string;
  involvement:string
}

function OurPartners() {

  const [partners, setPartners] = useState<Partner[]|[]>([])
  const [isDataLoading,setIsDataLoading]=useState(false);
 
    useEffect(() => {
      
      // Fetch data from programs.json
      setIsDataLoading(true)
      axios.get('/api/partners').then((Response)=>{
        setPartners(Response.data)
      }).catch((Err)=>{
        console.log(Err)
      }).finally(()=>{
        setIsDataLoading(false);
      })
    }, [])


  return (
    <div className="bg-warmGreen
py-20 
p-8">
  <Transition
   appear={true}
   show={true}
   enter="transform transition duration-1000"
   enterFrom="translate-y-full opacity-0"
   enterTo="translate-y-0 opacity-100"
   leave="transform transition duration-1000"
   leaveFrom="translate-y-0 opacity-100"
   leaveTo="translate-y-full opacity-0"
 >
<div> <h2 className="text-white text-center text-4xl font-bold mb-6">Our Partners</h2></div></Transition>
 
  {isDataLoading&&
  <div
  className='justify-center
  items-center
  text-warmGreen
  w-full
  flex'>  <Loader2
  className='animate-spin
  '
  /></div>}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

{partners?.map((partner,index)=>(
  <div 
  key={index}
  className="flex flex-col items-center bg-neutralWhite p-4 rounded shadow-md">
      <Image src="/Logo.png" alt="Partner 1" 
      width={100}
      className='mb-4'
      height={100}
      />
      <h3 className="text-charcoalGray text-xl font-bold">{partner?.title}</h3>
      <p className="text-charcoalGray">{partner?.involvement}</p>
    </div>
))}
  </div>

  
</div>
  )
}

export default OurPartners