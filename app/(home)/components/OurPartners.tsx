import Image from 'next/image'
import React from 'react'

function OurPartners() {
  return (
    <div className="bg-white
py-20 
p-8">
  <h2 className="text-charcoalGray text-2xl font-bold mb-6">Our Partners</h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="flex flex-col items-center bg-neutralWhite p-4 rounded shadow-md">
      <Image src="/partner1.png" alt="Partner 1" 
      width={100}
      className='mb-4'
      height={100}
      />
      <h3 className="text-charcoalGray text-xl font-bold">Partner 1</h3>
      <p className="text-charcoalGray">A brief description of Partner 1s involvement and contribution to our mission.</p>
    </div>

    <div className="flex flex-col items-center bg-neutralWhite p-4 rounded shadow-md">
    <Image src="/partner2.png" alt="Partner 1" 
  className='mb-4'
      width={100}
      height={100}
      /> <h3 className="text-charcoalGray text-xl font-bold">Partner 2</h3>
      <p className="text-charcoalGray">A brief description of Partner 2s involvement and contribution to our mission.</p>
    </div>

    <div className="flex flex-col items-center bg-neutralWhite p-4 rounded shadow-md">
    <Image src="/partner3.png" alt="Partner 1" 
       
      width={100}
      height={100}
      className='mb-4'/> <h3 className="text-charcoalGray text-xl font-bold">Partner 3</h3>
      <p className="text-charcoalGray">A brief description of Partner 3s involvement and contribution to our mission.</p>
    </div>
  </div>

  <div className="mt-8 text-center">
    <a href="/partners" className="text-primaryBlue font-bold hover:underline">See All Partners</a>
  </div>
</div>
  )
}

export default OurPartners