"use client"
import { Button } from '@/components/ui/button'
import { Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import PartnershipForm from '../components/PartnerForm'
 

function BecomePartner() {
  const [isShow, setIsShow] = useState(false)
  const [partnerForm, setPartnerForm] = useState(false)

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
          <h2 className="text-white text-center text-4xl font-bold mb-6">Become a Partner</h2>
        </div>
      </Transition>

      <div className='flex w-full space-y-4 justify-center items-center flex-col'>
        <Button
          onClick={() => setPartnerForm(prev => !prev)}
          className='font-bold'
        >
          {partnerForm ? "Cancel" : "Become a Partner"}
        </Button>

        <Transition
          appear={true}
          show={partnerForm}
          enter="transform transition duration-1000"
          enterFrom="translate-y-full opacity-0"
          enterTo="translate-y-0 opacity-100"
          leave="transform transition duration-1000"
          leaveFrom="translate-y-0 opacity-100"
          leaveTo="translate-y-full opacity-0"
        >
          <div>
            <PartnershipForm setState={setPartnerForm} />
          </div>
        </Transition>
      </div>
    </div>
  )
}

export default BecomePartner
