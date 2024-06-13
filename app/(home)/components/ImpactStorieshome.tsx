import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'
import axios from 'axios';
import { Loader2 } from 'lucide-react';

interface Story {
  id: number;
  img: string;
  story: string;
  longStory: string;
}
function ImpactStorieshome() {
  const [stories, setStories] = useState<Story[]|[]>([])
  const [isDataLoading,setIsDataLoading]=useState(false);
  const [isLoading,setIsLoading]=useState<number>()
    useEffect(() => {
      
      // Fetch data from programs.json
      setIsDataLoading(true)
      axios.get('/api/story').then((Response)=>{
        setStories(Response.data)
      }).catch((Err)=>{
        console.log(Err)
      }).finally(()=>{
        setIsDataLoading(false);
      })
    }, [])
  return (
    <div


    className='bg-slate-300
    md:p-12 
    py-12
    flex-col
    space-y-8'>
      <h1
      className='text-warmGreen
      text-3xl
      text-center
      
      font-bold
      
      mb-4
      '>Impact Stories</h1>
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
    <div
    
    
    className='
    
    grid
    lg:grid-cols-3
    gap-8
    md:px-32
    px-12
    grid-cols-1 
    '>
    
    
    {stories.slice(0, 3).map((story, index) => (
  <Card
    className='md:p-6'
    key={index}
  >
    <CardHeader>
      <CardTitle>
        <Image
          src={story.img}
          alt=''
          layout='responsive'
          width={100}
          height={100}
        />
      </CardTitle>
      <CardDescription className='px-4'>{story.story}</CardDescription>
    </CardHeader>
    <CardFooter className='justify-center items-center'>
      <a href={`/${story?.id}`} 
       className="text-coolBlue font-bold hover:underline">Read more</a>
    </CardFooter>
  </Card>
))}

    
    </div>
    </div>
  )
}

export default ImpactStorieshome