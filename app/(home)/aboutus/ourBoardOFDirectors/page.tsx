"use client"
import { Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react'

function OurBoardOfDirectors() {
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
          <h1 className='text-white font-bold text-4xl'>Our Board of Directors</h1>
        </div>
      </Transition>

      <div className="p-8 py-20">
        <h2 className="text-white text-2xl font-bold mb-6">Our Board of Directors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-neutralWhite p-4 rounded shadow-md">
            <h3 className="text-charcoalGray text-xl font-bold">Director 1</h3>
            <p className="text-charcoalGray">
              Brief bio and background of Director 1.
            </p>
          </div>
          <div className="bg-neutralWhite p-4 rounded shadow-md">
            <h3 className="text-charcoalGray text-xl font-bold">Director 2</h3>
            <p className="text-charcoalGray">
              Brief bio and background of Director 2.
            </p>
          </div>
          {/* Add more directors as needed */}
        </div>
      </div>
    </div>
  )
}

export default OurBoardOfDirectors
