import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { UseFormReturn } from 'react-hook-form';
import CountrySelect from './CountrySelect';

const UserInfoForm = ({form}:{form:UseFormReturn<{
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
    <div
    className='
    w-full
    flex
    flex-col
    space-y-8' > 
    <div
    className='flex-row
    flex
    gap-x-4'>
<FormField
          control={form.control}
          name="Firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                 className='focus-within:ring-0
              focus-visible:ring-0'
                
                placeholder="First name" {...field} />
              </FormControl>
               
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                 className='focus-within:ring-0
              focus-visible:ring-0'
                placeholder="Last name" {...field} />
              </FormControl>
               
              <FormMessage />
            </FormItem>
          )}
        />
    </div>

    <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                 className='focus-within:ring-0
              focus-visible:ring-0'
                placeholder="Email" {...field} />
              </FormControl>
               
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input
                 className='focus-within:ring-0
              focus-visible:ring-0'
                placeholder="Phone" {...field} />
              </FormControl>
               
              <FormMessage />
            </FormItem>
          )}
        />
<FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem
            className='gap-x-4
            w-full
            flex
            flex-row
            items-center
            '>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <CountrySelect setCountry={field.onChange} country={field.value} key={1}/>
              </FormControl>
               
              <FormMessage />
            </FormItem>
          )}
        />
<FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem
            className=' 
            '>
              <FormLabel>Adrress</FormLabel>
              <FormControl>
<Input
 className='focus-within:ring-0
              focus-visible:ring-0'
              placeholder='Adrress'
{...field}
/>
              </FormControl>
               
              <FormMessage />
            </FormItem>
          )}
        />
        
        </div>
  )
}

export default UserInfoForm