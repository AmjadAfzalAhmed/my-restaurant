import Image from 'next/image'
import round from '/public/images/homeSec7.png'
import numb from '/public/images/Quotes.png'
import stars from '/public/images/star.png'

export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl text-amber-500 mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-3xl">
            What our client are saying
          </h3>
        </div>
        
        <div className="flex justify-center pt-12">
          <div className="w-full max-w-3xl">
            <div className="relative bg-white text-black p-8 md:p-10 rounded-lg shadow-xl">
              <Image
                src={round}
                alt="Profile picture of testimonial author"
                width={128}
                height={128}
                className="absolute -top-16 left-1/2 transform -translate-x-1/2 rounded-full border-4 border-white"
              />
              <Image
                src={numb}
                alt="Quotation mark icon"
                width={48}
                height={48}
                className="mx-auto my-6"
              />
              <blockquote className="text-center mb-6 min-h-[150px] flex items-center justify-center">
                <p className="text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                  pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
                  augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
                  sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
                  consequat.
                </p>
              </blockquote>
              <Image
                src={stars}
                alt="Rating stars"
                width={128}
                height={24}
                className="mx-auto mb-4"
              />
              <div className="text-center">
                <p className="text-xl font-bold">Alamin Hasan</p>
                <p className="text-gray-600">Food Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
