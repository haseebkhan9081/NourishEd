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
import { ChevronDown, ChevronUp, Dot, Heart } from "lucide-react"
 

const aboutUs: { title: string; href: string; }[] = [
  {
    title: "Our Journey",
    href: "/aboutus/ourJourney",
     },
     {
        title: "Our Mission & Vision",
        href: "/aboutus/ourMissionandVision",
         },
         {
            title: "Our Board of Directors",
            href: "/aboutus/ourBoardOFDirectors",
             },
             {
                title: "Our Team",
                href: "/aboutus/ourTeam",
                 },
  
   
]


const programs: { title: string; href: string; }[] = [
    {
      title: "Library of Ibrahim Goth Food support",
      href: "/programs/1",
       } 
    
     
  ]

  const getInvolved: { title: string; href: string; }[] = [
    {
      title: "Become a Volunteer",
      href: "/getInvolved/becomeAvolunteer",
       } ,
       {
        title: "Become Partner",
        href: "/getInvolved/becomeApartner",
         } 
    
     
  ] 

export default function NavigationMenuNavbar() {
 
    const [isOpen,setIsOpen]=React.useState(false);
    const router=useRouter()
 const pathname=usePathname()
 console.log("the pathname",pathname)

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
    {pathname==="/"&&<Dot className="w-8 h-8 text-warmGreen"/>}
     </div></Link> 
        </NavigationMenuItem >
        <NavigationMenuItem className="">
          <NavigationMenuTrigger>About us</NavigationMenuTrigger>
          <NavigationMenuContent>

            <ul className="min-w-max flex
            flex-col
            space-y-2
            p-3
            justify-center  
            items-center
              ">
              {aboutUs.map((aboutUs) => (
                 <li 
                 className="p-3
                 rounded-md
                 w-full
                 items-center
                 justify-center
                 hover:bg-slate-100"
                 key={aboutUs.title}>
                  <Link
                  href={aboutUs.href}
                  className="flex
                  flex-row
                  gap-x-2
                  items-center
                  justify-center"
                  >{aboutUs.title}
                  {pathname===aboutUs.href&&<Dot className="w-8 h-8 text-warmGreen"/>}
                 </Link>
                  </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuTrigger>Programs</NavigationMenuTrigger>
        <NavigationMenuContent>
            <ul className="min-w-max flex
            flex-col
            space-y-2
            p-3
            justify-center  
            items-center">
              {programs.map((item) => (
                 <li
                 className="p-3
                 rounded-md
                 w-full
                 items-center
                 justify-center
                 hover:bg-slate-100"
                 
                 key={item.title}><Link
                 className="flex
                  flex-row
                  gap-x-2
                  items-center
                  justify-center"
                 href={item.href}
                 >{item.title}
                 {pathname===item.href&&<Dot className="w-8 h-8 text-warmGreen"/>}
                 </Link></li>
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
  className="p-2"
  align="center">
 
            <ul className="min-w-max flex
            flex-col
            space-y-2
            justify-center  
            items-center
             ">
              {getInvolved.map((item) => (
                 <li
                 className="
                 p-3
                 rounded-md
                 w-full
                 items-center
                 justify-center
                 hover:bg-slate-100"
                 
                 key={item.title}><Link
                 className="flex
                  flex-row
                  gap-x-2
                  items-center
                  justify-center"
                 href={item.href}
                 >{item.title}
                 {pathname===item.href&&<Dot className="w-8 h-8 text-warmGreen"/>}
                 
                 </Link></li>
              ))}
            </ul>
        
  </HoverCardContent>
</HoverCard>

       
        
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Link
     className={clsx(
        'inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 ',
        
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
className={
  cn(
    `w-4 h-4`,
pathname==='/donate'&&'text-red-500'
  )
}
      
      /></div>
    </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Link
 className={clsx('inline-flex h-10 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 hover:text-slate-900 ',
    
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
    {pathname==="/contactUs"&&<Dot className="w-8 h-8 text-warmGreen"/>}

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
