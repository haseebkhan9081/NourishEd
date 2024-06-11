"use client"
import { ChevronLeft, Loader2 } from 'lucide-react';
// Import the useRouter hook from 'next/router'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Define your functional component
const Page = ({params}:{params:{id:number}}) => {
  // Call the useRouter hook to get access to router information
   
  const [isLoading,setIsLoading]=useState(false)

  // Access the id parameter from the router object
  const router=useRouter()

  // Render the id or any other component based on the id
  
  
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
            <div
             onClick={()=>{
                setIsLoading(true)
                router.push(`/programs`)
                              }}
            className='flex
            flex-row
            pointer-cursor
            gap-x-2
            w-full
            items-center
            '
            ><ChevronLeft
           
            className='w-8
            h-8'
            /> <p>{isLoading?<Loader2
                className='animate-spin
                '
                />:"Back"}</p></div>
        </div>
      {/* Render the id or any other component based on the id */}
      <h1>Program ID: {params.id}</h1>
    </div>
  );
};

// Export the component
export default Page;
