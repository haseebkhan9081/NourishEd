"use client"
 
import React, { useState } from 'react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'
 
import {  Loader2Icon,  } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
 
 
import NavigationMenuNavbar from './NavigationMenu'

function  Navbar() {
const router=useRouter()
const [isLoading,setIsLoading]=useState(false)
 const pathname=usePathname()
  return (
    <>
    <div
    className=' 
    mt-4
    bg-slate-50
    w-full
    justify-between
    items-center
    p-2
    shadow-md
    px-8
    flex
    flex-row

    
    '>

       
        <div
        className='items-start
        justify-start
        
        flex'>
       <Logo/>
       </div>
    
       {/*Navigations,mail,phone and links*/}
    <div
    className='flex
    flex-col
    w-full
    space-y-8
    justify-center
    items-center
     
   
   '>
     
        

        {/* Navigation */}
      
        <div

        className='
       
         
        '
        >
                 <NavigationMenuNavbar/>       

 
     
   

   


     
    
    
    

  
        </div>

    </div>
    
    {/* Donate Now Button and MEnu*/}
     <div
     className='flex
     flex-row
     space-x-2

     items-center'>
     <Button
     
     onClick={()=>{
      setIsLoading(true)
      router.push('/donate')
      setIsLoading(false) 
     }}
     className='bg-[#4CB566]
     
     
     w-24
     h-9
     '
     >
      {isLoading?<Loader2Icon
     className='animate-spin'/>:"Donate Now"}
        </Button>
     
     
        </div>

        </div>
    
    
</>
  )
}

export default  Navbar;