"use client"
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { ChevronLeft, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'




interface Story {
    id: number;
    img: string;
    title:string;
    story: string;
    longStory: string;
  }
export const StoryID = ({params}:{params:{storyId:number}}) => {
    const [isLoading,setIsLoading]=useState(false)
    const [isDataLoading,setIsDataLoading]=useState(false);
  const [story,setStory]=useState<Story>()
  
    useEffect(()=>{
  setIsDataLoading(true);
  
  axios.post("/api/story",{id:params.storyId}).then((response)=>{
  setStory(response.data)
  }).catch((err)=>{
    console.log("err at /prpgrams/id",err)
  }).finally(()=>{
    setIsDataLoading(false)
  })
    },[params.storyId])
   
    const router=useRouter()
  
    return (
    <div
    className='flex
    pt-3
    flex-col
    space-y-6'>
        <div

        className='flex
        px-6
        flex-row
        justify-between
        items-center
        '
        >
            <Link
            href={'/'}
             onClick={()=>{
                setIsLoading(true)
                              }}
            className='flex
            flex-row
            pointer-cursor
            hover:bg-warmGreen
            ease-in-out
            duration-200
            gap-x-2
           p-2
           px-4
           justify-center
           rounded-md
            items-center
            '
            ><ChevronLeft
           
            className='w-8
            h-8'
            /> <p>{isLoading?<Loader2
                className='animate-spin
                '
                />:"Back"}</p></Link>
        </div>
        {isDataLoading&&
  <div
  className='justify-center
  items-center
  text-warmGreen
  w-full
  flex'>  <Loader2
  className='animate-spin
  '
  /></div>}


      {/* Render the id or any other component based on the id */}
      <div
className=' 
 bg-warmGreen
transition duration-300 ease-in-out
md:p-12
md:py-24
py-12
md:px-32
px-4
w-full

h-full
grid
md:grid-cols-2
grid-cols-1
 gap-4
 md:flex-row
 md:justify-between

 
'>
<Image
src={story?.img||""}
alt={story?.title||""}
width={100}
height={100}
layout='responsive'
className='rounded-sm'
/>
<div
className='flex
transition duration-300 ease-in-out
justify-center
items-center
p-6
flex-col
w-full'>
<h2
className='
text-white
text-3xl

font-bold
text-center
mb-4'
>{story?.title}</h2>
<p
className='text-charcoalGray
text-center'
> {story?.longStory}
</p>

<Button
onClick={()=>{router.push('/donate')}}
className='rounded-lg
mt-8
animate-pulse
bg-warmRed'
>
  Support this program
</Button>

</div>
</div>
    </div>
  )
}


export default StoryID;