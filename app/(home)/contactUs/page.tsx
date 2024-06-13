"use client";
import { Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import Inquiryform from './components/ContactUSForm';
import ContactUsForm from './components/ContactUSForm';
import { Button } from '@/components/ui/button';
import { FaCopy, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Check, Copy } from 'lucide-react';






function ContactUs() {


  function copyToClipboard(text:string,t:string) {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(t)
    }, () => {
    });
  }



const [copied,setCopied]=useState("")
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
     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4
      p-2">
        <div className="bg-neutralWhite p-4 rounded shadow-md">
          <h3 className="text-charcoalGray text-xl font-bold">Contact Information</h3>
          <p className="text-charcoalGray">
          <strong>Address:</strong> 123 Main St, City, Country
            <Button
            
            onClick={() => copyToClipboard('123 Main St, City, Country','Address')} className="ml-2
            bg-transparent
            hover:bg-transparent">
            {copied==='Address'?<Check
            className='text-green-600'/>:<FaCopy
            className='text-slate-700'/>} 
            </Button>
            <br />
            <strong>Phone:</strong> +1 234 567 890
            <Button onClick={() => copyToClipboard('+1 234 567 890','Phone')} className="ml-2
            bg-transparent
            hover:bg-transparent">
            {copied==='Phone'?<Check
             className='text-green-600'
            />:<FaCopy
             className='text-slate-700'
            />} 
            </Button>
            <br />
            <strong>Email:</strong> info@nourished.org
            <Button onClick={() => copyToClipboard('info@nourished.org','Email')} className="ml-2
            bg-transparent
            hover:bg-transparent">
            {copied==='Email'?<Check
             className='text-green-600'
            />:<FaCopy
             className='text-slate-700'
            />} 
            </Button>
          </p>
        </div>

        <div className="bg-neutralWhite p-4 rounded shadow-md">
          <h3 className="text-charcoalGray text-xl font-bold">Office Hours</h3>
          <p className="text-charcoalGray">
            <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM<br/>
            <strong>Saturday - Sunday:</strong> Closed
          </p>
        </div>

        <div className="bg-neutralWhite p-4 rounded shadow-md">
          <h3 className="text-charcoalGray text-xl font-bold">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0136821079273!2d-122.42084208468166!3d37.77851957975756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c774c1b59%3A0x4c8a1b6cbb1dfdb0!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094133%2C%20USA!5e0!3m2!1sen!2s!4v1625617936789!5m2!1sen!2s"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>

        <div className="bg-neutralWhite p-4 rounded shadow-md">
          <h3 className="text-charcoalGray text-xl font-bold">Follow Us</h3>
          <div className="flex space-x-4
          flex-row
          h-full
          justify-center
          pb-6
          items-center
          ">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook
              className='
              text-blue-500 hover:text-blue-800 transition-colors duration-300 ease-in-out
               
              lg:text-4xl
              text-2xl'
              />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
             <FaTwitter
              className='
              text-blue-400 hover:text-blue-600 transition-colors duration-300 ease-in-out
             
              lg:text-4xl
              text-2xl'
             />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
<FaLinkedin
 className='
  
 lg:text-4xl
 text-blue-600 hover:text-blue-800 transition-colors duration-300 ease-in-out
 text-2xl'
/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram
               className='
               text-purple-600 hover:text-purple-800 transition-colors duration-300 ease-in-out
               
               lg:text-4xl
               text-2xl'
              />
                 </a>
                 <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp
             className='
             text-green-500 hover:text-green-700 transition-colors duration-300 ease-in-out
           
             lg:text-4xl
             text-2xl'
              />
                 </a>
          </div>
        </div>
      </div>
      


     
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
