import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import MainForm from '../donate/components/MainForm'

function PowerOfaMeal() {
    const router=useRouter()
  return (
    <div
className=' 
bg-slate-50
 
transition duration-300 ease-in-out
md:p-12
md:py-24
py-12
md:px-32
px-4
w-full

h-full
grid
md:grid-cols-2
grid-cols-1
 gap-8
 justify-between
 
 md:flex-row
 md:justify-between

 
'>

  <div>
<Image
src={"/image1.png"}
alt=''
width={100}
height={100}
layout='responsive'
/>
<div
className='flex
transition duration-300 ease-in-out
justify-center
items-center
p-6
flex-col
w-full'>
<h2
className='
text-warmGreen
text-3xl

font-bold
text-center
mb-4'
>The Power of a Meal</h2>
<p
className='text-charcoalGray
text-center'
>When a child faces hunger, their education and dreams are overshadowed by the pain and distraction of an empty stomach. Concentration wanes, energy drops, and the joy of learning is replaced by the constant worry of where their next meal will come from. A nutritious meal has the power to restore hope, provide energy, and open the door to a brighter future. But we cant provide these meals without the support of compassionate individuals like you. Your contribution can help nourish minds and bodies, empowering children to focus on their studies and dream big.

</p>

<Button
onClick={()=>{router.push('/donate')}}
className='rounded-lg
mt-8
animate-pulse
bg-warmRed'
>
  Give hope now
</Button>

</div>

</div>
<div
className='w-full
items-center
justify-center
flex'
>
<MainForm/>
</div>
</div>
  )
}

export default PowerOfaMeal