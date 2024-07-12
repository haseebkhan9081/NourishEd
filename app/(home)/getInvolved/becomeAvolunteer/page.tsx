"use client"
import { Button } from '@/components/ui/button'
import { Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import VolunteerForm from '../components/VolunteerForm'
 

function BecomeVolunteer() {
  const [isShow, setIsShow] = useState(false)
  const [volunteerForm, setVolunteerForm] = useState(false)

  useEffect(() => {
    setIsShow(true)
  }, [])

  return (
    <div className="bg-warmGreen py-20 p-8">
      <Transition
        appear={true}
        show={true}
        enter="transform transition duration-1000"
        enterFrom="translate-y-full opacity-0"
        enterTo="translate-y-0 opacity-100"
        leave="transform transition duration-1000"
        leaveFrom="translate-y-0 opacity-100"
        leaveTo="translate-y-full opacity-0"
      >
        <div>
          <h2 className="text-white text-center text-4xl font-bold mb-6">Become a Volunteer</h2>
        </div>
      </Transition>

      <div className='flex w-full space-y-4 justify-center items-center flex-col'>
        <Button
          onClick={() => setVolunteerForm(prev => !prev)}
          className='bg-slate-50 text-warmGreen font-bold'
        >
          {volunteerForm ? "Cancel" : "Sign Up to Volunteer"}
        </Button>
        {volunteerForm && <VolunteerForm setState={setVolunteerForm} />}
      </div>
    </div>
  )
}

export default BecomeVolunteer
