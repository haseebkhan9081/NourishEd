import React from 'react'
import Logo from './Logo'
import { Mail, Phone } from 'lucide-react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
function Footer() {
  return ( <footer className="bg-slate-50 dark:bg-gray-900">
    <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
                <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe our newsletter to get update.</h1>

                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-slate-50 border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
            
                    <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        Subscribe
                    </button>
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Quick Links</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                    <a href="/aboutus" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who We Are</a>
                    <a href="/ourVisionAndMission" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Vision & Mission</a>
                    <a href="/ourVisionAndMission" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Contact us</a>
                    <a href="/programs" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500 flex-row w-full gap-x-2 flex">Programs</a>
                    <a href="mailto:donorCare@NourishED.com" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500 flex-row w-full gap-x-2 flex">
  <Mail/> donorCare@NourishED.com
</a>
<a href="tel:+178654321" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500 flex-row w-full gap-x-2 flex">
  <Phone/> +178654321
</a>

           
                </div>
            </div>

            <div>
                <p className="font-semibold text-gray-800 dark:text-white">Be a change</p>

                <div className="flex flex-col items-start mt-5 space-y-2">
                    <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Donate online</a>
                    <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Get Involved</a>
                </div>
            </div>
        </div>
        
        <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700"/>
        
        <div className="flex items-center justify-between">
            <a href="#">
              <Logo/>
            </a>
            
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
</footer>
  )
}

export default Footer