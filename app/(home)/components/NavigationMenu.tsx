"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import clsx from "clsx"
import { usePathname, useRouter } from "next/navigation"
import { ChevronDown, ChevronUp, Heart } from "lucide-react"

const aboutUs: { title: string; href: string; }[] = [
  {
    title: "Our Journey",
    href: "/ourjourney",
     },
     {
        title: "Our Mission & Vision",
        href: "/ourjourney",
         },
         {
            title: "Our Board of Directors",
            href: "/ourjourney",
             },
             {
                title: "Our Team",
                href: "/ourjourney",
                 },
  
   
]


const programs: { title: string; href: string; }[] = [
    {
      title: "Library of Ibrahim Goth Food support",
      href: "/ourjourney",
       } 
    
     
  ]

  const getInvolved: { title: string; href: string; }[] = [
    {
      title: "Become a Volunteer",
      href: "/ourjourney",
       } ,
       {
        title: "Become Partner",
        href: "/ourjourney",
         } 
    
     
  ] 

export default function NavigationMenuNavbar() {
    const [isOpen,setIsOpen]=React.useState(false);
    const router=useRouter()
 const pathname=usePathname()

  return (
    <NavigationMenu
    className="flex
    w-full
        gap-x-8
        flex-row"
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          
        <Link
 href={'/'}
 className={clsx(
    ' inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 ',
    pathname=='/'&&'bg-slate-100  outline-1 outline-warmGreen transition ease-in duration-300 text-slate-900'
 )}
 >
 <div 
className='flex
flex-row
h-full
w-full
gap-x-2
p-2
items-center
justify-center
 
 rounded-md
 
 transition 
 ease-in 
 duration-300
'>
    <p className='xl:text-base text-sm'>Home</p>
     </div></Link> 
        </NavigationMenuItem >
        <NavigationMenuItem className="">
          <NavigationMenuTrigger>About us</NavigationMenuTrigger>
          <NavigationMenuContent>

            <ul className="min-w-max flex
            flex-col
            space-y-4
            justify-center  
            items-center
            p-3 ">
              {aboutUs.map((aboutUs) => (
                 <li key={aboutUs.title}>{aboutUs.title}</li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
        <NavigationMenuContent>
            <ul className="min-w-max flex
            flex-col
            space-y-4
            justify-center  
            items-center
            p-3 ">
              {programs.map((item) => (
                 <li key={item.title}>{item.title}</li>
              ))}
            </ul>
          </NavigationMenuContent>
        
        </NavigationMenuItem>
        <NavigationMenuItem>
        <HoverCard
        openDelay={100}
        onOpenChange={(v)=>{
            console.log(v)
            setIsOpen(v)
        }}
        >
  <HoverCardTrigger
   className= ' inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 '
  
  >Get Involved
  {isOpen?<ChevronUp
  className="top-[1px] ml-1 h-3 w-3 transition duration-200"
  />:<ChevronDown
  
  className="top-[1px] ml-1 h-3 w-3 transition duration-200"/>}
  
  </HoverCardTrigger>
  <HoverCardContent
  align="center">
 
            <ul className="min-w-max flex
            flex-col
            space-y-4
            justify-center  
            items-center
            p-3 ">
              {getInvolved.map((item) => (
                 <li key={item.title}>{item.title}</li>
              ))}
            </ul>
        
  </HoverCardContent>
</HoverCard>

       
        
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Link
     className={clsx(
        'inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 ',
        pathname.includes('donate')&&'border-b-2 border-[#4CB566] transition ease-in duration-300'
     )}
    href={'/donate'}
     >
     <div 
className='flex
flex-row
h-full
w-full
gap-x-2
items-center
justify-center
 
 rounded-md
 
 transition 
 ease-in 
 p-2
 duration-300
'>
    <p className='xl:text-base text-sm'>Donate</p>
     <Heart
      className='w-4
       
      h-4'/></div>
    </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Link
 className={clsx('inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 ',
    pathname.includes('contactUs')&&'border-b-2 border-[#4CB566] transition ease-in duration-300'
 )}
 href={'/contactUs'}
  >
<div 
className='flex
flex-row
h-full
w-full
gap-x-2
items-center
justify-center
 
 rounded-md
 
 transition 
 ease-in 
 p-2
 duration-300
'>
    <p className='xl:text-base text-sm'>Contact Us</p>
      </div> 
 </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 w-full rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm w-full font-medium leading-none">{title}</div>
           
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
