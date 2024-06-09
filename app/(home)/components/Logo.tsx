import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link
    href={'/'}
    >
    <div
    className='
    p-2
    flex
    flex-col
    text-center
    '>


 <div
 className=' text-[#4CB566]'>
  <p className='text-2xl font-bold'>NourishEd</p>  
    <p
    className='text-[8px] text-slate-700'>Eradicating hunger from Classrooms in Pakistan
</p>
 </div>
 </div>
 </Link>
  )
}

export default Logo