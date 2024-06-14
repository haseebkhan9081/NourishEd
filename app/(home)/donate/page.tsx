"use client"
import { Transition } from '@headlessui/react'
import { useState } from 'react'
import DonateNowForm from './components/DonateNowForm'
import MainForm from './components/MainForm'

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
'>
<div>
  <MainForm/>
</div>
<div>
  the image
</div>
</div>

     </div>
  )

}