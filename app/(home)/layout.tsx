import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
 
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
         
        inset-y-0 
        w-full
         z-50
         bg-white
        fixed
        '>
             <Navbar/>
        </div>
<div
className='

hidden 
md:flex
  w-56
   flex-col
    fixed
     inset-y-0 
     z-50

'>
     

</div>
<main
className='
bg-[#E6F3FF]
overflow-hidden
flex
flex-col
h-full
 
mt-[136px]
'>
  {children}
</main>

<Footer/>
     </div>
  )
}