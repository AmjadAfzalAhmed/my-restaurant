import Image from 'next/image'
import { BsCupHot } from 'react-icons/bs'
import bg1 from '/public/images/chooseBg.png'
import stud from '/public/images/Student.png'
import person from '/public/images/Person.png'

interface ChooseProps{
  icon:React.ReactNode;
  title:string;
  description:string;
}

export default function WhyChoose() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-zinc-800 mb-4">
          Why Choose us
        </h2>
        <p className="text-base text-center text-neutral-600 max-w-2xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum.
        </p>
        <Image
          src={bg1}
          alt="Restaurant interior showcasing our dining environment"
          className="w-full h-auto object-cover rounded-lg mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Image src={stud} alt="Best Chef" className="w-20 h-20" />}
            title="Best Chef"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat"
          />
          <FeatureCard
            icon={<BsCupHot className="w-20 h-20 text-amber-500" />}
            title="120 Item food"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat"
          />
          <FeatureCard
            icon={<Image src={person} alt="Clean Environment" className="w-20 h-20" />}
            title="Clean Environment"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat"
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ icon, title, description }:ChooseProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {icon}
      <h3 className="mt-6 text-2xl font-bold text-zinc-800">{title}</h3>
      <p className="mt-4 text-base text-neutral-600">{description}</p>
    </div>
  )
}
