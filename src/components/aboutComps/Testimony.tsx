import Image from 'next/image';
import round from '/public/images/homeSec7.png';
import numb from '/public/images/Quotes.png';
import stars from '/public/images/star.png';

export default function Testimony() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl text-amber-500 font-greatVibes mb-2">Testimonials</h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
            What our clients are saying
          </h3>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white shadow-2xl rounded-lg p-6 sm:p-8 md:p-12">
            <Image
              src={round}
              alt="Profile picture of testimonial author"
              className="absolute -top-12 sm:-top-16 left-1/2 transform -translate-x-1/2 w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white"
              width={128}
              height={128}
            />
            <div className="pt-16 text-center">
              <Image
                src={numb}
                alt="Quotation mark icon"
                className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-6"
                width={48}
                height={48}
              />
              <blockquote className="text-base sm:text-lg text-neutral-600 mb-6 sm:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
                augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
                sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
                consequat.
              </blockquote>
              <Image
                src={stars}
                alt="Rating stars"
                className="w-28 sm:w-36 mx-auto mb-4"
                width={144}
                height={24}
              />
              <div className="text-xl sm:text-2xl font-bold text-zinc-800 mb-1">
                Alamin Hasan
              </div>
              <div className="text-sm sm:text-base text-zinc-500">Food Specialist</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}