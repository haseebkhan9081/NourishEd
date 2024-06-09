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
import { useRouter } from 'next/navigation'

function Home() {
const router=useRouter()
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
className='text-charcoalGray
text-center'
>When a child faces hunger, their education and dreams are overshadowed by the pain and distraction of an empty stomach. Concentration wanes, energy drops, and the joy of learning is replaced by the constant worry of where their next meal will come from. A nutritious meal has the power to restore hope, provide energy, and open the door to a brighter future. But we cant provide these meals without the support of compassionate individuals like you. Your contribution can help nourish minds and bodies, empowering children to focus on their studies and dream big.

</p>

<Button
onClick={()=>{router.push('/donate')}}
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

{/* how we operate */}

<div className="bg-white p-8 py-20">
  <h2 className="text-charcoalGray text-2xl font-bold mb-6">How we operate</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-neutralWhite p-4 rounded shadow-md">
      <h3 className="text-charcoalGray text-xl font-bold">NourishEd is 501C3</h3>
       
      <p className="text-charcoalGray">NourishED operate out of US as a 501C3 with
      <ul
      className='list-disc
      p-2'>
        <li>
        Four of Board of Directors who will oversee the affairs committed to the mission of the organization and who possess diverse skills and expertise

        </li>
        <li>
        Three officers President, Secretary, and Treasurer who will run the tactical affairs of the organization in line with the vision and mission of the organization. These officers shall be elected by Board of Directors

        </li>
        <li>
        The board and officers will operate as stated in bylaws of the corp
  
        </li>
      </ul>
      </p>
      </div>

    <div className="bg-neutralWhite p-4 rounded shadow-md">
      <h3 className="text-charcoalGray text-xl font-bold">Trust in Pakistan</h3>
   
      <p className="text-charcoalGray"> NourisheED will have a trust in Pakistan with
An operations manager who is responsible for overseeing its operations in Pakistan. This operation manager will report into the President of NoursihED and will be elected by the Board of Directors</p>
    </div>

    <div className="bg-neutralWhite p-4 rounded shadow-md">
      <h3 className="text-charcoalGray text-xl font-bold">Bank Accounts</h3> 
      <p className="text-charcoalGray">The organization will maintain the bank accounts in both US and Pakistan to provide transparent oversight of funds and usage</p>
    </div>
  </div>
</div>

{/* statistics */}

<div className="bg-warmGreen p-8 py-20">
  <h2 className="text-neutralWhite text-2xl font-bold mb-6">Statistics and Facts</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-neutralWhite p-4 rounded shadow-md">
      <h3 className="text-charcoalGray text-xl font-bold">Meals Served</h3>
      <p className="text-charcoalGray text-3xl font-bold">1,000,000+</p>
      <p className="text-charcoalGray">Nutritious meals served to children in need.</p>
    </div>

    <div className="bg-neutralWhite p-4 rounded shadow-md">
      <h3 className="text-charcoalGray text-xl font-bold">Attendance</h3>
      <p className="text-charcoalGray text-3xl font-bold">95%</p>
      <p className="text-charcoalGray">Increase in school attendance rates.</p>
    </div>

    <div className="bg-neutralWhite p-4 rounded shadow-md">
      <h3 className="text-charcoalGray text-xl font-bold">Health Benefits</h3>
      <p className="text-charcoalGray text-3xl font-bold">80%</p>
      <p className="text-charcoalGray">Improvement in childrens health and nutrition.</p>
    </div>
  </div>
</div>

{/* our partners */}
<div className="bg- p-8">
  <h2 className="text-charcoalGray text-2xl font-bold mb-6">Our Partners</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="flex flex-col items-center bg-neutralWhite p-4 rounded shadow-md">
      <Image src="/partner1.png" alt="Partner 1" 
      layout='responsive'
      width={50}
      height={50}
      className="w-24 h-24 mb-4"/>
      <h3 className="text-charcoalGray text-xl font-bold">Partner 1</h3>
      <p className="text-charcoalGray">A brief description of Partner 1s involvement and contribution to our mission.</p>
    </div>

    <div className="flex flex-col items-center bg-neutralWhite p-4 rounded shadow-md">
    <Image src="/partner2.png" alt="Partner 1" 
      layout='responsive'
      width={100}
      height={100}
      className="w-24 h-24 mb-4"/> <h3 className="text-charcoalGray text-xl font-bold">Partner 2</h3>
      <p className="text-charcoalGray">A brief description of Partner 2s involvement and contribution to our mission.</p>
    </div>

    <div className="flex flex-col items-center bg-neutralWhite p-4 rounded shadow-md">
    <Image src="/partner3.png" alt="Partner 1" 
      layout='responsive'
      width={100}
      height={100}
      className="w-24 h-24 mb-4"/> <h3 className="text-charcoalGray text-xl font-bold">Partner 3</h3>
      <p className="text-charcoalGray">A brief description of Partner 3s involvement and contribution to our mission.</p>
    </div>
  </div>

  <div className="mt-8 text-center">
    <a href="/partners" className="text-primaryBlue font-bold hover:underline">See All Partners</a>
  </div>
</div>
{/* how you can help */}

<div className="bg-warmOrange p-8 py-20">

  <h2 className="text-charcoalGray text-2xl font-bold mb-6">How You Can Help</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-neutralWhite p-4 rounded shadow-md">
      <h3 className="text-charcoalGray text-xl font-bold">Donate</h3>
      <p className="text-charcoalGray">Your contributions help us provide nutritious meals to more children in need. Every donation counts.</p>
      <a href="/donate" className="text-coolBlue font-bold hover:underline">Donate Now</a>
    </div>

    <div className="bg-neutralWhite p-4 rounded shadow-md">
      <h3 className="text-charcoalGray text-xl font-bold">Volunteer</h3>
      <p className="text-charcoalGray">Join our team of dedicated volunteers who help us prepare and distribute meals. Your time and effort can make a huge difference.</p>
      <a href="/volunteer" className="text-coolBlue font-bold hover:underline">Become a Volunteer</a>
    </div>

    <div className="bg-neutralWhite p-4 rounded shadow-md">
      <h3 className="text-charcoalGray text-xl font-bold">Spread the Word</h3>
      <p className="text-charcoalGray">Help us raise awareness about the importance of our mission. Share our story and encourage others to get involved.</p>
      <a href="/share" className="text-coolBlue font-bold hover:underline">Share Our Mission</a>
    </div>
  </div>
</div>


  </div>
  )
}

export default Home