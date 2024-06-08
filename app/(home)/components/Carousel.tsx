"use client"
import Autoplay from "embla-carousel-autoplay"
import React, { useState } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Loader2Icon } from "lucide-react"
const images=[
{src:'image1.png'},
{src:'image2.png'},
{src:'image3.png'},
]  
function CarouslHome() {
    const router=useRouter()
const [isLoading,setIsLoading]=useState(false)
    const plugin = React.useRef(
        Autoplay({ delay: 4000, stopOnInteraction: true })
      )
  return (
    <Carousel
    plugins={[plugin.current]}
    className='w-full'
     >
  <CarouselContent
  className='w-full'>

{images.map((image,index)=>(
    <CarouselItem
    key={index}
 className='w-full
 
 '>

<div className="relative w-full flex justify-center items-center">
<Button
     onClick={()=>{
      setIsLoading(true)
      router.push('/donate')
      setIsLoading(false) 
     }}
     className='bg-green-600
      
     absolute
     bottom-4
     md:bottom-40
     z-50
     '
     >
      {isLoading?<Loader2Icon
     className='animate-spin'/>:"Donate Now"}
        </Button>
  <Image
    className="rounded-lg
    hover:opacity-75
    hover:transition
    hover:duration-300
    "
    src={'/'+image.src}
    alt='image'
    layout='responsive'
    width={100}
    height={100}
    objectFit='cover'
  />
 
</div>

 </CarouselItem>
))}
 
  </CarouselContent>
  <CarouselPrevious
  className="md:flex
  hidden"
  />
  <CarouselNext 
  className="md:flex
  hidden"/>
</Carousel>

  )
}

export default CarouslHome