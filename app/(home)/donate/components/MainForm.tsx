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
 
import { boolean, z } from "zod"
import ChooseAmountForm from './ChooseAmountForm';
import UserInfoForm from './UserInfoForm';
import Paymentform from './Paymentform';
import { toast } from 'sonner';

const formSchema = z.object({
  Firstname: z.string()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(50, { message: "First name must be no more than 50 characters long" }),
  
  amount: z.union([
    z.number().min(10, { message: "Amount must be at least $10" }),
    z.string().transform((val:any) => parseFloat(val)).refine((val:number) => val >= 10, {
      message: "Amount must be at least $10",
    })
  ]),
  
  comment: z.string()
    .min(2, { message: "Comment must be at least 2 characters long" })
    .max(50, { message: "Comment must be no more than 50 characters long" })
    .optional(),
  
  Lastname: z.string()
    .min(2, { message: "Last name must be at least 2 characters long" })
    .max(50, { message: "Last name must be no more than 50 characters long" }),
  
  email: z.string().email({ message: "Invalid email address" }),
  
  phone: z.string().regex(/^\+?[0-9]\d{1,14}$/, { message: "Invalid phone number format" }).optional(),
  
  country: z.string()
    .min(2, { message: "Country name must be at least 2 characters long" })
    .max(50, { message: "Country name must be no more than 50 characters long" })
    .optional(),
  
  address: z.string()
    .min(2, { message: "Address must be at least 2 characters long" })
    .max(100, { message: "Address must be no more than 100 characters long" }),
  
  postalCode: z.string().regex(/^\d{5}$/, { message: "Postal code must be exactly 5 digits" }).optional(),
  
  city: z.string()
    .min(2, { message: "City name must be at least 2 characters long" })
    .max(50, { message: "City name must be no more than 50 characters long" })
    .optional(),
  
  stateProvince: z.string()
    .min(2, { message: "State/Province name must be at least 2 characters long" })
    .max(50, { message: "State/Province name must be no more than 50 characters long" })
    .optional(),
  
  agreeToPrivacyPolicy: z.boolean().refine((val:boolean) => val === true, {
    message: "You must agree to the privacy policy",
  })
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
    await form.trigger(['Firstname', 'Lastname', 'email', 'address', 'agreeToPrivacyPolicy']);

const values = form.getValues();

if (
  values.Firstname.length >= 2 &&
  values.Lastname.length >= 2 &&
  z.string().email().safeParse(values.email).success &&
  values.address.length >= 2 &&
  values.agreeToPrivacyPolicy === true
) {
  goTo(2); // Proceed to the next step
  console.log(values); // Log form values
}
else{
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