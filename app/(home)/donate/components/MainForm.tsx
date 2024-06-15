"use client"
import React, { FormEvent } from 'react'
import { useCustomForm } from '../hooks/useCustomForm'
import { Divide } from 'lucide-react'
import DonateNowForm from './DonateNowForm';
import { Button } from '@/components/ui/button';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
 
import { z } from "zod"
import ChooseAmountForm from './ChooseAmountForm';
import UserInfoForm from './UserInfoForm';
import Paymentform from './Paymentform';
import { toast } from 'sonner';

const formSchema = z.object({
  Firstname: z.string().min(2).max(50),
  amount: z.union([
    z.number().min(10, { message: "Amount must be at least $10" }),
    z.string().transform((val) => parseFloat(val)).refine(val => val >= 10, {
      message: "Amount must be at least $10",
    })
  ]),
  contact: z.string().min(2).max(50),
  comment: z.string().min(2).max(50).optional(),
  Lastname: z.string().min(2).max(50),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(/^\+?[0-9]\d{1,14}$/, { message: "Invalid phone number" }),
  country: z.string().min(2).max(50),
  address: z.string().min(2).max(100), // Address field with validation
  postalCode: z.string().regex(/^\d{5}$/, { message: "Invalid postal code" }), // Postal code field with validation (5 digits)
  city: z.string().min(2).max(50), // City field with validation
  stateProvince: z.string().min(2).max(50) // State/Province field with validation
});

 


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
     
      
      
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast.success("Donation successfull!")
    console.log(values)
  }
    const steps:React.ReactNode[] = [
        <ChooseAmountForm key={1} form={form}/>,
        <UserInfoForm key={2} form={form}/>,
       <Paymentform key={3} form={form}/>,
      ];
     


    const {next,currentStepIndex,goTo,isFirstStep,isLastStep,step}=useCustomForm({steps})
  return (
    <Form {...form} >

    
        <form 
        onSubmit={form.handleSubmit(onSubmit)}  
     
        
        className='w-[350px]

        space-y-8
        ring-1
        ring-slate-300

        flex
        flex-col'>
 <DonateNowForm
 form={form}
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
onClick={async()=>{
   await form.trigger(['amount']);
  if (form.getValues().amount >= 10) {
    goTo(1); // Proceed to the next step if amount is valid
    console.log(form.getValues()); // Log form values
    await  form.trigger(['Firstname'])
    await  form.trigger(['Lastname'])
    if(form.getValues().Firstname.length>=2){
      goTo(2); // Proceed to the next step if amount is valid
      console.log(form.getValues()); // Log form values

    }else{
      goTo(1)
    }
  }else{
    goTo(0)
  }  
 
}}
type='submit'
className='w-full'>
{isLastStep?`Pay Amount ${form.getValues().amount} $`:"Next"}
</Button>
 </div>
 </form>
 </Form>
  )
}

export default MainForm