'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import SearchComponent from './search'

const NavbarComponent = () => {
    const [showMenu, setShowMenu]= useState(false)
  return (
    <>
    <div className="h-20 px-4 border flex justify-center items-center gap-8">
        {/* Logo and Name */}
        <Link href='/ ' className='flex items-center justify-between gap-4'>
            <Image src='/djes-logo.png' alt='' width={50} height={50}/>
            <div className="hidden md:flex">D-jes</div>
        </Link>
        {/* Mobile */}
        { showMenu &&
            <ul className='absolute w-full h-[calc(100vh-80px)] left-0 top-20 bg-black text-white flex flex-col items-center justify-around text-2xl gap-4  md:hidden'>
                <Link href=''>Home</Link>
                <Link href=''>Propiedades</Link>
                <Link href=''>Acerca De Nosotros</Link>
                <Link href=''>Contacto</Link>
            </ul>
        }
        {/* descktop */}
        <ul className='hidden md:flex items-center justify-between gap-4 text-sm'>
                <Link href=''>Home</Link>
                <Link href=''>Propiedades</Link>
                <Link href=''>Acerca De Nosotros</Link>
                <Link href=''>Contacto</Link>
        </ul>
        
        {/* Search and login container */}
        <div className="">
            <SearchComponent/>
        </div>

        <div className="cursor-pointer" onClick={()=>setShowMenu(!showMenu)}>
            {showMenu ? <IoMdClose color='black' fontSize={30}/> : <FaBars color='black' fontSize={30}/>}
        </div>
    </div>
    </>
  )
}

export default NavbarComponent