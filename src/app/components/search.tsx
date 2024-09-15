import Image from 'next/image'
import React from 'react'

const SearchComponent = () => {
  return (
    <form className='flex items-center justify-between bg-gray-100 p-2 rounded-sm'>
        <input type="text" placeholder='Buscar Propiedad' className='flex bg-transparent outline-none' />
        <button>
            <Image src='/search.png' alt='' width={16} height={16}/>
        </button>
    </form>
  )
}

export default SearchComponent