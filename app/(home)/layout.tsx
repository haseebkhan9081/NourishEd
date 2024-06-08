import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MobileNavbar from './components/MobileNavbar'
 
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
         md:hidden
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
md:flex
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
bg-[#E6F3FF]
overflow-hidden
flex
flex-col
h-full
p-6
mt-[110px]
'>
  {children}
</main>

<Footer/>
     </div>
  )
}