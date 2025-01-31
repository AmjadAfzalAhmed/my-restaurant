'use client'

import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { client, foodQuery } from '@/sanity/lib/client';
import Sidebar from "@/components/shopComps/Sidebar";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";

type Foods = {
  _id: string;
  name: string;
  imageUrl: string;
  price: number;
  category: string;
  description: string;
};

type CartItem = {
  food: Foods;
  quantity: number;
};

const Shop: React.FC = () => {
  const [foodData, setFoodData] = useState<Foods[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedFood, setSelectedFood] = useState<Foods | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [sortBy, setSortBy] = useState<string>("priceLowToHigh");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage: number = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.fetch(foodQuery);
        setFoodData(data);
      } catch (error) {
        console.error("Error fetching food data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const sortedFoods: Foods[] = [...foodData].sort((a, b) => {
    if (sortBy === "priceLowToHigh") {
      return a.price - b.price;
    } else if (sortBy === "priceHighToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  const indexOfLastFood: number = currentPage * productsPerPage;
  const indexOfFirstFood: number = indexOfLastFood - productsPerPage;
  const currentFoods: Foods[] = sortedFoods.slice(indexOfFirstFood, indexOfLastFood);

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

  const handleFoodSelect = (food: Foods): void => {
    setSelectedFood(food);
  };

  const handleAddToCart = (food: Foods): void => {
    const existingCartItemIndex = cart.findIndex((item) => item.food._id === food._id);

    if (existingCartItemIndex !== -1) {
      // If item already exists in cart, increase its quantity
      const updatedCart = [...cart];
      updatedCart[existingCartItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If item is not in cart, add it with quantity 1
      setCart((prevCart) => [...prevCart, { food, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (foodId: string): void => {
    setCart((prevCart) => prevCart.filter((item) => item.food._id !== foodId));
  };

  const totalPrice = cart.reduce((total, item) => total + item.food.price * item.quantity, 0);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen bg-stone-900 text-white">Loading...</div>;
  }

  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-20 p-6">
      <div className="w-full max-w-7xl mx-auto min-h-[100dvh] px-4 sm:px-6 lg:px-8 text-white">
        {selectedFood && (
          <div className="fixed inset-0 bg-white p-4 sm:p-6 overflow-y-auto z-10">
            <div className="max-w-4xl mx-auto">
              <button
                className="mb-4 sm:mb-6 px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
                onClick={() => setSelectedFood(null)}
              >
                &larr; Back to Menu
              </button>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="relative w-full aspect-square sm:h-96 overflow-hidden">
                  <Image
                    src={selectedFood.imageUrl}
                    alt={selectedFood.name}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-6 animate-fade-in">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-stone-900">
                    {selectedFood.name}
                  </h2>
                  <p className="text-stone-600 mb-2">{selectedFood.category}</p>
                  <p className="text-stone-600 mb-4 sm:mb-6">{selectedFood.description}</p>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <span className="text-xl sm:text-2xl font-bold text-stone-900">
                      ${selectedFood.price.toFixed(2)}
                    </span>
                    <button
                      className="w-full sm:w-auto px-6 py-3 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
                      onClick={() => handleAddToCart(selectedFood)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {!selectedFood && (
          <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="text-stone-900">Sort By:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[200px] border border-stone-300 rounded-md bg-white text-stone-900">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent className="bg-white text-stone-900">
                    <SelectItem value="priceLowToHigh">Price: Low to High</SelectItem>
                    <SelectItem value="priceHighToLow">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {currentFoods.map((food: Foods) => (
                <div
                  key={food._id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1"
                  onClick={() => handleFoodSelect(food)}
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={food.imageUrl}
                      alt={food.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg font-semibold mb-2 text-stone-900">{food.name}</h3>
                    <p className="text-stone-600 mb-3">{food.category}</p>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <span className="text-xl font-bold text-stone-900">
                        ${food.price.toFixed(2)}
                      </span>
                      <button
                        className="w-full sm:w-auto px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToCart(food);
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-lg p-4 sm:p-6">
  <h2 className="text-xl sm:text-2xl font-bold mb-4 text-stone-900">Your Cart</h2>
  {cart.length === 0 ? (
    <p className="text-stone-600">Your cart is empty.</p>
  ) : (
    <div className="space-y-4">
      {cart.map((item) => (
        <div
          key={item.food._id}
          className="flex items-center gap-4 p-4 bg-stone-50 rounded-lg shadow-sm transition-shadow hover:shadow-md"
        >
          <Image
            src={item.food.imageUrl}
            alt={item.food.name}
            width={80}
            height={80}
            className="w-16 h-16 object-cover rounded-md"
          />
          <div className="flex-1">
            <span className="font-semibold text-stone-900">{item.food.name}</span>
            <span className="text-stone-600 ml-2">(x{item.quantity})</span>
          </div>
          <div className="mx-4">
            <span className="font-bold text-stone-900">
              ${(item.food.price * item.quantity).toFixed(2)}
            </span>
          </div>
          <button
            className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
            onClick={() => handleRemoveFromCart(item.food._id)}
          >
            Remove
          </button>
        </div>
      ))}
      <div className="border-t pt-4">
        <span className="text-xl font-bold text-stone-900">
          Total: ${totalPrice.toFixed(2)}
        </span>
      </div>
    </div>
  )}
</div>

            <div className="flex justify-center mt-8">
              <nav className="inline-flex rounded-md shadow-sm">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-amber-500 bg-amber-500 text-white rounded-l-md disabled:opacity-50 transition-colors"
                >
                  Previous
                </button>
                {[...Array(Math.ceil(sortedFoods.length / productsPerPage)).keys()].map(
                  (number) => (
                    <button
                      key={number + 1}
                      onClick={() => paginate(number + 1)}
                      className={`px-4 py-2 border-t border-b border-amber-500 transition-colors ${
                        currentPage === number + 1
                          ? "bg-amber-500 text-white"
                          : "bg-white text-amber-500 hover:bg-amber-50"
                      }`}
                    >
                      {number + 1}
                    </button>
                  )
                )}
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === Math.ceil(sortedFoods.length / productsPerPage)}
                  className="px-4 py-2 border border-amber-500 bg-amber-500 text-white rounded-r-md disabled:opacity-50 transition-colors"
                >
                  Next
                </button>
              </nav>
            </div>
          </>
        )}
      </div>

      <div className="w-full lg:w-[35%]">
        <Sidebar />
      </div>
    </div>
  );
};

export default Shop;