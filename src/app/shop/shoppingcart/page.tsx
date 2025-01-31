import { ChevronRight, Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import bgPic from '/public/images/menutop.png'
import { Input } from '@/components/ui/input'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Cart from '@/components/Cart'



export function page() {
    return (
        <div className='w-full h-[2646px]'>
            {/* Header */}
            <div className="flex flex-col">
                <div className="flex relative flex-col items-center pb-28 w-full min-h-[410px] max-md:pb-24 max-md:max-w-full">
                    <Image src={bgPic} className="object-cover absolute inset-0 size-full" alt="About section background" />

                    <Navbar />

                    <h1 className="relative mt-28 text-5xl font-bold leading-none text-white max-md:mt-10 max-md:text-4xl">Shopping Cart</h1>
                    <nav className="flex relative gap-1 mt-5 mb-0 max-w-full text-xl leading-snug whitespace-nowrap w-[137px] max-md:mb-2.5" aria-label="Breadcrumb">
                        <Link href="/" className="grow text-white hover:text-amber-500">Home</Link>
                        <ChevronRight className="object-contain shrink-0 my-auto w-4 aspect-square text-white" />
                        <Link href='/shop' className="text-amber-500" aria-current="page">Shop</Link>
                    </nav>
                </div>
            </div>
            {/* Header ends here */}

            {/* Mid Section */}

            <div className="container flex flex-col gap-8 px-4 mt-8">
                  <Cart /> 

                {/* Bill Section */}
            
            <div className='flex flex-col lg:flex-row gap-6'>
                <div className="couponCode w-full lg:w-1/2">
                    <p className='font-bold text-xl mb-4'>Coupon Code</p>
                    <div className='border border-slate-200 rounded p-4 lg:p-6'>
                        <p className='text-slate-400 text-sm lg:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non</p>
                        <div className="relative mt-4">
                            <Input placeholder='Enter Code Here' className='w-full h-12 rounded-md pr-16' />
                            <div className="absolute inset-y-0 right-0 flex items-center justify-center w-12 h-12 bg-amber-500 rounded-r-md cursor-pointer">
                                <Search className="text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="totalBill w-full lg:w-1/2 mb-10">
                    <p className='font-bold text-xl mb-4'>Total Bill</p>
                    <div className='border border-slate-200 rounded p-4 lg:p-6 flex flex-col'>
                        <div className='flex justify-between'>
                            <p className='font-bold'>Cart Subtotal</p>
                            <p className='font-bold'>$120.00</p>
                        </div>
                        <div className='flex justify-between mt-3'>
                            <p className='text-slate-500'>Shipping Charge</p>
                            <p className='text-slate-500'>$00.00</p>
                        </div>
                        <hr className='my-4' />
                        <div className='flex justify-between'>
                            <p className='font-bold'>Total Amount</p>
                            <p className='font-bold'>$205.00</p>
                        </div>
                    </div>
                    <Link href="/shop/shoppingcart/check-out" className='block w-full'>
                        <button className='w-full h-12 bg-amber-500 text-white mt-4 rounded'>
                            Proceed to checkout
                        </button>
                    </Link>
                </div>
            </div>
            </div>

            {/* Footer */}
            <div className='sm:w-full sm:absolute sm:top-[1572px]'>
               <Footer />
            </div>

        </div>
    )
}
