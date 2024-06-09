import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileNavbar from './components/MobileNavbar'
import { Transition } from '@headlessui/react'
 
export default function layout({children}:{children
:React.ReactNode}) {
  
  return (
   
     <div
     className='
     h-full
     
     '>
       <div
        className='
         h-[80px] 
         lg:hidden
        inset-y-0 
        w-full
         z-50
         bg-white
        fixed
        '>
             <MobileNavbar/>
        </div>
<div
className='
hidden
h-[110px] 
lg:flex
inset-y-0 
w-full
z-50
bg-white
fixed

'>
  <Navbar/>   

</div>
<main

className='

overflow-hidden
flex
flex-col
h-full
mt-[110px]
'>
 {children}
  
</main>

<Footer/>
     </div>
  )
}