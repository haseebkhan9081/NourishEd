"use client"
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
function AboutUs() {
 const [isShow,setIsShow]=useState(false)
 useEffect(()=>{
setIsShow(true)
 },[])
  return (
  
<div
className='w-full
py-12
h-full
flex-col
space-y-8
font-base
justify-center
items-center
'>
 <h1
 className='text-center
 text-4xl
 
 '
 >About Us</h1>

<div   className=" bg-warmGreen p-8 py-20">
      <h2 className="text-neutralWhite text-2xl font-bold mb-6">Leaders and Team</h2>
<div
className='grid grid-cols-2
gap-4
xl:grid-cols-6
md:grid-cols-4'
>
      <Card

      className=' 
      '
      
      >
      <CardHeader>
        <CardTitle
        className='justify-center
        items-center
        w-full
        flex
        flex-col
        '>
          <Image
        src={'/team.png'}
        alt=''
        
        width={100}
        height={100}
    
        /></CardTitle>
 
      </CardHeader>
       
      <CardFooter
      className='justify-center
      items-center
      flex-col
      flex'>
     <div>
      Fawad Ahmed </div>
      <div>BOD</div>
      </CardFooter>
    </Card>
    <Card

      className=' 
      '
      
      >
      <CardHeader>
        <CardTitle
        className='justify-center
        items-center
        w-full
        flex
        flex-col
        '>
          <Image
        src={'/team2.png'}
        alt=''
        
        width={100}
        height={100}
    
        /></CardTitle>
 
      </CardHeader>
       
      <CardFooter
      className='justify-center
      items-center
      flex-col
      flex'>
     <div>
     Saima Ismail </div>
      <div>BOD</div>
      </CardFooter>
    </Card>
    <Card

      className=' 
      '
      
      >
      <CardHeader>
        <CardTitle
        className='justify-center
        items-center
        w-full
        flex
        flex-col
        '>
          <Image
        src={'/team.png'}
        alt=''
        
        width={100}
        height={100}
    
        /></CardTitle>
 
      </CardHeader>
       
      <CardFooter
      className='justify-center
      items-center
      flex-col
      flex'>
     <div>
     Faisal Hussain </div>
      <div>BOD</div>
      </CardFooter>
    </Card>
    <Card

      className=' 
      '
      
      >
      <CardHeader>
        <CardTitle
        className='justify-center
        items-center
        w-full
        flex
        flex-col
        '>
          <Image
        src={'/team.png'}
        alt=''
        
        width={100}
        height={100}
    
        /></CardTitle>
 
      </CardHeader>
       
      <CardFooter
      className='justify-center
      items-center
      flex-col
      flex'>
     <div>
     Khurram Ismail </div>
      <div>BOD</div>
      </CardFooter>
    </Card>
    <Card

      className=' 
      '
      
      >
      <CardHeader>
        <CardTitle
        className='justify-center
        items-center
        w-full
        flex
        flex-col
        '>
          <Image
        src={'/team.png'}
        alt=''
        
        width={100}
        height={100}
    
        /></CardTitle>
 
      </CardHeader>
       
      <CardFooter
      className='justify-center
      items-center
      flex-col
      flex'>
     <div>
     Khurram Ismail </div>
      <div>Press</div>
      </CardFooter>
    </Card>
    <Card

      className=' 
      '
      
      >
      <CardHeader>
        <CardTitle
        className='justify-center
        items-center
        w-full
        flex
        flex-col
        '>
          <Image
        src={'/team.png'}
        alt=''
        
        width={100}
        height={100}
    
        /></CardTitle>
 
      </CardHeader>
       
      <CardFooter
      className='justify-center
      items-center
      flex-col
      flex'>
     <div>
     Raheel Merchant</div>
      <div>Treasurer</div>
      </CardFooter>
    </Card>
    <Card

      className=' 
      '
      
      >
      <CardHeader>
        <CardTitle
        className='justify-center
        items-center
        w-full
        flex
        flex-col
        '>
          <Image
        src={'/team.png'}
        alt=''
        
        width={100}
        height={100}
    
        /></CardTitle>
 
      </CardHeader>
       
      <CardFooter
      className='justify-center
      items-center
      flex-col
      flex'>
     <div>
     Yasir Salim </div>
      <div>Secretry</div>
      </CardFooter>
    </Card>
    <Card

      className=' 
      '
      
      >
      <CardHeader>
        <CardTitle
        className='justify-center
        items-center
        w-full
        flex
        flex-col
        '>
          <Image
        src={'/team.png'}
        alt=''
        
        width={100}
        height={100}
    
        /></CardTitle>
 
      </CardHeader>
       
      <CardFooter
      className='justify-center
      items-center
      flex-col
      flex'>
     <div>
     Ali Tahir  </div>
      <div
      className='text-center'>Ops Manager NourishED.Pak</div>
      </CardFooter>
    </Card>
    </div>
        

         
      </div>
    </div>
 
    
  )
}

export default AboutUs