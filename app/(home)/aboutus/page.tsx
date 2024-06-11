"use client"
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import ImpactStorieshome from '../components/ImpactStorieshome'
import LeadershipandTeam from './components/LeadershipandTeam'
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
 <h1
 className='text-center
 text-4xl
 
 '
 >About Us</h1>

        </Transition>

<div className="bg-warmGreen p-8 py-20">
  <h2 className="text-white text-2xl font-bold mb-6">Our Mission and Vision</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-neutralWhite p-4 rounded shadow-md">
    <h3 className="text-charcoalGray text-xl font-bold">Our Mission</h3>
      <p className="text-charcoalGray">At NourishEd, our mission is to combat childhood hunger and malnutrition in Pakistan by providing nutritious meals to students in underserved communities. We believe that every child deserves access to healthy food, enabling them to focus on their education and achieve their full potential.

Our story is one of hope, perseverance, and the unwavering belief that together, we can make a difference. We invite you to join us on this journey and help us continue to bring nourishment and opportunity to those who need it most.
       
      </p>
      </div>

      <div className="bg-neutralWhite p-4 rounded shadow-md">
    <h3 className="text-charcoalGray text-xl font-bold">Our Vision</h3>
      <p className="text-charcoalGray">We envision a world where no child goes to school hungry. By 2025, we aim to serve millions of meals across Pakistan, ensuring that every child has the opportunity to learn, grow, and thrive without the burden of hunger. Through collaboration with local partners and communities, we strive to create sustainable, long-term solutions to end child hunger and improve educational outcomes.
       
      </p>
      </div>

    

     
  </div>
</div>

<div className="bg-white p-8 py-20">
  <h2 className="text-charcoalGray text-2xl font-bold mb-6">Our Story</h2>
  <div className="grid grid-cols-1  gap-4">
    <div className="bg-neutralWhite p-4 rounded shadow-md">
      
      <p className="text-charcoalGray">NourishEd was founded with a simple yet powerful mission: to eradicate hunger from classrooms in Pakistan. Our journey began when a group of compassionate individuals recognized the profound impact that hunger has on a childs ability to learn and thrive. Witnessing firsthand the struggles that children faced due to malnutrition, we were driven to make a change.

Our founders believed that every child deserves the opportunity to reach their full potential, and that starts with ensuring they have access to nutritious meals. What began as a small initiative has grown into a comprehensive program that not only provides meals but also supports education and well-being.

Through partnerships with local communities, schools, and organizations, NourishEd has been able to expand its reach and impact. We are dedicated to creating sustainable solutions that address the root causes of hunger and provide lasting benefits for children and their families.

Our story is one of hope, perseverance, and the unwavering belief that together, we can make a difference. We invite you to join us on this journey and help us continue to bring nourishment and opportunity to those who need it most.
       
      </p>
      </div>

    

     
  </div>
</div>



     

<LeadershipandTeam/>

      
    </div>
 
    
  )
}

export default AboutUs