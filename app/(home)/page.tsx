"use client"
import React, { useEffect, useState } from 'react'
import CarouslHome from './components/Carousel'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { Button } from '@/components/ui/button'
const stories=[

  {img:"/image1.png",
    story:"Before I started receiving meals at school, I used to feel tired and hungry all the time. Now, I can concentrate in class and my grades have improved. - Rani, Student"
  },
  {img:"/image1.png",
    story:"The mid-day meals provided by NourishED have been a blessing for our school. Attendance rates have gone up, and the children are more active and engaged. - Mr. Kumar, Teacher"
  },
  {img:"/image1.png",
    story:"As a parent, I am relieved knowing that my child is getting a nutritious meal at school. It has made a significant difference in their health and happiness. - Priya, Parent"
  }
]
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Home() {

  const [isShow,setIsShow]=useState(false);
  useEffect(()=>{
setIsShow(true)
  },[])
  return (isShow&& <div
    className='w-full
    inset-0
    h-full'> 

   
    <div
    className=' 
    inset-0
    w-full'
    >
       <Transition
       
          appear={true}
          show={isShow}
          enter="transform transition duration-1000"
          enterFrom="translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
          leave="transform transition duration-1000"
          leaveFrom="translate-y-0 opacity-100"
          leaveTo="translate-y-full opacity-0"
        >
        <div
        className='w-full
        h-full
        inset-0'
        > <CarouslHome/></div>
        </Transition>
      
      </div>


{/* the power of a meal */}
<div
className='flex
transition duration-300 ease-in-out
md:p-12
py-24
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
src={"/image1.png"}
alt=''
width={100}
height={100}
layout='responsive'
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
text-warmGreen
text-3xl

font-bold

mb-4'
>The Power of a Meal</h2>
<p
className='text-charcoalGray'
>When a child faces hunger, their education and dreams are overshadowed by the pain and distraction of an empty stomach. Concentration wanes, energy drops, and the joy of learning is replaced by the constant worry of where their next meal will come from. A nutritious meal has the power to restore hope, provide energy, and open the door to a brighter future. But we cant provide these meals without the support of compassionate individuals like you. Your contribution can help nourish minds and bodies, empowering children to focus on their studies and dream big.

</p>

<Button
className='rounded-lg
mt-8
bg-warmRed'
>
  Give hope now
</Button>

</div>
</div>


{/* impact stories */}
<div
className='bg-lightGray
md:p-12 
py-12
flex-col
space-y-8'>
  <h1
  className='text-warmGreen
  text-3xl
  text-center
  underline
  font-bold
  
  mb-4
  '>Impact Stories</h1>
<div

className='

grid
md:grid-cols-3
gap-8
md:px-32
px-12

grid-cols-1 
'>


{stories.map((story,index)=>(
  <Card
  className='md:p-6

   
  '
  key={index}
  >
  <CardHeader>
    <CardTitle><Image
    src={story.img}
    alt=''
    layout='responsive'
    width={100}
    height={100}

    /></CardTitle>
    <CardDescription
    className='px-4'>{story.story}</CardDescription>
  </CardHeader>
   
  <CardFooter
  className='justify-center
  items-center'>
   <Button>Read more</Button>
  </CardFooter>
</Card>

))}

</div>
</div>


  </div>
  )
}

export default Home