"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Logo from './Logo'
import { Button } from '@/components/ui/button'
 
import { Clipboard, EyeIcon, Heart, Home, Info, Loader2Icon, MenuIcon, Phone, PhoneCall, UserPlus } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
 

import Link from 'next/link'
import clsx from 'clsx'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import { SiGmail } from 'react-icons/si'

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
        flex
        gap-x-8
        flex-row
         
        '
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
items-center
justify-center
'>
    <p className='xl:text-base text-sm'>Home</p>
     </div></Link>           

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
items-center
gap-x-2
justify-center
'>
    <p className='xl:text-base text-base'>About Us</p>
      </div>
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
items-center
justify-center
'>
    <p className='xl:text-base text-sm'>Our Vision & Mission </p>
     </div></Link>

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
items-center
justify-center
'>
    <p className='xl:text-base  text-sm'>Programs</p>
     </div>
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
items-center
gap-x-2
justify-center
'>
    <p className='xl:text-base text-sm'>Get Involved</p>
     </div>
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
items-center
justify-center
'>
    <p className='xl:text-base text-sm'>Donate</p>
     <Heart
      className='w-4
       
      h-4'/></div>
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
items-center
justify-center
'>
    <p className='xl:text-base text-sm'>Contact Us</p>
      </div> 
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