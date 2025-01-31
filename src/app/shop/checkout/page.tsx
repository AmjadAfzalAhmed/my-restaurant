import Image from 'next/image'
import tikka from '/public/images/tikka.png'
import { FaArrowRight } from 'react-icons/fa'
import {  ChevronLeft, ChevronRight  } from 'lucide-react'
import bgPic from '/public/images/menutop.png'
import { Input } from '@/components/ui/input'
import {
  Select,
  // SelectContent,
  // SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


const CheckOut = () => {
  return (
    <main className='w-full h-[2147px]' >
      {/* Header */}
      <div className="flex flex-col">
        <div className="flex relative flex-col items-center pb-28 w-full min-h-[410px] max-md:pb-24 max-md:max-w-full">
          <Image src={bgPic} className="object-cover absolute inset-0 size-full" alt="About section background" />

          <Navbar />

          <h1 className="relative mt-28 text-5xl font-bold leading-none text-white max-md:mt-10 max-md:text-4xl">Check-Out</h1>
          <nav className="flex relative gap-1 mt-5 mb-0 max-w-full text-xl leading-snug whitespace-nowrap w-[137px] max-md:mb-2.5" aria-label="Breadcrumb">
            <Link href="/" className="grow text-white hover:text-amber-500">Home</Link>
            <ChevronRight className="object-contain shrink-0 my-auto w-4 aspect-square text-white" />
            <Link href='/shop' className="text-amber-500" aria-current="page">Shop</Link>
          </nav>
        </div>
      </div>

      {/* Mid Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Shipping Form */}
          <div className="w-full lg:w-2/3">
            <form className="space-y-6">
              <h2 className="text-2xl font-bold text-zinc-800">Shipping Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-zinc-800">First name</label>
                  <Input type="text" id="firstName" name="firstName" className="mt-1 w-full" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-zinc-800">Last name</label>
                  <Input type="text" id="lastName" name="lastName" className="mt-1 w-full" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-800">Email address</label>
                  <Input type="email" id="email" name="email" className="mt-1 w-full" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-800">Phone number</label>
                  <Input type="tel" id="phone" name="phone" className="mt-1 w-full" required />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-zinc-800">Company</label>
                  <Input type="text" id="company" name="company" className="mt-1 w-full" />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-zinc-800">Country</label>
                  <Select>
                    <SelectTrigger id="country" className="mt-1 w-full">
                      <SelectValue placeholder="Choose country" />
                    </SelectTrigger>
                  </Select>
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-zinc-800">City</label>
                  <Select>
                    <SelectTrigger id="city" className="mt-1 w-full">
                      <SelectValue placeholder="Choose city" />
                    </SelectTrigger>
                  </Select>
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-zinc-800">Zip code</label>
                  <Input type="text" id="zipCode" name="zipCode" className="mt-1 w-full" required />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address1" className="block text-sm font-medium text-zinc-800">Address 1</label>
                  <Input type="text" id="address1" name="address1" className="mt-1 w-full" required />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address2" className="block text-sm font-medium text-zinc-800">Address 2</label>
                  <Input type="text" id="address2" name="address2" className="mt-1 w-full" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-zinc-800 mt-8">Billing Address</h2>
              <div className="flex items-center">
                <Input type="checkbox" id="sameAsShipping" name="sameAsShipping" className="w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500" />
                <label htmlFor="sameAsShipping" className="ml-2 text-sm text-neutral-600">Same as shipping address</label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href='/shop/shoppingcart' className="flex-1 flex justify-center items-center px-6 py-3 border border-neutral-200 text-neutral-600 rounded-md hover:bg-gray-50 transition-colors">
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Back to cart
                </Link>
                <button type="submit" className="flex-1 flex justify-center items-center px-6 py-3 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors">
                  Proceed to shipping
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
            <div className="border border-neutral-200 rounded-md p-6 space-y-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex gap-4 pb-4 border-b border-neutral-200 last:border-b-0 last:pb-0">
                  <Image
                    src={tikka}
                    alt="Chicken Tikka Kabab"
                    width={83}
                    height={88}
                    className="object-cover w-20 h-20 rounded-md hover:scale-95 transition-all"
                  />
                  <div>
                    <h3 className="font-bold text-zinc-800">Chicken Tikka Kabab</h3>
                    <p className="text-sm text-neutral-600">150 gm net</p>
                    <p className="text-sm text-neutral-600">50$</p>
                  </div>
                </div>
              ))}

              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt>Sub-total</dt>
                  <dd>130$</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Shipping</dt>
                  <dd>Free</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Discount</dt>
                  <dd>25%</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Tax</dt>
                  <dd>54.76$</dd>
                </div>
              </dl>

              <div className="flex justify-between text-lg font-bold text-zinc-800 pt-4 border-t border-neutral-200">
                <span>Total</span>
                <span>432.65$</span>
              </div>

              <button type="button" className="w-full flex justify-center items-center px-6 py-3 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors">
                Place an order
                <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='sm:w-full sm:absolute sm:top-[1472px]'>
      <Footer />
      </div>

    </main>
  )
}

export default CheckOut