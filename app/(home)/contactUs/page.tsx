"use client";
import { Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import Inquiryform from './components/ContactUSForm';
import ContactUsForm from './components/ContactUSForm';
import { Button } from '@/components/ui/button';

function ContactUs() {
  const [isShow, setIsShow] = useState(false);
const [state,setIsState]=useState(false)
  useEffect(() => {
    setIsShow(true);
  }, []);

  return (
    <div className="bg-warmGreen
    w-full
    py-20 
    lg:p-8">
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
    <div> <h2 className="text-white text-center text-4xl font-bold mb-6">Contact us</h2></div></Transition>
     
   <div
   className='flex-col
   flex
   justify-center
   w-full
   items-center
   space-y-4
   p-6'>
    
  <div
  >  
   <Button
onClick={()=>setIsState(prev=>!prev)}
>
  
  {state?"Cancel":"Contact us form"}
  </Button>  
  </div> 

  <Transition

        show={state}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 translate-y-full"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-300 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-full"
      >
        <div
        className='lg:w-3/4 w-full '><ContactUsForm setFormState={setIsState} /></div> 
      </Transition>
    
    </div>   

      
    </div>
  );
}

export default ContactUs;
