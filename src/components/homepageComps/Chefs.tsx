import Image, {StaticImageData }from 'next/image'
import Link from 'next/link'
import card1 from '/public/images/card1.png'
import card2 from '/public/images/card2.png'
import card3 from '/public/images/card3.png'
import card4 from '/public/images/card4.png'

interface ChefCardProps {
  image: StaticImageData; 
  name:string;
   
}

export default function Chefs() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl text-amber-500 text-center mb-2">Chefs</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-10">
          <span className="text-amber-500">Me</span>et Our Chef
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <ChefCard image={card1} name="John Doe"  />
          <ChefCard image={card2} name="D.Scoriesh"  />
          <ChefCard image={card3} name="Jane Smith"  />
          <ChefCard image={card4} name="Mike Johnson"  />
        </div>
        <div className="text-center">
          <Link href="/chefs" className="inline-block px-8 py-3 border border-amber-500 text-white rounded-full hover:bg-amber-500 transition-colors">
            See More
          </Link>
        </div>
      </div>
    </section>
  )
}

function ChefCard({ image, name}:ChefCardProps) {
  return (
    <div className="relative group">
      <Image src={image} alt={name} className="w-full h-auto rounded-lg hover:scale-y-110 transition" />
      
    </div>
  )
}
