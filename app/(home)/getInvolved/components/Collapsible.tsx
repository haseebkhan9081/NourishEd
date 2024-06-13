import React, { useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight } from 'lucide-react';

 interface  CollapsibleComponentprops{
    q:string,
    a:string
 }
const CollapsibleComponent:React.FC<CollapsibleComponentprops> = ({
    q,a
}) => {

    const [touched,setTouched]=useState(false);
  return (
    <Collapsible
    className='
    '
    >
  <CollapsibleTrigger
   onClick={()=>setTouched(prev=>!prev)}
  className='
  ring-1
  p-2
  ring-slate-700
  rounded-sm
  justify-center
  flex-row
  gap-x-1
  flex
  font-semibold
  items-center'
  >
   {touched?<ChevronDown
   className='w-4 h-4'/>: <ChevronRight
   className='w-4 h-4'/>} 
  {q}</CollapsibleTrigger>
  <CollapsibleContent
  className='p-2
  text-charcoalGray' >
   {a}
  </CollapsibleContent>
</Collapsible>
  )
}

export default CollapsibleComponent