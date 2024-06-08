"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'
import { Loader2, Menu } from 'lucide'
import { Clipboard, EyeIcon, Heart, Home, Info, Loader2Icon, MenuIcon, Phone, UserPlus } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import MobileMenu from './MobileMenu'

import Link from 'next/link'
import clsx from 'clsx'

function  Navbar() {
const router=useRouter()
const [isLoading,setIsLoading]=useState(false)
 const pathname=usePathname()
  return (
    <>
    <div
    className=' 
    mt-4
    w-full
    justify-between
    items-center
    p-2
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
    justify-center
    items-center
   
   '>
        <div
        className='flex
        flex-row
        '>


            
        </div>
        <div
        className='
        flex
        gap-x-8
        flex-row'
        >
            <Link
 href={'/'}
 className={clsx(
    pathname=='/'&&'border-b-2 border-[#4CB566] transition ease-in duration-300'
 )}
 >
 <div 
className='flex
flex-row
h-full
w-full
gap-x-2
justify-center
'>
    <p className='text-lg'>Home</p>
     <Home/></div></Link>           

<Link

className={clsx(
    pathname.includes('aboutus')&&'border-b-2 border-[#4CB566] transition ease-in duration-300'
 )}
href={'/aboutus'}>
<div 
className='flex
flex-row
h-full
w-full
gap-x-2
justify-center
'>
    <p className='text-lg'>About Us</p>
     <Info/></div>
</Link>
     
    <Link
    
    className={clsx(
        pathname.includes('ourVisionAndMission')&&'border-b-2 border-[#4CB566] transition ease-in duration-300'
     )}
    href={'/ourVisionAndMission'}>
    <div 
className='flex
flex-row
h-full
w-full
gap-x-2
justify-center
'>
    <p className='text-lg'>Our Vision & Mission</p>
     <EyeIcon/></div></Link>

     <Link
    className={clsx(
        pathname.includes('programs')&&'border-b-2 border-[#4CB566] transition ease-in duration-300'
     )}
     
     href={'/programs'}>
     <div 
className='flex
flex-row
h-full
w-full
gap-x-2
justify-center
'>
    <p className='text-lg'>Programs</p>
     <Clipboard/></div>
     </Link>


 <Link
 className={clsx(
    pathname.includes('getInvolved')&&'border-b-2 border-[#4CB566] transition ease-in duration-300'
 )}
 href={'/getInvolved'}>
     <div 
className='flex
flex-row
h-full
w-full
gap-x-2
justify-center
'>
    <p className='text-lg'>Get Involved</p>
     <UserPlus/></div>
    </Link>    
    
    <Link
     className={clsx(
        pathname.includes('donate')&&'border-b-2 border-[#4CB566] transition ease-in duration-300'
     )}
    href={'/donate'}
     >
     <div 
className='flex
flex-row
h-full
w-full
gap-x-2
justify-center
'>
    <p className='text-lg'>Donate</p>
     <Heart/></div>
    </Link>
    

 <Link
 className={clsx(
    pathname.includes('contactUs')&&'border-b-2 border-[#4CB566] transition ease-in duration-300'
 )}
 href={'/contactUs'}
  >
<div 
className='flex
flex-row
h-full
w-full
gap-x-2
justify-center
'>
    <p className='text-lg'>Contact Us</p>
     <Phone/></div> 
 </Link> 
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
     className='bg-green-600
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