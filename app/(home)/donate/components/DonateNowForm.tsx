import { Lock } from 'lucide-react'
import React from 'react'
import { FaArrowRight, FaCircle, FaRegCircle } from 'react-icons/fa'
import { useCustomForm } from '../hooks/useCustomForm'
import { UseFormReturn } from 'react-hook-form';
interface DonateNowFormprops{
    title:string,
    children:React.ReactNode,
    indexes:number;
    currentStepIndex:number,
    goto:(i:number)=>void,
    next:()=>void,
    form:UseFormReturn<{
      Firstname: string;
      amount: number;
      Lastname: string;
      email: string;
      address: string;
      comment?: string | undefined;
      phone?: string | undefined;
      country?: string | undefined;
      postalCode?: string | undefined;
      city?: string | undefined;
    agreeToPrivacyPolicy:boolean;
      stateProvince?: string | undefined;
  }, any, undefined>
}
const DonateNowForm:React.FC<DonateNowFormprops> = ({
    title,
    children,
    indexes,
    currentStepIndex,
    goto,
    next
}) => {

    
  

  return (
  
    <div
    className='flex
    flex-col
    w-full
    '
    >
      
        <div
        className='h-14 flex
        p-6
        text-white
        justify-between
        items-center
        flex-row bg-warmGreen w-[350px]'>
<div
className='text-xl text-start
font-medium
'>{title}</div>
<div
className='flex
flex-row
items-center
justify-center
gap-x-2
 '>
<Lock
size={12}
/>
{Array.from({length:indexes},(_,index)=>(

index===currentStepIndex?<FaCircle key={index} size={12}/>:<FaRegCircle onClick={()=>goto(index)}  key={index} size={12} />
    
))}
<FaArrowRight
onClick={()=>next()}
className='ml-2' size={20}/>
</div>

        </div>
<div
className=' 
p-6'>
{children}
</div>
       
    </div>
   
  )
}

export default DonateNowForm