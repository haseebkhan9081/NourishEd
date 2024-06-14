import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { UseFormReturn } from 'react-hook-form';
const Paymentform = ({form}:{form:UseFormReturn<{
  username: string;
  amount: number;
  contact:string
}, any, undefined>}) => {
  return (
    <div key={3}>Step 3: Confirm Submission
    <FormField
      control={form.control}
      name="contact"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Contact</FormLabel>
          <FormControl>
            <Input placeholder="contact" {...field} />
          </FormControl>
          
          <FormMessage />
        </FormItem>
      )}
    />
    </div>
  )
}

export default Paymentform