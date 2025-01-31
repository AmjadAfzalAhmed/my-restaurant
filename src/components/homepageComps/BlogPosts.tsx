import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import img1 from '/public/images/img1.png';
import img2 from '/public/images/img2.png';
import img3 from '/public/images/img3.png';
import icon from '/public/images/Icon.png';


interface BlogCardProps {
  image: StaticImageData; 
  date: string; 
  title: string; 
}

export default function BlogPosts() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl text-amber-500 text-center mb-2">Blog Post</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-10">
          <span className="text-amber-500">La</span>test News & Blog
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard
            image={img1}
            date="10 February 2022"
            title="Pellentesque Non Efficitur Mi Aliquam Convallis Mi"
          />
          <BlogCard
            image={img2}
            date="10 February 2022"
            title="Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A"
          />
          <BlogCard
            image={img3}
            date="10 February 2022"
            title="Curabitur rutrum velit ac congue malesuada"
          />
        </div>
      </div>
    </section>
  );
}

// BlogCard component with props typing
function BlogCard({ image, date, title }: BlogCardProps) {
  return (
    <article className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
      <Image src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <p className="text-amber-500 mb-2">{date}</p>
        <h4 className="text-xl font-bold mb-4">{title}</h4>
        <div className="flex justify-between items-center">
          <Link href="/blog" className="text-amber-500 hover:underline">
            Learn More
          </Link>
          <Image src={icon} alt="" className="w-16 h-4" />
        </div>
      </div>
    </article>
  );
}