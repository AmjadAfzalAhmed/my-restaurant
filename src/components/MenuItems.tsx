import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { BsCupHot } from 'react-icons/bs';
import starterMenu from '/public/images/starterMenu.png';
import courseMenu from '/public/images/courseMenu.png';
import dessert from '/public/images/desert.png';
import drinks from '/public/images/drinks.png';
import bgPic from '/public/images/chooseBg.png';
import chef from '/public/images/chef.png';
import soft from '/public/images/soft.png';
import spoon from '/public/images/spoons.png';
import pizza from '/public/images/pizza.png';
import restaurant from '/public/images/restaurant.png';
import baker from '/public/images/baker.png';
import fork from '/public/images/fork.png';
import wolf from '/public/images/wolf.png';
import bistro from '/public/images/bistro.png';
import bakery from '/public/images/bakery.png';

interface MenuItemProps {
  title: string;
  description: string;
  price: string;
  calories: number;
}

interface MenuSectionProps {
  title: string;
  items: MenuItemProps[];
  image: string | StaticImageData;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

const MenuItem = ({ title, description, price, calories }: MenuItemProps) => (
  <div className="mb-6">
    <div className="flex justify-between items-start">
      <h3 className="text-xl font-bold text-zinc-800">{title}</h3>
      <span className="text-xl font-bold text-amber-500">{price}</span>
    </div>
    <p className="mt-2 text-neutral-600">{description}</p>
    <span className="text-sm text-zinc-500">{calories} CAL</span>
    <div className="mt-4 border-b border-dashed border-neutral-200"></div>
  </div>
);

const MenuSection = ({ title, items, image, imageAlt, imagePosition }: MenuSectionProps) => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
        <div className="w-full md:w-2/3">
          <BsCupHot className="text-amber-500 w-6 h-6 mb-2" />
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-6">{title}</h2>
          {items.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
        <div className="w-full md:w-1/3">
          <Image
            src={image}
            alt={imageAlt}
            width={400}
            height={600}
            className="object-cover w-full h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>
);

export default function RestaurantPage() {
  const starterMenuItems = [
    {
      title: "Alder Grilled Chinook Salmon",
      description: "Toasted French bread topped with romano, cheddar",
      price: "32$",
      calories: 560
    },
    {
      title: "Berries and creme tart",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      price: "43$",
      calories: 700
    },
    {
      title: "Tormentoso Bush Pizza Pintoage",
      description: "Ground cumin, avocados, peeled and cubed",
      price: "14$",
      calories: 1000
    },
    {
      title: "Spicy Vegan Potato Curry",
      description: "Spreadable cream cheese, crumbled blue cheese",
      price: "35$",
      calories: 560
    }
  ];

  const mainCourseItems = [
    {
      title: "Optic Big Breakfast Combo Menu",
      description: "Toasted French bread topped with romano, cheddar",
      price: "32$",
      calories: 560
    },
    {
      title: "Cashew Chicken With Stir-Fry",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      price: "43$",
      calories: 700
    },
    {
      title: "Vegetables & Green Salad",
      description: "Ground cumin, avocados, peeled and cubed",
      price: "14$",
      calories: 1000
    },
    {
      title: "Spicy Vegan Potato Curry",
      description: "Spreadable cream cheese, crumbled blue cheese",
      price: "35$",
      calories: 560
    }
  ];

  const dessertItems = [
    {
      title: "Fig and lemon cake",
      description: "Toasted French bread topped with romano, cheddar",
      price: "32$",
      calories: 560
    },
    {
      title: "Creamy mascarpone cake",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      price: "43$",
      calories: 700
    },
    {
      title: "Pastry, blueberries, lemon juice",
      description: "Ground cumin, avocados, peeled and cubed",
      price: "14$",
      calories: 1000
    },
    {
      title: "Pain au chocolat",
      description: "Spreadable cream cheese, crumbled blue cheese",
      price: "35$",
      calories: 560
    }
  ];

  const drinkItems = [
    {
      title: "Caffè macchiato",
      description: "Toasted French bread topped with romano, cheddar",
      price: "32$",
      calories: 560
    },
    {
      title: "Aperol Spritz Capacianno",
      description: "Gorgonzola, ricotta, mozzarella, taleggio",
      price: "43$",
      calories: 700
    },
    {
      title: "Caffe Latte Campuri",
      description: "Ground cumin, avocados, peeled and cubed",
      price: "14$",
      calories: 1000
    },
    {
      title: "Tormentoso BushTea Pintoage",
      description: "Spreadable cream cheese, crumbled blue cheese",
      price: "35$",
      calories: 560
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MenuSection
        title="Starter Menu"
        items={starterMenuItems}
        image={starterMenu}
        imageAlt="Starter menu featured dish"
        imagePosition="right"
      />

      <MenuSection
        title="Main Course"
        items={mainCourseItems}
        image={courseMenu}
        imageAlt="Main course featured dish"
        imagePosition="left"
      />

      <section className="relative py-16">
        <Image
          src={bgPic}
          alt="Restaurant background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0 opacity-35"
        />
        <div className="relative z-10 bg-black bg-opacity-60 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
              {[
                { icon: chef, value: '420', label: 'Professional Chefs' },
                { icon: soft, value: '320', label: 'Items of Food' },
                { icon: spoon, value: '30+', label: 'Years of Experience' },
                { icon: pizza, value: '220+', label: 'Happy Customers' },
              ].map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image src={stat.icon} alt={stat.label} width={80} height={80} className="mb-4" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg text-center">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MenuSection
        title="Dessert"
        items={dessertItems}
        image={dessert}
        imageAlt="Dessert menu featured item"
        imagePosition="left"
      />

      <MenuSection
        title="Drinks"
        items={drinkItems}
        image={drinks}
        imageAlt="Featured drink presentation"
        imagePosition="right"
      />

      <section className="py-16 sm:mb-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-2">Partners & Clients</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">We work with the best people</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { src: restaurant, alt: 'Restaurant logo' },
              { src: baker, alt: 'Baker logo' },
              { src: fork, alt: 'Fork logo' },
              { src: wolf, alt: 'Wolf logo' },
              { src: bistro, alt: 'Bistro logo' },
              { src: bakery, alt: 'Bakery logo' },
            ].map((partner, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <Image src={partner.src} alt={partner.alt} width={150} height={100} objectFit="contain" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
