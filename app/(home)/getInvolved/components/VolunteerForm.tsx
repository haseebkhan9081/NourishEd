"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
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
import DayPicker from "./Daypicker"
import Timepicker from "./TimePicker"
import Rolepicker from "./RolePicker"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { toast } from "sonner"

const formSchema = z.object({
  
FirstName: z.string().min(2, "First name must be at least 2 characters long").max(50, "First name cannot exceed 50 characters"),

 
LastName: z.string().min(2, "Last name must be at least 2 characters long").max(50, "Last name cannot exceed 50 characters"),

 
EmailAddress: z.string().min(2, "Email address must be at least 2 characters long").max(50, "Email address cannot exceed 50 characters"),

 
PhoneNumber: z.string().min(2, "Phone number must be at least 11 characters long").max(50, "Phone number cannot exceed 50 characters"),

// Validation messages for Days array
Days: z.array(z.string()).min(1, "Please select at least 1 day").max(7, "You cannot select more than 7 days"),

// Validation messages for Times array
Times: z.array(z.string()).min(1, "Times   cannot be empty").max(3, "You cannot select more than 3 times"),

// Validation messages for Roles array
Roles: z.array(z.string()).min(1, "Roles   cannot be empty").max(3, "You cannot select more than 3 roles"),

// Validation messages for Experience
Experience: z.string().max(150, "Experience cannot exceed 150 characters").optional(),

// Validation messages for Comments
Comments: z.string().max(150, "Comments cannot exceed 150 characters").optional()



  



})

interface volunteerformProps{
    setState:(v:boolean)=>void
}

const VolunteerForm:React.FC<volunteerformProps>=({setState})=> {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            FirstName: "",
            LastName:"",
            EmailAddress:"",
            PhoneNumber:"",
            Days:['Sunday'],
            Times:['Morning'],
            Roles:['Outreach'],
            Experience:"",
            Comments:""
        },
      })
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
        setIsSubmitted(true)
        setState(false)
        toast.success("Your form was submitted successfully!")
      }
      const [submitted,setIsSubmitted]=useState(false)
  return (
<Form
    {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8
      z-10
      bg-slate-100
      rounded-md
      p-6
      ">
        <FormField
          control={form.control}
          name="FirstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
              <FormDescription>
           
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="LastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="EmailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="Email Address" {...field} />
              </FormControl>
              <FormDescription>A personal Email Address where we can contact you</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="PhoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Phone Number" {...field} />
              </FormControl>
               <FormDescription>A personal number where we can call you</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


<FormField
          control={form.control}
          name="Days"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Days when you are available</FormLabel>
              <FormControl>
               <DayPicker days={field.value} setDays={field.onChange} />
              </FormControl>
              <FormDescription>
                These are the days we can call you for volunteer work
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


<FormField
          control={form.control}
          name="Times"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Time of the day when you are available</FormLabel>
              <FormControl>
               <Timepicker times={field.value} settimes={field.onChange} />
              </FormControl>
              <FormDescription>
                These are the times we can call you for volunteer work
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


<FormField
          control={form.control}
          name="Roles"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Youre interests</FormLabel>
              <FormControl>
               <Rolepicker roles={field.value} setroles={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          control={form.control}
          name="Experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Previous Volunteer Experience (optional)</FormLabel>
              <FormControl>
                <Textarea
                {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


<FormField
          control={form.control}
          name="Comments"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Any comment? (optional)</FormLabel>
              <FormControl>
                <Textarea
                {...field}
                />
              </FormControl>
              <FormDescription>
                questions and suggestions are welcome
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


<div
className="w-full
justify-center
items-center
flex">

<Button
        className="
        bg-warmGreen"
        type="submit">Submit</Button>

</div>
        
      </form>
    </Form>
  )
   
   
    
  
}

export default VolunteerForm