import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchComponent from './search'

const NavbarComponent = () => {
  return (
    <>
    <div className="h-20 px-4 border flex justify-center items-center gap-8">
        {/* Logo and Name */}
        <Link href='/ ' className='flex items-center justify-between gap-4'>
            <Image src='/djes-logo.png' alt='' width={50} height={50}/>
            <div className="">D-jes</div>
        </Link>
        {/* Menu */}
        <div className="">
            <ul className='flex items-center justify-between gap-4 text-sm'>
                <Link href=''>Home</Link>
                <Link href=''>Propiedades</Link>
                <Link href=''>Acerca De Nosotros</Link>
                <Link href=''>Contacto</Link>
            </ul>
        </div>
        {/* Search and login container */}
        <div className="">
            <SearchComponent/>
        </div>
    </div>
    </>
  )
}

export default NavbarComponent