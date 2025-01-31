import Image from 'next/image'
import { CiPlay1 } from 'react-icons/ci'
import one from '/public/images/one.png'
import two from '/public/images/two.png'
import three from '/public/images/three.png'

export default function AboutUs() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <Image
              src={one}
              alt="Featured food presentation"
              className="col-span-1 row-span-2 w-full h-full object-cover rounded-md"
            />
            <div className="col-span-1 space-y-4">
              <Image
                src={two}
                alt="Culinary preparation showcase"
                className="w-full h-auto object-cover rounded-md"
              />
              <Image
                src={three}
                alt="Dining experience highlight"
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-amber-500">
              <span className="text-lg">About us</span>
              <div className="w-8 h-px bg-amber-500"></div>
            </div>
            <h2 className="mt-2 text-4xl lg:text-5xl font-bold leading-tight text-zinc-800">
              Food is an important part of a balanced Diet
            </h2>
            <p className="mt-6 text-base text-neutral-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="px-8 py-3 text-lg font-bold text-white bg-amber-500 rounded-md hover:bg-amber-600 transition-colors">
                Show more
              </button>
              <button className="flex items-center gap-2 text-base text-zinc-800 hover:text-amber-500 transition-colors">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-500">
                  <CiPlay1 className="w-6 h-6 text-white" />
                </div>
                <span>Watch video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
