import Link from 'next/link'

export default function FoodMenu() {
  const menuCategories = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Drink', 'Snack']
  const menuItems = [
    { name: 'Alder Grilled Chinook Salmon', price: '32$', description: 'Toasted French bread topped with romano, cheddar', calories: '560 CAL' },
    { name: 'Alder Grilled Chinook Salmon', price: '32$', description: 'Toasted French bread topped with romano, cheddar', calories: '560 CAL' },
    { name: 'Alder Grilled Chinook Salmon', price: '32$', description: 'Toasted French bread topped with romano, cheddar', calories: '560 CAL' },
    { name: 'Alder Grilled Chinook Salmon', price: '32$', description: 'Toasted French bread topped with romano, cheddar', calories: '560 CAL' },
    { name: 'Alder Grilled Chinook Salmon', price: '32$', description: 'Toasted French bread topped with romano, cheddar', calories: '560 CAL' },
    { name: 'Alder Grilled Chinook Salmon', price: '32$', description: 'Toasted French bread topped with romano, cheddar', calories: '560 CAL' },
    { name: 'Alder Grilled Chinook Salmon', price: '32$', description: 'Toasted French bread topped with romano, cheddar', calories: '560 CAL' },
    { name: 'Alder Grilled Chinook Salmon', price: '32$', description: 'Toasted French bread topped with romano, cheddar', calories: '560 CAL' },
  ]
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-zinc-800 mb-2">
          Our Food Menu
        </h2>
        <p className="text-base text-center text-neutral-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          Varius sed pharetra dictum neque massa congue
        </p>
        <nav className="flex flex-wrap justify-center gap-6 mb-8" aria-label="Menu Categories">
          {menuCategories.map((category, index) => (
            <button
              key={category}
              className={`text-xl ${index === 0 ? 'text-amber-500' : 'text-neutral-600 hover:text-amber-500'} transition-colors`}
            >
              {category}
            </button>
          ))}
        </nav>
        <div className="h-px bg-neutral-200 mb-8 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-0.5 w-24 bg-amber-500"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {menuItems.map((item, index) => (
            <article key={index} className="border-b border-dashed border-neutral-200 pb-4 mb-4 last:border-b-0">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold text-zinc-800">{item.name}</h3>
                <span className="text-2xl font-bold text-amber-500">{item.price}</span>
              </div>
              <p className="text-base text-neutral-600 mb-2">{item.description}</p>
              <span className="text-sm text-zinc-500">{item.calories}</span>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/menu" className="inline-block px-8 py-3 text-base text-amber-500 border border-amber-500 rounded-md hover:bg-amber-500 hover:text-white transition-colors">
            View menu
          </Link>
        </div>
      </div>
    </section>
  )
}
