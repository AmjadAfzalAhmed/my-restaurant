
import Footer from '@/components/Footer'
import About from '@/components/homepageComps/About'
import BlogPosts from '@/components/homepageComps/BlogPosts'
import Chefs from '@/components/homepageComps/Chefs'
import FoodCategory from '@/components/homepageComps/FoodCategory'
import Hero from '@/components/homepageComps/Hero'
import Menu from '@/components/homepageComps/Menu'
import Process from '@/components/homepageComps/Process'
import Statistics from '@/components/homepageComps/Statistics'
import Testimonials from '@/components/homepageComps/Testimonials'
import WhyChooseUs from '@/components/homepageComps/WhyChooseUs'

export default function Home() {
  return (
    <main className="bg-[#0d0d0d] text-white">
      <Hero />
      <About />
      <FoodCategory />
      <WhyChooseUs />
      <Statistics />
      <Menu />
      <Chefs />
      <Testimonials />
      <Process />
      <BlogPosts />
      <Footer />
    </main>
  )
}
