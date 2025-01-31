'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { FaFacebookF, FaTwitter, FaPinterestP } from 'react-icons/fa'
import backG from '/public/images/heroBack.png'
import heroImg from '/public/images/hero.png'
import { FiMenu } from 'react-icons/fi'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { BsCart3 } from 'react-icons/bs'

export default function Hero() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center pb-20 px-4 md:px-0">
      <Image src={backG} alt="Background" className="object-cover absolute inset-0 w-full h-full opacity-10" />

      {/* Navbar */}
      <nav className='flex justify-between items-center py-6 px-8 sm:px-4 drop-shadow-md'>

{/* Left Side Menu Items (Desktop) - Unchanged */}
<ul className='hidden relative -left-44 xl:flex items-center gap-10 font-semibold text-white'>
  <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/'>Home</Link></li>
  <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/menu'>Menu</Link></li>
  <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/blog'>Blog</Link></li>
  <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/about'>About</Link></li>
  <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/shop'>Shop</Link></li>
  <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/signup'>Signup</Link></li>
  <li className='font-normal hover:text-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md transition-all'><Link href='/contact-us'>Contact</Link></li>
</ul>

{/* Center Logo - Unchanged */}
<div className='relative -left-20 mb-12 sm:mb-0 sm:-top-6'>
  <a href="www.mysite.com" className='w-52 hover:scale-105 transition-all text-2xl text-white'>Food<span className='text-amber-500'>tuck</span></a>
</div>

{/* Right Side Icons (Desktop) - Unchanged */}
<div className="hidden relative left-48 md:flex items-center">
  <Input type="search" placeholder="Search..." className="bg-transparent border border-amber-500 rounded-full py-2 px-4 pr-10 focus:outline-none" />
  <Search className="w-5 h-5 relative -left-10" />
  <Link href="/shop/shoppingcart">
    <BsCart3 className="w-6 h-6" />
  </Link>
</div>


<FiMenu className='fixed xl:hidden text-4xl cursor-pointer text-white -right-4 top-6 z-50'
  onClick={() => setIsMenuOpen(!isMenuOpen)} />


<div className={`fixed xl:hidden top-20 left-0 w-full h-[calc(100vh-80px)] bg-stone-900/95 text-white flex flex-col items-center gap-6 font-semibold text-lg transition-opacity duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
  <ul className="w-full mt-8">
    <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/'>Home</Link></li>
    <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/menu'>Menu</Link></li>
    <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/blog'>Blog</Link></li>
    <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/about'>About</Link></li>
    <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/shop'>Shop</Link></li>
    <li className='list-none w-full text-center p-4 hover:text-amber-500 cursor-pointer transition-all'><Link href='/contact-us'>Contact</Link></li>
  </ul>
</div>

</nav>

      {/* Hero Content */}
      <div className="container mx-auto mt-20 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-10 lg:mb-0 pl-6">
          <h2 className="text-2xl md:text-3xl text-amber-500 mb-2">Its Quick & Amusing!</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-amber-500">Th</span>e Art of speed
            <br />
            food Quality
          </h1>
          <p className="mb-6 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius sed pharetra dictum neque massa congue
          </p>
          <Link
            href="/menu"
            className="inline-block px-8 py-3 bg-amber-500 rounded-full text-neutral-200 hover:bg-amber-600 transition-color z-10"
          >
            See Menu
          </Link>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={heroImg}
            alt="Featured dish presentation"
            width={877}
            height={670}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Social Icons */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center space-y-6">
        <div className="w-[2px] h-[158px] bg-white"></div>
        <div className="flex flex-col space-y-4">
          <a href="https://www.twitter.com" className="text-white hover:text-amber-500 transition-colors">
            <FaFacebookF />
          </a>
          <a href="https://www.twitter.com" className="text-amber-500 hover:text-white transition-colors">
            <FaTwitter />
          </a>
          <a href="https://www.pinterest.com" className="text-white hover:text-amber-500 transition-colors">
            <FaPinterestP />
          </a>
        </div>
        <div className="w-[2px] h-[147px] bg-white"></div>
      </div>
    </div>
  )
}
