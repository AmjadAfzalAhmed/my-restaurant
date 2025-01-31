'use client'

import Image from 'next/image'
import bgPic from '/public/images/menutop.png'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import { chefQuery, client} from '@/sanity/lib/client';
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'


type Chefs = {
    _id: number,
    imageUrl:string,
    name:string
  }

function OurChefs() {
    const [chefData, setChefData] = useState([]);

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const data = await client.fetch(chefQuery);
        setChefData(data);
      } catch (error) {
        console.error("Error fetching chefs:", error);
      }
    };

    fetchChefs();
  }, []);
    return (
        <div className='w-full h-[2811px]'>
            {/* Header */}
            <div className="flex flex-col">
                <div className="flex relative flex-col items-center pb-28 w-full min-h-[410px] max-md:pb-24 max-md:max-w-full">
                    <Image src={bgPic} className="object-cover absolute inset-0 size-full" alt="About section background" />

                    <Navbar />

                    <h1 className="relative mt-28 text-5xl font-bold leading-none text-white max-md:mt-10 max-md:text-4xl">Pages</h1>
                    <nav className="flex relative gap-1 mt-5 mb-0 max-w-full text-xl leading-snug whitespace-nowrap w-[137px] max-md:mb-2.5" aria-label="Breadcrumb">
                        <Link href="/" className="grow text-white hover:text-amber-500">Home</Link>
                        <ChevronRight className="object-contain shrink-0 my-auto w-4 aspect-square text-white" />
                        <Link href='/pages/chefs' className="text-amber-500" aria-current="page">Chefs</Link>
                    </nav>
                </div>
            </div>

            {/* Mid Section */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {chefData.map((chef:Chefs) => (
                        <div key={chef._id} className="flex flex-col items-center">
                            <div className="relative w-full aspect-[3/4] mb-4">
                                <Image
                                    src={chef.imageUrl}
                                    alt={`Chef ${chef.name}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="hover:scale-95 duration-200 transition-all"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-zinc-800">{chef.name}</h3>
                            <p className="text-lg text-zinc-600">{chef.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className='sm:w-full sm:absolute sm:top-[2036px]'>
                <Footer />
            </div>

        </div>
    )
}

export default OurChefs