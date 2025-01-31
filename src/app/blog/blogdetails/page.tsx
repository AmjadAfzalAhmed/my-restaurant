import Image from "next/image";
import bgPic from "/public/images/menutop.png";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { PiArrowBendDoubleUpLeft, PiUserCirclePlusLight } from "react-icons/pi";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter
} from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { GoCommentDiscussion } from "react-icons/go";
import Footer from "@/components/Footer";

function blogDetails() {
  return (
    <div className="w-full h-[2811px]">
      {/* Header */}
      <div className="flex flex-col">
        <div className="flex relative flex-col items-center pb-28 w-full min-h-[410px] max-md:pb-24 max-md:max-w-full">
          <Image src={bgPic} className="object-cover absolute inset-0 size-full" alt="About section background" />

          <Navbar />

          <h1 className="relative mt-28 text-5xl font-bold leading-none text-white max-md:mt-10 max-md:text-4xl">Blog Details</h1>
          <nav className="flex relative gap-1 mt-5 mb-0 max-w-full text-xl leading-snug whitespace-nowrap w-[137px] max-md:mb-2.5" aria-label="Breadcrumb">
            <Link href="/" className="grow text-white hover:text-amber-500">Home</Link>
            <ChevronRight className="object-contain shrink-0 my-auto w-4 aspect-square text-white" />
            <Link href='/blog' className="text-amber-500" aria-current="page">Blog</Link>
          </nav>
        </div>
      </div>
      {/* Header ends here */}

      <div className='sm:flex mt-6 gap-12'>
        <div className="container mx-auto px-4 py-8">
          {/* Section 1 */}
          <div className="mb-12">
            <div className="relative aspect-video mb-6">
              <Image
                src="/images/blogPic1.png"
                layout="fill"
                objectFit="cover"
                alt="Featured blog post background image"
              />
              <div className="absolute top-6 left-6 bg-amber-500 text-white p-3 rounded-md">
                <p className="text-sm">14</p>
                <p className="text-sm">Feb</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-neutral-600 mb-4">
              <Image src="/images/calendar.png" width={24} height={24} alt="Calendar icon" />
              <p className="text-gray-500 text-sm">Feb 14, 2022 /</p>
              <GoCommentDiscussion className='text-amber-500 text-lg' />
              <p className='text-gray-500 text-sm'>3 /</p>
              <PiUserCirclePlusLight className='text-amber-500 text-lg' />
              <p className='text-gray-500 text-sm'>Admin</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-800">
              10 Reasons To Do A Digital Detox Challenge
            </h2>
            <div className="space-y-4 text-neutral-600">
              <p>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat
              </p>
              <p>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                erat
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-amber-500 text-white p-6 mb-12">
            <div className="relative">
              <Image
                src="/images/quotes.png"
                width={48}
                height={48}
                alt="quotes"
                className="absolute -top-8 left-0 filter brightness-0 invert"
              />
              <p className="text-xl md:text-2xl font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip.
              </p>
            </div>
          </div>

          <div className="mb-12 text-neutral-600">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              At vero eos et accusam et justo duo dolores et ea.
            </p>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <div className="md:flex md:gap-8">
              <div className="md:w-1/2 space-y-4 mb-6 md:mb-0">
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                  erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                  et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                  accusam et justo duo dolores et ea rebum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                  erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                  et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                  consetetur sadipscing
                </p>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="/images/blogPic2.png"
                  width={424}
                  height={366}
                  alt="Blog picture 2"
                  className="w-full sm:h-[360px]"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-12 text-neutral-600">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
              rebum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
              amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
              rebum.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between border border-slate-300 p-4 mb-12">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <p className="font-bold">Tags:</p>
              <p className="text-slate-500">Restaurant, Dinner, Pizza, Yummy</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="font-bold">Share:</p>
              <div className="flex items-center text-slate-500 gap-2">
                <FaFacebookF className="hover:text-amber-500 transition-all cursor-pointer" />
                <FaTwitter className="hover:text-amber-500 transition-all cursor-pointer" />
                <FaInstagram className="hover:text-amber-500 transition-all cursor-pointer" />
                <FaPinterest className="hover:text-amber-500 transition-all cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Comments */}
          <div className="mb-12">
            <h2 className="font-bold text-2xl mb-6">Comments - 03</h2>
            <div className="space-y-8">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className={`flex gap-4 ${index === 1 ? 'ml-12' : ''}`}>
                  <Image src={`/images/coms${index + 1}.png`} width={72} height={65} alt="Comment avatar" className="self-start" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <p className="font-semibold text-xl">Md Sojib Khan</p>
                      <PiArrowBendDoubleUpLeft />
                      <p>Reply</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Image src="/images/Calendar.png" width={24} height={24} alt="calendar" />
                      <span className='text-gray-500 text-sm'>June 22, 2022</span>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc orci
                      tellus, fermentum nec imperdiet sed, pulvinar et sem, Fusce
                      hendrerit faucibus sollicitudin.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Post a Comment */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Post a Comment</h2>
            <hr className="mb-6" />
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <Input placeholder="Name*" className="w-full md:w-1/2 rounded-none" />
                <Input placeholder="Email*" className="w-full md:w-1/2 rounded-none" />
              </div>
              <Textarea placeholder="Write a comment" className="w-full rounded-none" rows={6} />
              <button className="bg-amber-500 px-6 py-3 text-white font-semibold text-center">
                Post a comment
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className='sm:w-[600px]'>
        <Sidebar />
        </div>
      </div>

      {/* Footer */}
      <div className='sm:w-full sm:absolute sm:top-[3500px]'>
        <Footer />

      </div>

    </div>
  );
}

export default blogDetails;