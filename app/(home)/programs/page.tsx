"use client"
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
interface Program {
  id:number;
  title: string;
  count:number;
  longDescription:string;
  description: string;
  image: string;
}
function Programs() {
  const [isShow, setIsShow] = useState(false)
  const [programs, setPrograms] = useState<Program[]|[]>([])
const [isDataLoading,setIsDataLoading]=useState(false);
const [isLoading,setIsLoading]=useState<number>()
  useEffect(() => {
    setIsShow(true)
    // Fetch data from programs.json
    setIsDataLoading(true)
    axios.get('/api/programs').then((Response)=>{
      setPrograms(Response.data)
    }).catch((Err)=>{
      console.log(Err)
    }).finally(()=>{
      setIsDataLoading(false);
    })
  }, [])
const router=useRouter()
  return (
    <div
className='bg-warmGreen
    w-full
    py-20 
    lg:p-8
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
        <div className='w-full
 justify-center
 items-center
 flex'  >
 
      <h1 className='text-white  font-bold text-4xl'>Our Programs</h1>
      </div>
      </Transition>
 
  
  <>
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

  
  <div className='w-full bg-warmGreen py-12 flex-col space-y-8 font-base justify-center items-center'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-4 rounded shadow-md hover:shadow-lg transition-shadow duration-300">
              <Image src={program.image} alt={program.title} layout='responsive' width={100} height={100} className="w-full h-48 object-cover rounded" />
              <h2 className="text-charcoalGray text-2xl font-bold my-4">{program.title}</h2>
              <p className="text-charcoalGray">{program.description}</p>
              <Button
              onClick={()=>{
                setIsLoading(program.id)
router.push(`/programs/${program.id}`)
              }}
              className="mt-4 bg-warmGreen text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300">
                {isLoading===program.id?<Loader2
  className='animate-spin
  '
  />:"Learn More"}
                 </Button>
            </div>
          ))}
        </div>
      </div>
      
      </>
      </div>
  )
}

export default Programs
