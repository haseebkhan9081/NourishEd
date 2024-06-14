import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { UseFormReturn } from 'react-hook-form';

const UserInfoForm = ({form}:{form:UseFormReturn<{
  username: string;
  amount: number;
  contact:string
}, any, undefined>}) => {
  return (
    <div key={2}>Step 2: Review Information
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} />
              </FormControl>
               
              <FormMessage />
            </FormItem>
          )}
        />
        
        </div>
  )
}

export default UserInfoForm