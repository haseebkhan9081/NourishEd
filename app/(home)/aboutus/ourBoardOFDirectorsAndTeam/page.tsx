"use client"
import { Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import LeadershipandTeam from '../components/LeadershipandTeam'

function OurLeadershipAndTeam() {
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
          <h1 className='text-white font-bold text-4xl'>Our Leadership and Team</h1>
        </div>
      </Transition>

      <div className="p-8 py-20">
        <LeadershipandTeam />
      </div>
    </div>
  )
}

export default OurLeadershipAndTeam
