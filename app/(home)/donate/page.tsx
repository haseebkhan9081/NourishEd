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
'>Donate now to provide meals to children in need</h1>

<div
className='grid
grid-cols-1
 
gap-36
'>
<div
className='w-full
justify-center
flex

items-center'>
  <MainForm />
</div>
 
</div>

     </div>
  )

}
