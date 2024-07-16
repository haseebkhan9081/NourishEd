"use client"
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { ChevronLeft, Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
// Import the useRouter hook from 'next/router'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Charts from './components/charts';
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
    space-y-2'>
        <div

        className='flex
        px-2
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
           justify-center
           rounded-md
            items-center
            '
            ><ChevronLeft
           
            className='w-8
            h-8'
            /> <p>{isLoading&&<Loader2
                className='animate-spin
                '
                />}</p></Link>
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
      <div
className=' 
 bg-warmGreen
transition duration-300 ease-in-out
md:p-12
md:py-24
py-12
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
src={programData?.image||""}
alt={programData?.title||""}

width={100}
height={100}
layout='responsive'
className='rounded-md'
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
text-white
text-3xl

font-bold
text-center
mb-4'
>{programData?.title}</h2>
<p
className='text-charcoalGray
text-center'
> {programData?.longDescription}
</p>

<Button
onClick={()=>{router.push('/donate')}}
className='rounded-lg
mt-8
animate-pulse
bg-warmRed'
>
  Support this program
</Button>

</div>
</div>
 
    </div>
  );
};

// Export the component
export default Page;
