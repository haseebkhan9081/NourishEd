import { Button } from '@/components/ui/button';
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils';
import React from 'react'
import { UseFormReturn } from 'react-hook-form';

const ChooseAmountForm = ({form}:{form:UseFormReturn<{
  username: string;
  amount: number;
  contact:string
}, any, undefined>}) => {

  const predefinedAmounts = [10, 20, 50,60,70,80,90,100];

  return (
    <div> 
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
              <Input placeholder="custom amount" {...field} />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}

export default ChooseAmountForm
