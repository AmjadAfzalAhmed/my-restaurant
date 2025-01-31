import Image from 'next/image'
import { CiPlay1 } from "react-icons/ci"
import bgpicture from '/public/images/homeSec8.png'

export default function Process() {
  return (
    <section className="relative py-20">
      <Image
        src={bgpicture}
        alt="Restaurant food preparation background"
        className="object-cover absolute inset-0 w-full h-full"
      />
      <div className="relative z-10 container mx-auto px-4 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0 sm:ml-[40%] sm:flex-row">
          <h2 className="text-2xl md:text-3xl text-amber-500 mb-2">Restaurant Active Process</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-amber-500">We</span> Document Every Food
            <br />
            Bean Process until it is served
          </h3>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
            augue urna,
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 border border-amber-500 text-white rounded-full hover:bg-amber-500 transition-colors">
              Read More
            </button>
            <button className="flex items-center gap-2 text-white hover:text-amber-500 transition-colors">
              <div className="bg-amber-500 rounded-full p-3">
                <CiPlay1 className="w-6 h-6" />
              </div>
              <span>Play Video</span>
            </button>
          </div>
        </div>
        
      </div>
    </section>
  )
}
