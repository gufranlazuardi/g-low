import Image from 'next/image'
import React from 'react'
import logoImage from "../public/images/logosaas.png"

const Navbar = () => {
  return (
    <div className='container'>
        <div className='py-4'>
        <Image 
            src={logoImage}
            alt='logosaas.png'
            className='h-12 w-12'
        />
        
        </div>
    </div>
  )
}

export default Navbar