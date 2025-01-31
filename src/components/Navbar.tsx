'use client'

import React, { useState } from 'react'
import { Search, UserRound } from 'lucide-react'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { BsCart3 } from 'react-icons/bs'

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='bg-black'>
      <nav className='flex justify-between items-center gap-14 py-6 px-8 md:px-32 drop-shadow-md'>

        <div className='relative mb-12 sm:mb-0'>
          <a href="www.mysite.com" className='w-52 hover:scale-105 transition-all text-2xl text-white'>F<span className='text-amber-500'>oo</span>dtuck</a>
        </div>

        <ul className='hidden ml-20 xl:flex items-center gap-10 font-semibold text-white'>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/'>Home</Link></li>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/menu'>Menu</Link></li>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/blog'>Blog</Link></li>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/about'>About</Link></li>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/shop'>Shop</Link></li>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/signup'>Sign-up</Link></li>
          <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/contact-us'>Contact</Link></li>
        </ul>

        <div className="hidden md:flex items-center ml-20 gap-4">

        <Link href='/signin'> <UserRound className='w-6 h-6 text-white'/></Link>
          <Search className="w-6 h-6 text-white" />

          <Link href="/shop/shoppingcart">
            <BsCart3 className="w-6 h-6 text-white" />
          </Link>
        </div>

        {/* Mobile Menu */}
        <FiMenu className='absolute -left-[80px] xl:hidden block text-4xl cursor-pointer text-white'
          onClick={() => setIsMenuOpen(!isMenuOpen)} />

        <div className={`absolute xl:hidden top-[90px] -left-[100px] w-[300px] bg-stone-900 text-white rounded flex flex-col items-start gap-6 font-semibold text-lg transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
          style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }} >
          <ul>
            <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/'>Home</Link></li>
            <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/menu'>Menu</Link></li>
            <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/blog'>Blog</Link></li>
            <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/about'>About</Link></li>
            <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/shop'>Shop</Link></li>
            <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/contact-us'>Contact</Link></li>
          </ul>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
