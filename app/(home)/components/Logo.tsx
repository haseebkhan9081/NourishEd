import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link
    href={'/'}
    >
    <Image
    src={'/Logo.png'}
    alt='logo'
    width={150}
   height={1}
    />
 </Link>
  )
}

export default Logo