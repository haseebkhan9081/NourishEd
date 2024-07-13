"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from 'next/image'

function LeadershipandTeam() {

    const BODUSA = [
        {img: 'team.png', name: 'Faisal Hussain', position: 'BOD'},
        {img: 'team.png', name: 'Fawad Ahmed', position: 'BOD'},
        {img: 'team.png', name: 'Khurram Ismail', position: 'BOD'},
        {img: 'team.png', name: 'Faisal Hussain', position: 'BOD'},
        {img: 'team2.png', name: 'Saima Ismail', position: 'BOD'}
    ];

    const bodPakistan = [
      { img: 'team.png', name: 'Ali Tahir', position: 'BOD' },
      { img: 'team.png', name: 'Arif Irfanullah', position: 'BOD' },
      { img: 'team.png', name: 'Tufail', position: 'BOD' }
  ];

    const Officers = [
        {img: 'team.png', name: 'Khurram Ismail', position: 'President'},
        {img: 'team.png', name: 'Raheel ', position: 'Merchant Treasurer'},
        {img: 'team.png', name: 'Yasir Salim', position: 'Secretary'},
        {img: 'team.png', name: 'Ali Tahir', position: 'Ops Manager'}
    ];

    return (
        <div className="w-full bg-warmGreen p-8 py-20">
            <h2 className="text-neutralWhite text-2xl font-bold mb-6">Leadership Team</h2>
            <Tabs defaultValue="OFFICERS" className="w-full flex flex-col">
                <TabsList className='w-full lg:w-1/2 self-center justify-center items-center flex flex-row gap-x-2'>
                    <TabsTrigger value="BODUSA">BOD USA</TabsTrigger>
                    <TabsTrigger value="OFFICERS">OFFICERS</TabsTrigger>
                    <TabsTrigger value="BODPakistan">BOD Pakistan</TabsTrigger>
                </TabsList>
                <TabsContent value="BODUSA">
                    <div className="flex justify-center">
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4 '>
                            {BODUSA.map((profile, index) => (
                                <Card key={index} className=''>
                                    <CardHeader>
                                        <CardTitle className='justify-center items-center w-full flex flex-col'>
                                            <Image
                                                src={'/' + profile.img}
                                                alt=''
                                                width={100}
                                                height={100}
                                            />
                                        </CardTitle>
                                    </CardHeader>
                                    <CardFooter className='justify-center items-center flex-col flex'>
                                        <div className='text-center'>{profile.name}</div>
                                        <div className='text-center'>{profile.position}</div>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="OFFICERS">
                    <div className="flex justify-center">
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4'>
                            {Officers.map((profile, index) => (
                                <Card key={index} className=''>
                                    <CardHeader>
                                        <CardTitle className='justify-center items-center w-full flex flex-col'>
                                            <Image
                                                src={'/' + profile.img}
                                                alt=''
                                                width={100}
                                                height={100}
                                            />
                                        </CardTitle>
                                    </CardHeader>
                                    <CardFooter className='justify-center items-center flex-col flex'>
                                        <div className='text-center'>{profile.name}</div>
                                        <div className='text-center'>{profile.position}</div>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="BODPakistan">
                    <div className="flex justify-center">
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4'>
  {bodPakistan.map((profile, index) => (
    <Card key={index} className=''>
      <CardHeader>
        <CardTitle className='justify-center items-center w-full flex flex-col'>
          <Image
            src={'/' + profile.img}
            alt=''
            width={100}
            height={100}
          />
        </CardTitle>
      </CardHeader>
      <CardFooter className='justify-center items-center flex-col flex'>
        <div className='text-center'>{profile.name}</div>
        <div className='text-center'>{profile.position}</div>
      </CardFooter>
    </Card>
  ))}
</div>

                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default LeadershipandTeam
