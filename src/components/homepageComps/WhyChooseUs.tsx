import Image from 'next/image'
import featured from '/public/images/featured.png'
import two from '/public/images/two.png'
import fastFood from '/public/images/fastFood.png'
import pic6 from '/public/images/pic6.png'
import pic7 from '/public/images/pic7.png'
import pic5 from '/public/images/pic5.png'
import ham from '/public/images/Hamburger.png'
import cookie from '/public/images/Cookie.png'
import wine from '/public/images/Wine.png'

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 grid grid-cols-3 gap-4 mb-10 lg:mb-0">
          <Image src={featured} alt="Restaurant ambiance" className="col-span-2 rounded-lg" />
          <Image src={two} alt="Featured dish" className="rounded-lg" />
          <Image src={fastFood} alt="Culinary preparation" className="rounded-lg w-60 h-60" />
          <Image src={pic6} alt="Chef's special" className="rounded-lg" />
          <div className="space-y-4">
            <Image src={pic7} alt="Signature appetizer" className="rounded-lg" />
            <Image src={pic5} alt="Dessert specialty" className="rounded-lg" />
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-10">
          <h2 className="text-2xl md:text-3xl text-amber-500 mb-2">Why Choose us</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-amber-500">Ex</span>tra ordinary taste
            <br />
            And Experienced
          </h3>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
            augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
            sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
            consequat.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-amber-500 rounded-lg p-4 text-center">
              <Image src={ham} alt="Fast Food menu icon" className="w-20 h-20 mx-auto" />
              <p className="mt-2">Fast Food</p>
            </div>
            <div className="bg-amber-500 rounded-lg p-4 text-center">
              <Image src={cookie} alt="Lunch menu icon" className="w-20 h-20 mx-auto" />
              <p className="mt-2">Lunch</p>
            </div>
            <div className="bg-amber-500 rounded-lg p-4 text-center">
              <Image src={wine} alt="Dinner menu icon" className="w-20 h-20 mx-auto" />
              <p className="mt-2">Dinner</p>
            </div>
          </div>
          <div className="bg-white text-black p-6 rounded-lg flex items-center">
            <div className="w-2 h-16 bg-amber-500 mr-6"></div>
            <div>
              <p className="text-4xl font-bold text-amber-500">30+</p>
              <p className="text-xl">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
