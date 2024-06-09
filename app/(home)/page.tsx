"use client";
import React, { useEffect, useState } from 'react';
 
import Image from 'next/image';
import { Transition } from '@headlessui/react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

import Statisticshome from './components/Statisticshome';
import ProgramsInitiativesHome from './components/ProgramsInitiativesHome';
import PowerOfaMeal from './components/PowerOfaMealHome';
import ImpactStorieshome from './components/ImpactStorieshome';
import HowWeOperate from './components/HowWeOperate';
import OurPartners from './components/OurPartners';
import HowYoucanHelp from './components/HowYoucanHelp';
import CarouslHome from './components/Carousel';

function Home() {
  const router = useRouter();
  const [isShow, setIsShow] = useState(false);
  const [isCarouselLoaded, setIsCarouselLoaded] = useState(false);

  useEffect(() => {
    setIsShow(true);
  }, []);

  const handleCarouselLoad = () => {
    setIsCarouselLoaded(true);
  };

  return (
    <div className='w-full inset-0 h-full'>
      <div className='inset-0 w-full'>
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
          <div className='w-full h-full inset-0'>
            <CarouslHome onLoad={handleCarouselLoad} />
          </div>
        </Transition>
      </div>

      {isCarouselLoaded && (
        <div className="relative">
          <PowerOfaMeal />
          <ImpactStorieshome />
          <HowWeOperate />
          <ProgramsInitiativesHome />
          <div className='flex py-12 flex-col w-full justify-center items-center space-y-4 md:py-20 p-4 rounded-lg'>
            <h1 className='text-2xl md:text-4xl text-warmGreen font-bold'>
              A Meal Is Hope. Will You Help?
            </h1>
            <p className='text-charcoalGray'>
              Your tax deductible donation can transform childrens lives
            </p>
            <Button
              onClick={() => {
                router.push('/donate');
              }}
              className='bg-warmRed'
            >
              Donate now
            </Button>
          </div>
          <Statisticshome />
          <OurPartners />
          <HowYoucanHelp />
        </div>
      )}
    </div>
  );
}

export default Home;
