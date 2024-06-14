"use client"
import React, { FormEvent } from 'react'
import { useCustomForm } from '../hooks/useCustomForm'
import { Divide } from 'lucide-react'
import DonateNowForm from './DonateNowForm';
import { Button } from '@/components/ui/button';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const titles=[
   "Choose amount",
   "Information",
   "Payment" 
]
const MainForm = () => {
    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
    const steps:React.ReactNode[] = [
        <div key={1}>Step 1: Enter Details</div>,
        <div key={2}>Step 2: Review Information</div>,
        <div key={3}>Step 3: Confirm Submission</div>,
      ];
    const handleSubmit=(e:FormEvent)=>{
e.preventDefault()
next()
    }
    const {next,currentStepIndex,goTo,isFirstStep,isLastStep,step}=useCustomForm({steps})
  return (
    <div
    className='w-full'>
        <form onSubmit={handleSubmit}
        
        className='w-full
        ring-1
        ring-slate-300

        flex
        flex-col'>
 <DonateNowForm
 next={next}
 goto={goTo}
 currentStepIndex={currentStepIndex}
 indexes={steps.length}
title={titles[currentStepIndex]}
 >
{step}
 </DonateNowForm>
 <div
 className='flex
 p-6
 
 
 w-full
 flex-row'>
<Button
className='w-full'>
Next
</Button>
 </div>
 </form>
    </div>
  )
}

export default MainForm