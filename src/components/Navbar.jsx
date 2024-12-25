import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='mt-2 flex justify-center'>
    <div className='glass-effect text-white flex justify-between items-center px-12 rounded-full mx-16 fixed w-3/4 z-50'>
    <img className='h-16 p-2' src="logo.png" alt="logo" />
    <div>
        <ul className='flex gap-20'>
            <li>Home</li>
            <li>Register</li>
            <li>Contact us</li>
            <li>About GTC</li>
        </ul>
    </div>
    </div>
    </div>
    </>
  )
}

export default Navbar