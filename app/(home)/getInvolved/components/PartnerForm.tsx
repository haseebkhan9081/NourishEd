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
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { toast } from "sonner"

const formSchema = z.object({
  OrganizationName: z.string().min(2, "Organization name must be at least 2 characters long").max(50, "Organization name cannot exceed 50 characters"),
  WebsiteURL: z.string().url("Must be a valid URL").optional(),
  Address: z.object({
    Street: z.string().min(2, "Street address must be at least 2 characters long").max(100, "Street address cannot exceed 100 characters"),
    City: z.string().min(2, "City must be at least 2 characters long").max(50, "City cannot exceed 50 characters"),
    State: z.string().min(2, "State must be at least 2 characters long").max(50, "State cannot exceed 50 characters"),
    Zip: z.string().min(5, "Zip code must be at least 5 characters long").max(10, "Zip code cannot exceed 10 characters"),
    Country: z.string().min(2, "Country must be at least 2 characters long").max(50, "Country cannot exceed 50 characters"),
  }),
  ContactPerson: z.object({
    FirstName: z.string().min(2, "First name must be at least 2 characters long").max(50, "First name cannot exceed 50 characters"),
    LastName: z.string().min(2, "Last name must be at least 2 characters long").max(50, "Last name cannot exceed 50 characters"),
    Position: z.string().min(2, "Position must be at least 2 characters long").max(50, "Position cannot exceed 50 characters"),
    Email: z.string().email("Must be a valid email").min(2, "Email must be at least 2 characters long").max(50, "Email cannot exceed 50 characters"),
    PhoneNumber: z.string().min(11, "Phone number must be at least 11 characters long").max(15, "Phone number cannot exceed 15 characters"),
  }),
  PartnershipType: z.string().min(2, "Partnership type must be at least 2 characters long").max(50, "Partnership type cannot exceed 50 characters"),
  PartnershipDescription: z.string().min(2, "Partnership description must be at least 2 characters long").max(500, "Partnership description cannot exceed 500 characters"),
  OrganizationMission: z.string().min(2, "Organization mission must be at least 2 characters long").max(500, "Organization mission cannot exceed 500 characters"),
  GoalsAndObjectives: z.string().min(2, "Goals and objectives must be at least 2 characters long").max(500, "Goals and objectives cannot exceed 500 characters"),
  PastPartnerships: z.string().max(500, "Past partnerships cannot exceed 500 characters").optional(),
  ExpectedContribution: z.string().min(2, "Expected contribution must be at least 2 characters long").max(500, "Expected contribution cannot exceed 500 characters"),
  OtherInformation: z.string().max(500, "Other information cannot exceed 500 characters").optional(),
})

interface partnershipFormProps {
  setState: (v: boolean) => void
}

const PartnershipForm: React.FC<partnershipFormProps> = ({ setState }) => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      OrganizationName: "",
      WebsiteURL: "",
      Address: {
        Street: "",
        City: "",
        State: "",
        Zip: "",
        Country: "",
      },
      ContactPerson: {
        FirstName: "",
        LastName: "",
        Position: "",
        Email: "",
        PhoneNumber: "",
      },
      PartnershipType: "",
      PartnershipDescription: "",
      OrganizationMission: "",
      GoalsAndObjectives: "",
      PastPartnerships: "",
      ExpectedContribution: "",
      OtherInformation: ""
    },
  })
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setIsSubmitted(true)
    setState(false)
    toast.success("Your form was submitted successfully!")
  }

  const [submitted, setIsSubmitted] = useState(false)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-slate-100 grid lg:grid-cols-3 gap-6 grid-cols-1 rounded-md justify-center items-center p-6">
        <FormField control={form.control} name="OrganizationName" render={({ field }) => (
          <FormItem>
            <FormLabel>Organization Name</FormLabel>
            <FormControl>
              <Input placeholder="Organization Name" {...field} />
            </FormControl>
            <FormDescription>Enter the name of your organization.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="WebsiteURL" render={({ field }) => (
          <FormItem>
            <FormLabel>Website URL</FormLabel>
            <FormControl>
              <Input placeholder="Website URL" {...field} />
            </FormControl>
            <FormDescription>Enter your organizations website URL (optional).</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="Address.Street" render={({ field }) => (
          <FormItem>
            <FormLabel>Street Address</FormLabel>
            <FormControl>
              <Input placeholder="Street Address" {...field} />
            </FormControl>
            <FormDescription>Enter the street address of your organization.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="Address.City" render={({ field }) => (
          <FormItem>
            <FormLabel>City</FormLabel>
            <FormControl>
              <Input placeholder="City" {...field} />
            </FormControl>
            <FormDescription>Enter the city where your organization is located.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="Address.State" render={({ field }) => (
          <FormItem>
            <FormLabel>State</FormLabel>
            <FormControl>
              <Input placeholder="State" {...field} />
            </FormControl>
            <FormDescription>Enter the state/province where your organization is located.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="Address.Zip" render={({ field }) => (
          <FormItem>
            <FormLabel>Zip/Postal Code</FormLabel>
            <FormControl>
              <Input placeholder="Zip/Postal Code" {...field} />
            </FormControl>
            <FormDescription>Enter the zip/postal code of your organizations address.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="Address.Country" render={({ field }) => (
          <FormItem>
            <FormLabel>Country</FormLabel>
            <FormControl>
              <Input placeholder="Country" {...field} />
            </FormControl>
            <FormDescription>Enter the country where your organization is located.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="ContactPerson.FirstName" render={({ field }) => (
          <FormItem>
            <FormLabel>Contact Person First Name</FormLabel>
            <FormControl>
              <Input placeholder="First Name" {...field} />
            </FormControl>
            <FormDescription>Enter the first name of the contact person.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="ContactPerson.LastName" render={({ field }) => (
          <FormItem>
            <FormLabel>Contact Person Last Name</FormLabel>
            <FormControl>
              <Input placeholder="Last Name" {...field} />
            </FormControl>
            <FormDescription>Enter the last name of the contact person.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="ContactPerson.Position" render={({ field }) => (
          <FormItem>
            <FormLabel>Contact Person Position</FormLabel>
            <FormControl>
              <Input placeholder="Position" {...field} />
            </FormControl>
            <FormDescription>Enter the position/title of the contact person.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="ContactPerson.Email" render={({ field }) => (
          <FormItem>
            <FormLabel>Contact Person Email</FormLabel>
            <FormControl>
              <Input placeholder="Email" {...field} />
              </FormControl>
              <FormDescription>Enter the email address of the contact person </FormDescription>
              <FormMessage />
            </FormItem>
            )} />
<FormField control={form.control} name="ContactPerson.PhoneNumber" render={({ field }) => (
          <FormItem>
            <FormLabel>Contact Person Phone Number</FormLabel>
            <FormControl>
              <Input placeholder="Phone Number" {...field} />
            </FormControl>
            <FormDescription>Enter the phone number of the contact person.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />

<FormField control={form.control} name="PartnershipType" render={({ field }) => (
          <FormItem>
            <FormLabel>Partnership Type</FormLabel>
            <FormControl>
              <Input placeholder="Type of Partnership" {...field} />
            </FormControl>
            <FormDescription>Describe the type of partnership you are seeking.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="PartnershipDescription" render={({ field }) => (
          <FormItem>
            <FormLabel>Partnership Description</FormLabel>
            <FormControl>
              <Textarea placeholder="Description of Partnership" {...field} />
            </FormControl>
            <FormDescription>Provide a detailed description of the partnership.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="OrganizationMission" render={({ field }) => (
          <FormItem>
            <FormLabel>Organization Mission</FormLabel>
            <FormControl>
              <Textarea placeholder="Organization Mission" {...field} />
            </FormControl>
            <FormDescription>Describe the mission of your organization.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="GoalsAndObjectives" render={({ field }) => (
          <FormItem>
            <FormLabel>Goals and Objectives</FormLabel>
            <FormControl>
              <Textarea placeholder="Goals and Objectives" {...field} />
            </FormControl>
            <FormDescription>List the goals and objectives of the partnership.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="PastPartnerships" render={({ field }) => (
          <FormItem>
            <FormLabel>Past Partnerships</FormLabel>
            <FormControl>
              <Textarea placeholder="Past Partnerships" {...field} />
            </FormControl>
            <FormDescription>Describe any past partnerships (optional).</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="ExpectedContribution" render={({ field }) => (
          <FormItem>
            <FormLabel>Expected Contribution</FormLabel>
            <FormControl>
              <Textarea placeholder="Expected Contribution" {...field} />
            </FormControl>
            <FormDescription>Outline your expected contribution to the partnership.</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
        <FormField control={form.control} name="OtherInformation" render={({ field }) => (
          <FormItem>
            <FormLabel>Other Information</FormLabel>
            <FormControl>
              <Textarea placeholder="Other Information" {...field} />
            </FormControl>
            <FormDescription>Provide any additional information (optional).</FormDescription>
            <FormMessage />
          </FormItem>
        )} />
    <div
className="w-full
justify-center
items-center
lg:col-start-1
col-span-full

flex">

<Button
        className=""
        type="submit">Submit</Button>

</div>
     
            </form> 
          </Form>

        )

      }



      export default PartnershipForm;
 