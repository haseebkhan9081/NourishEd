"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const formSchema = z.object({
  FirstName: z.string().min(2, "First name must be at least 2 characters long").max(50, "First name cannot exceed 50 characters"),
  LastName: z.string().min(2, "Last name must be at least 2 characters long").max(50, "Last name cannot exceed 50 characters"),
  EmailAddress: z.string().email("Invalid email address").max(50, "Email address cannot exceed 50 characters"),
  PhoneNumber: z.string().min(10, "Phone number must be at least 10 characters long").max(15, "Phone number cannot exceed 15 characters"),
  Subject: z.enum(["General Inquiry", "Feedback", "Technical Support", "Other"]),
  Message: z.string().min(10, "Message must be at least 10 characters long").max(500, "Message cannot exceed 500 characters"),
});
interface ContactUsFormProps{
  setFormState:(v:boolean)=>void;
}
const ContactUsForm:React.FC<ContactUsFormProps> = ({
  setFormState
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      FirstName: "",
      LastName: "",
      EmailAddress: "",
      PhoneNumber: "",
      Subject: "General Inquiry",
      Message: "",
    },
  });

  const [submitted, setIsSubmitted] = useState(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setFormState(false)
    setIsSubmitted(true);
    toast.success("Your form was submitted successfully!");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-slate-50 grid lg:grid-cols-2 gap-6 grid-cols-1 rounded-md justify-center items-center p-6">
      <FormField
          control={form.control}
          name="FirstName"
          render={({ field }) => (
            <FormItem className="col-span-1
            
            pt-7">
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input className="ring-0
              focus-within:ring-0
              focus-visible:ring-0 "placeholder="First Name" {...field} />
              </FormControl>
              <FormDescription>Enter your first name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="LastName"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input className="ring-0
              focus-within:ring-0
              focus-visible:ring-0 " placeholder="Last Name" {...field} />
              </FormControl>
              <FormDescription>Enter your last name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="EmailAddress"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input className="ring-0
              focus-within:ring-0
              focus-visible:ring-0 " placeholder="Email Address" {...field} />
              </FormControl>
              <FormDescription>Enter your email address</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="PhoneNumber"
          render={({ field }) => (
            <FormItem className="col-span-1">
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input className="ring-0
              focus-within:ring-0
              focus-visible:ring-0 " placeholder="Phone Number" {...field} />
              </FormControl>
              <FormDescription>Enter your phone number</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Subject"
          render={({ field }) => (
            <FormItem className="col-span-1  ">
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2" {...field}>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Other">Other</option>
                </select>
              </FormControl>
              <FormDescription>Select the subject of your message</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="Message"
          render={({ field }) => (
            <FormItem className="col-span-1 lg:col-span-2">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea className="ring-0
              focus-within:ring-0
              focus-visible:ring-0 " placeholder="Your message" {...field} />
              </FormControl>
              <FormDescription>Enter your message</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        
          
    <div
className="w-full
justify-center
items-center
lg:col-start-1
col-span-full

flex">

<Button
        className="
        bg-warmGreen"
        type="submit">Submit</Button>

</div>
     
            </form> 
          </Form>
  );
};

export default ContactUsForm;
