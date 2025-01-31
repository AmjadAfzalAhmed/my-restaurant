import Image, { StaticImageData } from 'next/image'
import bgPic from '/public/images/menutop.png'
import chef from '/public/images/chef.png'
import soft from '/public/images/soft.png'
import spoon from '/public/images/spoons.png'
import pizza from '/public/images/pizza.png'

interface StatItemProps {
  image: StaticImageData;
  number: string;
  text: string;
}

export default function Statistics() {
  return (
    <section className="relative py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={bgPic}
          alt="Restaurant interior background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-35"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <StatItem image={chef} number="420" text="Professional Chefs" />
            <StatItem image={soft} number="320" text="Items of Food" />
            <StatItem image={spoon} number="30+" text="Years of Experience" />
            <StatItem image={pizza} number="220+" text="Happy Customers" />
          </div>
        </div>
      </div>
    </section>
  )
}

// React Functional Component to use images

function StatItem({ image, number, text }:StatItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 relative">
        <Image
          src={image}
          alt={`${text} icon`}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="text-3xl sm:text-4xl font-bold text-white mb-2">{number}</p>
      <p className="text-lg sm:text-xl text-white">{text}</p>
    </div>
  )
}
