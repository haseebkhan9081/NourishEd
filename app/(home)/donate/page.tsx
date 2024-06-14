"use client"
import { Transition } from '@headlessui/react'
import { useState } from 'react'
import DonateNowForm from './components/DonateNowForm'
import MainForm from './components/MainForm'
import Image from 'next/image'

export default function Donate() {
  const [isShowing, setIsShowing] = useState(false)

  return (
     <div
     className='w-full
     pt-6
     justify-center
     items-center
     flex
     flex-col'>
<h1
className='text-center
text-warmGreen
p-3
font-bold
text-2xl
'>Donate now to provide meals to children with need</h1>

<div
className='grid
grid-cols-1
lg:grid-cols-2
gap-36
'>
<div
className='w-full
justify-center
flex

items-center'>
  <MainForm />
</div>
<div
className='w-[400px]
flex-col
flex
  p-4
space-y-4
'>
   <Image
   src={"/image1.png"}
   className='rounded-sm'
   alt=''
   layout='responsive'
   width={100}
   height={100}
   />
   <div
   className='text-slate-700'>Your generosity makes a world of difference. By selecting an amount to donate, youre directly contributing to NourishEds mission of eradicating hunger from classrooms in Pakistan. Every dollar you give ensures that students receive nutritious meals, allowing them to focus on their education and reach their full potential. Together, we can transform lives and create a brighter future for these children. Choose an amount below to begin your contribution and join us in making hunger-free classrooms a reality. Thank you for your support!</div>
</div>
</div>

     </div>
  )

}
