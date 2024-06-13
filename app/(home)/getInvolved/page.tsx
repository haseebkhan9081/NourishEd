"use client"
import { Button } from '@/components/ui/button'
import { Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import VolunteerForm from './components/VolunteerForm'
import { FaVolleyballBall } from 'react-icons/fa'
import PartnershipForm from './components/PartnerForm'
import Faqs from './components/Faqs'

function GetInvolved() {
 const [isShow,setIsShow]=useState(false)
 useEffect(()=>{
setIsShow(true)
 },[])

 const [volunteerform,setVolunteerForm]=useState(false)
 const [partnerform,setPartnerForm]=useState(false)
  return (
    <div className="bg-warmGreen
py-20 
p-8">
  <Transition
   appear={true}
   show={true}
   enter="transform transition duration-1000"
   enterFrom="translate-y-full opacity-0"
   enterTo="translate-y-0 opacity-100"
   leave="transform transition duration-1000"
   leaveFrom="translate-y-0 opacity-100"
   leaveTo="translate-y-full opacity-0"
 >
<div> <h2 className="text-white text-center text-4xl font-bold mb-6">Get Involved</h2></div></Transition>
 
 <div
 className='
 flex
 w-full
 space-y-4
 justify-center
 items-center
 flex-col'
 >
<Button


onClick={()=>{
  setVolunteerForm(prev=>!prev)
}}

className='bg-slate-50
text-warmGreen
font-bold'
>
  {volunteerform?"Cancel":"Sign Up to Volunteer"}
   </Button>
{volunteerform&&
  <VolunteerForm
  setState={setVolunteerForm}
  />
 

 
}





<Button

onClick={()=>{
  setPartnerForm(prev=>!prev)
}}
className='font-bold'>
  {partnerform?"Cancel":"Become a Partner"}
  </Button>

  

<Transition
appear={true}
show={partnerform}
enter="transform transition duration-1000"
enterFrom="translate-y-full opacity-0"
enterTo="translate-y-0 opacity-100"
leave="transform transition duration-1000"
leaveFrom="translate-y-0 opacity-100"
leaveTo="translate-y-full opacity-0"
>
<div
className=''>
  <PartnershipForm setState={setPartnerForm}/>
</div>


</Transition>

  </div>  
  

<Faqs/>
  
</div>
    
  )
}

export default GetInvolved