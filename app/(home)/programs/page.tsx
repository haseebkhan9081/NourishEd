"use client"
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import axios from "axios";
interface Program {
  title: string;
  count:number;
  longDescription:string;
  description: string;
  img: string;
}
function Programs() {
  const [isShow, setIsShow] = useState(false)
  const [programs, setPrograms] = useState<Program[]|[]>([])

  useEffect(() => {
    setIsShow(true)

    // Fetch data from programs.json
    axios.get('/api/programs').then((Response)=>{
      setPrograms(Response.data)
    }).catch((Err)=>{
      console.log(Err)
    })
  }, [])

  return (
    <>
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
        <div className='hero-section bg-cover bg-center h-64 flex items-center justify-center' style={{ backgroundImage: 'url(/hero-background.png)' }}>
          <h1 className='text-white text-4xl'>Our Programs</h1>
        </div>
      </Transition>

      <div className='w-full py-12 flex-col space-y-8 font-base justify-center items-center'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image src={program.img} alt={program.title} className="w-full h-48 object-cover rounded" />
              <h2 className="text-charcoalGray text-2xl font-bold my-4">{program.title}</h2>
              <p className="text-charcoalGray">{program.description}</p>
              <button className="mt-4 bg-warmGreen text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Programs
