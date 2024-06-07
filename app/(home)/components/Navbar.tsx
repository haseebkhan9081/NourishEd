"use client"
import Image from 'next/image'
import React from 'react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide'
import { MenuIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'

function Navbar() {
 const pathname=usePathname()
 
 const transformedPath = pathname === '/' ? 'Home' : `Home${pathname}`;
 
 
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
     className='bg-green-600
     w-24
     h-9
     '
     >Donate Now</Button>
     <MenuIcon/>
     
        </div>

        </div>
    {/* the label for current page */}
<div
className='
items-center
flex
p-2
h-[60px]
bg-[#C4D6E2]'>
 <p>{transformedPath}</p>

</div>
    
</>
  )
}

export default Navbar