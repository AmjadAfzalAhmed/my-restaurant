import Image from 'next/image'
import bgPic from '/public/images/menutop.png'
import image20 from '/public/images/img20.png'
import image21 from '/public/images/img21.png'
import image22 from '/public/images/img22.png'
import image23 from '/public/images/img23.png'
import image24 from '/public/images/img24.png'
import stars from '/public/images/Stars.png'
import card1 from '/public/images/imgs1.png'
import card2 from '/public/images/chocolate.png'
import card3 from '/public/images/imgs3.png'
import card4 from '/public/images/imgs1.png'
import icon from '/public/images/muffIco.png'
import arrows from '/public/images/arrowIco.png'
import { GoBriefcase } from "react-icons/go";
import { BiGitCompare } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight, FaFacebook, FaMinus, FaPlus, FaTwitter, FaVimeo, FaYoutubeSquare } from "react-icons/fa";
import { CiHeart } from 'react-icons/ci'
import { AiFillInstagram } from "react-icons/ai";
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

function ShopDetails() {
    return (
        <div className='w-full h-[3177px]'>
            {/* Header */}
            <div className="flex flex-col">
                <div className="flex relative flex-col items-center pb-28 w-full min-h-[410px] max-md:pb-24 max-md:max-w-full">
                    <Image src={bgPic} className="object-cover absolute inset-0 size-full" alt="About section background" />

                    <Navbar />

                    <h1 className="relative mt-28 text-5xl font-bold leading-none text-white max-md:mt-10 max-md:text-4xl">Shop Details</h1>
                    <nav className="flex relative gap-1 mt-5 mb-0 max-w-full text-xl leading-snug whitespace-nowrap w-[137px] max-md:mb-2.5" aria-label="Breadcrumb">
                        <Link href="/" className="grow text-white hover:text-amber-500">Home</Link>
                        <ChevronRight className="object-contain shrink-0 my-auto w-4 aspect-square text-white" />
                        <Link href='/shop' className="text-amber-500" aria-current="page">Shop</Link>
                    </nav>
                </div>
            </div>
            {/* Header ends here */}

            {/* Mid Section */}
            <div className="container mx-auto px-4 py-8">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex flex-row md:flex-col gap-4 order-2 md:order-1">
                            {[image20, image21, image22, image23].map((img, index) => (
                                <Image
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail view ${index + 1} of chicken chup dish`}
                                    className="object-cover w-20 h-20 rounded-md"
                                />
                            ))}
                        </div>
                        <div className="order-1 md:order-2">
                            <Image
                                src={image24}
                                alt="Main large view of Yummy Chicken Chup dish"
                                className="object-cover w-full rounded-md"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                            <span className="px-4 py-1 text-sm text-white bg-amber-500 rounded-md">In stock</span>
                            <div className="flex gap-4 text-lg text-zinc-500">
                                <button className="flex items-center gap-1" aria-label="Previous product">
                                    <FaArrowLeft className="w-6 h-6" />
                                    <span>Prev</span>
                                </button>
                                <button className="flex items-center gap-1" aria-label="Next product">
                                    <FaArrowRight className="w-6 h-6" />
                                    <span>Next</span>
                                </button>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-800 mb-4">Yummy Chicken Chup</h1>

                        <p className="text-lg text-neutral-600 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
                            pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna,
                            vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
                            mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                        </p>

                        <hr className="mb-6" />

                        <div className="flex flex-wrap items-end gap-4 mb-6">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-zinc-800">54.00$</span>
                                <div className="flex items-center gap-4 mt-2">
                                    <Image src={stars} alt="Product rating stars" className="h-5" />
                                    <span className="text-zinc-500">5.0 Rating</span>
                                    <span className="text-zinc-500">22 Review</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-lg text-zinc-800 mb-4">Dictum/cursus/Risus</p>

                        <form className="flex flex-wrap gap-4 mb-6">
                            <div className="flex items-center border border-zinc-500">
                                <button type="button" className="p-2" aria-label="Decrease quantity">
                                    <FaMinus className="w-5 h-5" />
                                </button>
                                <input type="number" id="quantity" value="1" min="1" className="w-12 text-center" aria-label="Product quantity" />
                                <button type="button" className="p-2" aria-label="Increase quantity">
                                    <FaPlus className="w-5 h-5" />
                                </button>
                            </div>
                            <button type="submit" className="flex items-center gap-2 px-5 py-3 text-lg text-white bg-amber-500">
                                <GoBriefcase className="w-5 h-5" />
                                <span>Add to cart</span>
                            </button>
                        </form>

                        <hr className="mb-6" />

                        <div className="flex flex-wrap gap-4 text-lg text-neutral-600 mb-4">
                            <button className="flex items-center gap-2">
                                <CiHeart className="w-5 h-5" />
                                <span>Add to Wishlist</span>
                            </button>
                            <button className="flex items-center gap-2">
                                <BiGitCompare className="w-5 h-5" />
                                <span>Compare</span>
                            </button>
                        </div>

                        <div className="flex gap-2 text-lg mb-2">
                            <span className="text-zinc-800">Category:</span>
                            <span className="text-neutral-600">Pizza</span>
                        </div>

                        <div className="flex gap-2 text-lg mb-4">
                            <span className="text-zinc-800">Tag:</span>
                            <span className="text-neutral-600">Our Shop</span>
                        </div>

                        <div className="flex items-center gap-4 text-lg text-zinc-800">
                            <span>Share :</span>
                            <FaYoutubeSquare className="w-6 h-6" />
                            <FaFacebook className="w-6 h-6" />
                            <FaTwitter className="w-6 h-6" />
                            <FaVimeo className="w-6 h-6" />
                            <AiFillInstagram className="w-6 h-6" />
                        </div>
                    </div>
                </section>

                <section className="mt-12">
                    <div className="flex items-center gap-6 mb-8">
                        <button className="px-6 py-2 bg-amber-500 text-white font-medium text-2xl">Description</button>
                        <button className="px-6 py-2 text-2xl">Reviews (24)</button>
                    </div>
                    <div className="space-y-6">
                        <p>Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi
                            sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor
                            malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae.
                            Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>
                        <p>Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec.
                            Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam
                            accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu
                            vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.</p>
                    </div>
                    <div className="mt-8">
                        <h3 className="font-medium mb-3">Key Benefits</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
                            <li>Vestibulum sed massa vel ipsum imperdiet malesuada id nisl.</li>
                            <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
                            <li>Mauris eget diam magna, in blandit turpis.</li>
                        </ul>
                    </div>
                </section>

                <section className="mt-12">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold">Similar Products</h2>
                        <Image src={arrows} alt="Navigation arrows" width={88} height={39} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { image: card1, name: 'Fresh Lime', price: '$38.00', oldPrice: '$45.00' },
                            { image: card2, name: 'Chocolate Muffin', price: '$38.00', icon: icon },
                            { image: card3, name: 'Burger', price: '$21.00' },
                            { image: card4, name: 'Fresh Lime', price: '$38.00', oldPrice: '$45.00' },
                        ].map((product, index) => (
                            <div key={index} className="relative">
                                <Image src={product.image} alt={product.name} className="w-full h-auto hover:grayscale duration-200 transition-all" />
                                <h3 className="text-xl font-bold mt-3">{product.name}</h3>
                                <div className="flex gap-2 mt-3">
                                    <span className="text-amber-500">{product.price}</span>
                                    {product.oldPrice && <span className="text-slate-400 line-through">{product.oldPrice}</span>}
                                </div>
                                {product.icon && (
                                    <Image src={product.icon} alt="Product icon" className="absolute top-4 right-20" />
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Footer */}
            <div className='sm:absolute sm:w-full sm:top-[2403px]'>
               <Footer />
            </div>

        </div>
    )
}

export default ShopDetails