"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'
import { Loader2, Menu } from 'lucide'
import { Loader2Icon, MenuIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import MobileMenu from './MobileMenu'

function MobileNavbar() {
const router=useRouter()
const [isLoading,setIsLoading]=useState(false)
 
  return (
    <>
    <div
    className=' 
    w-full
    justify-between
    items-center
    p-2
    flex
    flex-row

    
    '>
      
        <div
        className='items-start
        justify-start
        flex'>
       <Logo/>
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
     className='bg-warmGreen
     w-24
     h-9
     '
     >
      {isLoading?<Loader2Icon
     className='animate-spin'/>:"Donate Now"}
        </Button>
    <MobileMenu/>
     
        </div>

        </div>
    {/* the label for current page */}
{/* <div
className='
items-center
flex
p-2
h-[60px]
bg-[#C4D6E2]'>
 <p>{transformedPath}</p>

</div> */}
    
</>
  )
}

export default MobileNavbar;