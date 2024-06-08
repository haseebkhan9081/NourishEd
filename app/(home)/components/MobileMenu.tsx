import React, { useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Clipboard, EyeIcon, Heart, Home, Info, Menu, Phone, UserPlus } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
  
function MobileMenu() {
    const [open,setIsOpen]=useState(false)
  return (
    <Sheet
    open={open}
    onOpenChange={(open)=>{setIsOpen(open)}}
    >
    <SheetTrigger onClick={()=>{setIsOpen(prev=>!prev)}}  ><Menu/></SheetTrigger>
    <SheetContent>
      <SheetHeader
      className='h-full'>
        <SheetTitle>User Profile here if we allow them to Login in future...</SheetTitle>
         <Separator
         />
         <div
         className='w-full
         pt-8
         flex
         flex-col
         justify-center
         items-center
         
         space-y-8'>
 <Link
 href={'/'}
 onClick={()=>setIsOpen(false)}
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
onClick={()=>setIsOpen(false)}
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
    onClick={()=>setIsOpen(false)}
    
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
     onClick={()=>setIsOpen(false)}
     
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
 onClick={()=>setIsOpen(false)}
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
    href={'/donate'}
    onClick={()=>setIsOpen(false)}>
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
 
 href={'/contactUs'}
 onClick={()=>setIsOpen(false)}>
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
      </SheetHeader>
    </SheetContent>
  </Sheet>
    
  )
}

export default MobileMenu