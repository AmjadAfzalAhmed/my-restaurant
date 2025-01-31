'use client'

import Image from 'next/image'
import { useState } from 'react'

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Burger",
      price: 35.0,
      quantity: 1,
      total: 35.0,
      image: "/images/donut.png",
      rating: 4,
    },
    {
      id: 2,
      name: "Fresh Lime",
      price: 25.0,
      quantity: 1,
      total: 25.0,
      image: "/images/muffin.png",
      rating: 5,
    },
    {
      id: 3,
      name: "Pizza",
      price: 15.0,
      quantity: 1,
      total: 15.0,
      image: "/images/cheese.png",
      rating: 3,
    },
  ]);

  const updateQuantity = (id:number | string, increment:boolean) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity = increment
          ? item.quantity + 1
          : item.quantity > 1
          ? item.quantity - 1
          : 1;
        return { ...item, quantity: newQuantity, total: newQuantity * item.price };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const removeItem = (id: string | number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4 md:p-8">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="hidden md:table-header-group">
            <tr className="text-left">
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Total</th>
              <th className="p-4">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b flex flex-col md:table-row">
                <td className="p-4 flex items-center">
                  <Image src={item.image} alt={item.name} width={90} height={100} className="mr-4 hover:scale-90 transition-all" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <div className="flex text-yellow-500">
                      {Array.from({ length: item.rating }).map((_, index) => (
                        <span key={index}>⭐</span>
                      ))}
                    </div>
                  </div>
                </td>
                <td className="p-4 flex justify-between md:table-cell">
                  <span className="md:hidden font-semibold">Price:</span>
                  ${item.price.toFixed(2)}
                </td>
                <td className="p-4 flex justify-between items-center md:table-cell">
                  <span className="md:hidden font-semibold">Quantity:</span>
                  <div className="flex items-center">
                    <button
                      className="px-2 py-1 bg-gray-300 rounded"
                      onClick={() => updateQuantity(item.id, false)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-300 rounded"
                      onClick={() => updateQuantity(item.id, true)}
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="p-4 flex justify-between md:table-cell">
                  <span className="md:hidden font-semibold">Total:</span>
                  ${item.total.toFixed(2)}
                </td>
                <td className="p-4 flex justify-end md:table-cell">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeItem(item.id)}
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
