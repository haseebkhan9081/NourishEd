import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { UseFormReturn } from 'react-hook-form';
const Paymentform = ({form}:{form:UseFormReturn<{
  Firstname: string;
  amount: number;
  contact: string;
  Lastname: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  postalCode: string;
  city: string;
  stateProvince: string;
    comment?: string | undefined;
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