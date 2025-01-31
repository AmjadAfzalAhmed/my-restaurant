
import Image from "next/image";
import fastFood from '/public/images/fastFood.png'
import watch from '/public/images/Watch.png'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-stone-950 text-white">
      <div className="container mx-auto px-4 py-16 lg:py-32">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10 lg:mb-16">
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              <span className="text-amber-500">St</span>ill You Need Our Support ?
            </h2>
            <p className="text-base">
              Dont wait make a smart & logical quote here. Its pretty easy.
            </p>
          </div>
          <form className="w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row gap-4 bg-amber-500 p-2 rounded-md">
              <input
                type="email"
                id="emailSubscribe"
                className="bg-transparent text-white placeholder-white placeholder-opacity-60 flex-grow px-4 py-2 focus:outline-none"
                placeholder="Enter Your Email"
                required
                aria-label="Email subscription input"
              />
              <button
                type="submit"
                className="px-6 py-3 text-amber-500 bg-white rounded-md hover:bg-amber-50 focus:ring-2 focus:ring-amber-600 focus:outline-none transition duration-300"
                aria-label="Subscribe to newsletter"
              >
                Subscribe Now
              </button>
            </div>
          </form>
        </div>

        <div className="border-t border-amber-500 my-10"></div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">About Us.</h3>
            <p className="text-base mb-6">
              Corporate clients and leisure travelers have been relying on Groundlink
              for dependable safe, and professional chauffeured car service in major
              cities across World.
            </p>
            <div className="flex items-start space-x-4">
              <Image
                src={watch}
                alt="Opening hours icon"
                width={77}
                height={71}
                className="object-contain"
              />
              <div>
                <h4 className="text-lg font-semibold">Opening Hours</h4>
                <p className="text-sm mt-2">Mon - Sat(8.00 - 6.00)</p>
                <p className="text-sm">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <nav aria-label="Useful links">
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <ul className="space-y-4">
              {['About', 'News', 'Partners', 'Team', 'Menu', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-amber-500 focus:text-amber-500 focus:outline-none transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Help Section */}
          <nav aria-label="Help section">
            <h3 className="text-xl font-bold mb-6">Help?</h3>
            <ul className="space-y-4">
              {['FAQ', 'Term & Condition', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-amber-500 focus:text-amber-500 focus:outline-none transition duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Recent Post Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">Recent Post</h3>
            {[
              { title: "Is fastfood good for your body?", date: "February 28, 2022" },
              { title: "Change your food habit with organic food", date: "February 28, 2022" },
              { title: "Do you like fastfood for your life?", date: "February 28, 2022" }
            ].map((post, index) => (
              <article key={index} className="flex space-x-4 mb-4">
                <Image
                  src={fastFood}
                  alt={`${post.title} thumbnail`}
                  width={80}
                  height={80}
                  className="object-cover rounded-md hover:scale-75 transition-all"
                />
                <div>
                  <h4 className="text-base leading-tight mb-2">{post.title}</h4>
                  <time className="text-sm opacity-50">{post.date}</time>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-neutral-600 py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm mb-4 sm:mb-0">
            Copyright © 2022 by Ayeman. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: FaFacebook, label: "Facebook", url:"https://www.facebook.com"},
              { icon: FaTwitter, label: "Twitter", url:"https://www.twitter.com" },
              { icon: FaInstagram, label: "Instagram" ,url:"https://www.instagram.com" },
              { icon: FaYoutube, label: "YouTube", url:"https://www.youtube.com" },
              { icon: FaLinkedin, label: "LinkedIn", url:"https://www.linkedin.com" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.url}
                className="bg-white text-stone-900 p-2 rounded-sm hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-600 transition duration-300"
                aria-label={`Visit our ${social.label} page`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
