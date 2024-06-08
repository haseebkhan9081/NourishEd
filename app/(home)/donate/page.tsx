"use client"
import { Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react'

function Donate() {
 const [isShow,setIsShow]=useState(false)
 useEffect(()=>{
setIsShow(true)
 },[])
  return (
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
<div>Donate</div>
 </Transition>
    
  )
}

export default Donate