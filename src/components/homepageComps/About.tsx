import Image from 'next/image'
import Link from 'next/link'
import { TiTick } from "react-icons/ti"
import pic2 from '/public/images/pic2.png'
import pic3 from '/public/images/pic3.png'
import pic4 from '/public/images/pic4.png'

export default function About() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <p className='text-amber-500 text-2xl md:text-3xl mb-2'>about us</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We <span className='text-amber-500'>create the best</span> foody product
          </h2>
          <p className='mb-6 text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
            fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
            mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <div className="space-y-2 mb-6">
            <div className="flex items-center">
              <TiTick className='text-amber-500 mr-2' />
              <p>Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            </div>
            <div className="flex items-center">
              <TiTick className='text-amber-500 mr-2' />
              <p>Quisque diam pellentesque bibendum non dui volutpat fringilla</p>
            </div>
            <div className="flex items-center">
              <TiTick className='text-amber-500 mr-2' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <Link href="/about" className='inline-block px-8 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors'>
            Read More
          </Link>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <Image src={pic2} alt='about-pic1' className='col-span-2 rounded-lg' />
          <Image src={pic3} alt='about-pic2' className='rounded-lg' />
          <Image src={pic4} alt='about-pic3' className='rounded-lg' />
        </div>
      </div>
    </section>
  )
}
