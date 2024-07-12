"use client"
import { Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react'

function OurJourney() {
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
          <h1 className='text-white font-bold text-4xl'>Our Journey</h1>
        </div>
      </Transition>

      <div className="bg-slate-50 p-8 mt-8 py-20">
        <h2 className="text-charcoalGray text-2xl font-bold mb-6">Our Story</h2>
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-neutralWhite p-4 rounded shadow-md">
            <p className="text-charcoalGray">
              NourishEd was founded with a simple yet powerful mission: to eradicate hunger from classrooms in Pakistan. Our journey began when a group of compassionate individuals recognized the profound impact that hunger has on a child&apos;s ability to learn and thrive. Witnessing firsthand the struggles that children faced due to malnutrition, we were driven to make a change.
              Our founders believed that every child deserves the opportunity to reach their full potential, and that starts with ensuring they have access to nutritious meals. What began as a small initiative has grown into a comprehensive program that not only provides meals but also supports education and well-being.
              Through partnerships with local communities, schools, and organizations, NourishEd has been able to expand its reach and impact. We are dedicated to creating sustainable solutions that address the root causes of hunger and provide lasting benefits for children and their families.
              Our story is one of hope, perseverance, and the unwavering belief that together, we can make a difference. We invite you to join us on this journey and help us continue to bring nourishment and opportunity to those who need it most.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurJourney
