"use client"
import { Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react'

function OurMissionVision() {
  const [isShow, setIsShow] = useState(false)
  useEffect(() => {
    setIsShow(true)
  }, [])

  return (
    <div className='bg-warmGreen w-full py-20 lg:p-8'>
      <Transition
        appear={true}
        show={isShow}
        enter="transform transition duration-1000"
        enterFrom="translate-y-full opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transform transition duration-1000"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-full opacity-0"
      >
        <div className='w-full justify-center items-center flex'>
          <h1 className='text-white font-bold text-4xl'>Our Mission & Vision</h1>
        </div>
      </Transition>

      <div className="p-8 py-20">
        <h2 className="text-white text-2xl font-bold mb-6">Our Mission and Vision</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-neutralWhite p-4 rounded shadow-md">
            <h3 className="text-charcoalGray text-xl font-bold">Our Mission</h3>
            <p className="text-charcoalGray">
              At NourishEd, our mission is to combat childhood hunger and malnutrition in Pakistan by providing nutritious meals to students in underserved communities. We believe that every child deserves access to healthy food, enabling them to focus on their education and achieve their full potential.
            </p>
          </div>
          <div className="bg-neutralWhite p-4 rounded shadow-md">
            <h3 className="text-charcoalGray text-xl font-bold">Our Vision</h3>
            <p className="text-charcoalGray">
              We envision a world where no child goes to school hungry. By 2025, we aim to serve millions of meals across Pakistan, ensuring that every child has the opportunity to learn, grow, and thrive without the burden of hunger. Through collaboration with local partners and communities, we strive to create sustainable, long-term solutions to end child hunger and improve educational outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurMissionVision
