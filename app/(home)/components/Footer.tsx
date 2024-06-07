import React from 'react'
import Logo from './Logo'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

function Footer() {
  return (
    <div 
    className='bg-[#EBEBEB]
    mb-2
    w-full'>
        
        <div
        className='
        pt-12
        flex
        space-y-8
        flex-col
        w-full
        justify-center
        items-center
        h-full'>

<Logo/>
<p
className='text-xs
text-[#858787]
font-light
text-center'>Nourished is a non profit organisation that strives to eliminate classroom hunger from Pakistan by implementing the Meal Programme

</p>
{/* the social media links */}
<div
className='flex
flex-row
w-full
justify-center
items-center
gap-x-8
text-[#4CB566]'>
<Instagram />
<Linkedin/>
<Facebook/>
<Twitter/>
<Youtube/>


</div>
       {/* the aditonal links */}
       <div
       className='flex
       p-3
       flex-row

       justify-center
       items-center
       w-full'>
{/* the first column */}
<div
className='
w-full

flex
flex-col
space-y-4'>
{/*   About US */}
<div

className='
flex
flex-col'
>
 <h6
 className='text-[#626671]
 text-sm
 '>
    ABOUT US</h6>  
    <div
    className='text-xs
    text-[#626671]
    mt-4
    space-y-2'> 
    <p>About Us</p>
    <p>Our Vision and Mission</p>
    <p>Inspiration</p>
    <p>Board of Trustees</p>
    <p>Text exemption donation</p>
    <p>faqs</p>
    <p>Terms and Conditions</p>
    </div>

</div>
{/*   GET INVOLVED */}
<div

className='
flex
flex-col'
>
 <h6
 className='text-[#626671]
 text-sm
 '>
    GET INVOLVED</h6>  
    <div
    className='text-xs
    text-[#626671]
    mt-4
    space-y-2'> 
    <p>Future Shaper</p>
     
    </div>

</div>
</div>
{/* second column */}
<div
className='
w-full

flex
flex-col
space-y-4'>
{/*   OUR WORK */}
<div

className='
flex
flex-col'
>
 <h6
 className='text-[#626671]
 text-sm
 '>
    OUR WORK</h6>  
    <div
    className='text-xs
    text-[#626671]
    mt-4
    space-y-2'> 
    <p>Our Work</p>
    <p>Feeding For Education</p>
    <p>Meal Pogram</p>
     <p>Library Of Ibrahim Goth Meal Support</p>
    <p>BEyond Meals</p>
    </div>

</div>
{/*   DONATE */}
<div

className='
flex
flex-col'
>
 <h6
 className='text-[#626671]
 text-sm
 '>
   DONATE</h6>  
    <div
    className='text-xs
    text-[#626671]
    mt-4
    space-y-2'> 
    <p>Future Shaper</p>
     
    </div>

</div>
</div>
       </div>
       <div
       className='p-4 w-full'>
       <Separator
       className='w-full bg-[#626671]'/>
       </div>
       <div>
       <div>
        All Rights Reserved @2024
       </div>
       <div>The NourishEd Foundation</div>
        </div>
        </div>

    </div>
  )
}

export default Footer