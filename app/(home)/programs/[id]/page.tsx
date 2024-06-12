"use client"
import axios from 'axios';
import { ChevronLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
// Import the useRouter hook from 'next/router'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
interface Program {
  id:number;
  title: string;
  count:number;
  longDescription:string;
  description: string;
  image: string;
}
 
const Page = ({params}:{params:{id:number}}) => {
  // Call the useRouter hook to get access to router information
   
  const [isLoading,setIsLoading]=useState(false)
  const [isDataLoading,setIsDataLoading]=useState(false);
const [programData,setProgramData]=useState<Program>()

  useEffect(()=>{
setIsDataLoading(true);

axios.post("/api/programs",{id:params.id}).then((response)=>{
setProgramData(response.data)
}).catch((err)=>{
  console.log("err at /prpgrams/id",err)
}).finally(()=>{
  setIsDataLoading(false)
})
  },[params.id])
 
  const router=useRouter()

  
  
  
  return (
    <div
    className='flex
    pt-3
    flex-col
    space-y-6'>
        <div

        className='flex
        px-6
        flex-row
        justify-between
        items-center
        '
        >
            <Link
            href={'/programs'}
             onClick={()=>{
                setIsLoading(true)
                              }}
            className='flex
            flex-row
            pointer-cursor
            hover:bg-warmGreen
            ease-in-out
            duration-200
            gap-x-2
           p-2
           px-4
           justify-center
           rounded-md
            items-center
            '
            ><ChevronLeft
           
            className='w-8
            h-8'
            /> <p>{isLoading?<Loader2
                className='animate-spin
                '
                />:"Back"}</p></Link>
        </div>
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


      {/* Render the id or any other component based on the id */}
      <h1>Program ID: {params.id}</h1>
    </div>
  );
};

// Export the component
export default Page;
