import Image from 'next/image'
import one from '/public/images/one.png'
import two from '/public/images/two.png'
import three from '/public/images/three.png'
import four from '/public/images/four.png'

export default function FoodCategory() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl text-amber-500 text-center mb-2">Food Category</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-10">
          <span className="text-amber-500">Ch</span>oose Food Item
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative rounded-lg overflow-hidden">
            <Image src={one} alt="Fast Food Dish" className="w-full h-auto cursor-pointer hover:scale-y-110 transition all" />
            <div className="absolute top-4 left-24 bg-white text-amber-500 px-4 py-2 rounded-md font-bold">
              Save 30%
            </div>
            <div className="absolute bottom-4 left-20 bg-amber-500 text-white px-4 py-2 rounded-md">
              Fast Food Dish
            </div>
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image src={two} alt="Featured Food Item 2" className="w-full h-auto cursor-pointer hover:scale-y-110 transition all" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image src={three} alt="Featured Food Item 3" className="w-full h-auto cursor-pointer hover:scale-y-110 transition all" />
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image src={four} alt="Featured Food Item 4" className="w-full h-auto cursor-pointer hover:scale-y-110 transition all" />
          </div>
        </div>
      </div>
    </section>
  )
}
