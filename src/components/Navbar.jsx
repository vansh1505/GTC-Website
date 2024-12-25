import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='mt-2 flex justify-center'>
    <div className='glass-effect text-white flex justify-between items-center px-12 rounded-full mx-16 fixed w-3/4 z-50'>
    <img className='h-16 p-2' src="logo.png" alt="logo" />
    <div>
        <ul className='flex gap-20'>
            <li className='hover:cursor-pointer hover:text-blue-600 duration-200'>Home</li>
            <li className='hover:cursor-pointer hover:text-blue-600 duration-200'>Register</li>
            <li className='hover:cursor-pointer hover:text-blue-600 duration-200'>Contact us</li>
            <li className='hover:cursor-pointer hover:text-blue-600 duration-200'>About GTC</li>
        </ul>
    </div>
    </div>
    </div>
    </>
  )
}

export default Navbar