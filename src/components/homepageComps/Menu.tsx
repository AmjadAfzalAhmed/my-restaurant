import Image, { StaticImageData } from 'next/image'
import pic8 from '/public/images/bg.png'
import pic9 from '/public/images/front.png'
import lettuce from '/public/images/lettuce.png'
import fresh from '/public/images/fresh.png'
import mild from '/public/images/mild.png'
import bread from '/public/images/bread.png'
import glow from '/public/images/glow.png'
import italian from '/public/images/italian.png'
import slice from '/public/images/slice.png'
import mushroom from '/public/images/mushroom.png'

interface MenuItemProps {
  image: StaticImageData;
  name: string;
  price: string;
}

export default function Menu() {
  return (
    <section className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl text-amber-500 text-center mb-2">Choose & pick</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-10">
          <span className="text-amber-500">Fr</span>om Our Menu
        </h3>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink', 'Snack', 'Soups'].map((item, index) => (
            <button 
              key={item} 
              className={`px-4 py-2 rounded-full ${index === 0 ? 'bg-amber-500 text-white' : 'text-white hover:bg-amber-500 hover:text-white transition-colors'}`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="relative">
              <Image src={pic8} alt="Background food image" className="w-full h-auto rounded-lg opacity-35" />
              <Image src={pic9} alt="Featured menu item" className="absolute inset-0 w-full h-full object-contain" />
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <MenuItem image={lettuce} name="Lettuce Leaf" price="12.5$" />
            <MenuItem image={glow} name="Glow Cheese" price="12.5$" />
            <MenuItem image={fresh} name="Fresh Breakfast" price="14.5$" />
            <MenuItem image={italian} name="Italian Pizza" price="14.5$" />
            <MenuItem image={mild} name="Mild Butter" price="12.5$" />
            <MenuItem image={slice} name="Slice Beef" price="12.5$" />
            <MenuItem image={bread} name="Fresh Bread" price="12.5$" />
            <MenuItem image={mushroom} name="Mushroom Pizza" price="12.5$" />
          </div>
        </div>
      </div>
    </section>
  )
}

function MenuItem({ image, name, price }:MenuItemProps) {
  return (
    <div className="flex items-start space-x-4">
      <Image src={image} alt={name} className="w-20 h-20 object-cover rounded-md" />
      <div>
        <h4 className="text-xl font-bold mb-2">{name}</h4>
        <p className="text-sm mb-2">Lacus nisi, et ac dapibus velit in consequat.</p>
        <p className="text-lg text-amber-500">{price}</p>
      </div>
    </div>
  )
}
