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
    space-y-4
    justify-center
    items-center
   
   '>
        <div
        className='flex
        flex-row
        lg:gap-x-20
         
        '>
            {/* social media links */}
 <div

className='flex
flex-row
w-full
justify-center
items-center
gap-x-8
text-slate-700
'>
<FaInstagram
size={24} />
<FaLinkedin
size={24}/>
<FaFacebook
size={24}/>
<FaTwitter
size={24}/>
<FaYoutube
size={24}/>


</div>
{/* Mail to */}
<div
className='flex
flex-row
gap-x-2'

>
  <SiGmail
  size={24}/>
  <a href="mailto:donorcare@Nourished.org">
        <p
        className='font-medium
        text-slate-700'>donorcare@Nourished.org</p>
      </a>
</div>
{/* Phone */}
<div
className='flex
flex-row
gap-x-2'

>
  <Phone
  size={24}/>
  <a href="tel:+1234567890">
        <p
        className='font-medium
        text-slate-700'>+1234567890</p>
      </a>
</div>

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
    <p className='xl:text-lg text-sm'>Home</p>
     <Home
      className='w-4
      xl:w-6
      xl:h-6
      h-4'   /></div></Link>           

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
    <p className='xl:text-lg text-base'>About Us</p>
     <Info
      className='w-4
      xl:w-6
      xl:h-6
      h-4'/></div>
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
    <p className='xl:text-lg text-sm'>Our Vision & Mission </p>
     <EyeIcon
     className='w-4
     xl:w-6
     xl:h-6
     h-4'/></div></Link>

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
    <p className='xl:text-lg  text-sm'>Programs</p>
     <Clipboard
     className='w-4
     xl:w-6
     xl:h-6
     h-4'/></div>
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
    <p className='xl:text-lg text-sm'>Get Involved</p>
     <UserPlus
     className='w-4
     xl:w-6
     xl:h-6
     h-4'/></div>
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
    <p className='xl:text-lg text-sm'>Donate</p>
     <Heart
      className='w-4
      xl:w-6
      xl:h-6
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
justify-center
'>
    <p className='xl:text-lg text-sm'>Contact Us</p>
     <Phone
     className='w-4
     xl:w-6
     xl:h-6
     h-4'/></div> 
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