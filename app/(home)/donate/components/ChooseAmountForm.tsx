import { Button } from '@/components/ui/button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils';
import React, { useState } from 'react'
import { UseFormReturn } from 'react-hook-form';
import { Checkbox } from "@/components/ui/checkbox"

const ChooseAmountForm = ({form}:{form:UseFormReturn<{
  Firstname: string;
    amount: number;
    Lastname: string;
    email: string;
    address: string;
    currency:string;
  status:string;
  transactionId:string;
    
    phone?: string | undefined;
    country?: string | undefined;
    postalCode?: string | undefined;
    city?: string | undefined;
    agreeToPrivacyPolicy:boolean;
    stateProvince?: string | undefined;
    comment?:String|undefined
}, any, undefined>}) => {

  const predefinedAmounts = [10, 20, 50,60,70,80,90,100];
const [isComment,setIsComment]=useState(false);
const [selected,setSelected]=useState("one time");
  return (
    <div
    className='space-y-8'> 
      <FormField
        control={form.control}
        name="amount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Amount</FormLabel>
            <FormControl>
              <div
              className='space-y-8'>
                <div
                className='
                grid
                grid-cols-4
                gap-2
                gap-x-2'>
                {predefinedAmounts.map((amount) => (
                  <Button
                  className={
                    cn(
                      field.value===amount&&'ring-1 ring-sky-300 text-sky-300'
                    )
                  }
                  
                  variant={'outline'} key={amount} onClick={() => field.onChange(amount)}>
                    ${amount}
                  </Button>
                ))}
              </div>
              <Input
              className='focus-within:ring-0
              focus-visible:ring-0'
              placeholder="custom amount" {...field} />
              </div>
              
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

<div
              className='flex
              w-full
              flex-row
              gap-x-4'>
<Button
 onClick={()=>setSelected("one time")}
className={
  cn(
    selected==="one time"&&'ring-1 ring-sky-300 text-sky-300'
  )
}
variant={'outline'}
>one time</Button>
<Button
onClick={()=>setSelected("Monthly")}
className={
  cn(
    selected==="Monthly"&&'ring-1 ring-sky-300 text-sky-300'
  )
}
variant={'outline'}
>Monthly</Button>
<Button
onClick={()=>setSelected("Yearly")}
className={
  cn(
    selected==="Yearly"&&'ring-1 ring-sky-300 text-sky-300'
  )
}
variant={'outline'}

>Yearly</Button>

              </div>
<FormField
control={form.control}
name={"comment"}

render={({field})=>(

  <FormItem>


   
    <FormControl>
<div
className='space-y-4'>
  <div
  className='flex
  flex-row
  justify-start
  gap-x-4
  items-center
  w-full'>
<Checkbox
className=''
checked={isComment}
onCheckedChange={(v:boolean)=>{
  setIsComment(v)
}}
 
/>
<div
className='text-slate-700'>Write us a comment</div>
</div>

{

//@ts-ignore

isComment&&<Input
{...field}
className='focus-within:ring-0
focus-visible:ring-0
focus:border-0
focus-within:border-0
focus-visible::border-0
border-0'
placeholder='Your comment'
/>}

</div>
    </FormControl>
  </FormItem>
)}

/>


    </div>
  )
}

export default ChooseAmountForm
