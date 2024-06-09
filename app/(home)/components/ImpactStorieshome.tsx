import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'
function ImpactStorieshome() {
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
  return (
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
      
      font-bold
      
      mb-4
      '>Impact Stories</h1>
    <div
    
    
    className='
    
    grid
    lg:grid-cols-3
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
     <a href="/donate" className="text-coolBlue font-bold hover:underline">Read more</a>
     
      </CardFooter>
    </Card>
    
    ))}
    
    </div>
    </div>
  )
}

export default ImpactStorieshome