"use client"
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

// Define the type for each store item
type StoreItem = {
  id: number;
  img: string;
  price: number;
};

export default function Store() {
  // Define cart state as an array of StoreItem
  const [cart, setCart] = useState<StoreItem[]>([]);

  // Function to add an item to the cart
  const addItemToCart = (item: StoreItem) => {
    try {
      setCart((prevCart) => [...prevCart, item]);
      console.log("Item added to cart:", item);
    } catch (error) {
      console.log("Error adding item to cart:", error);
    }
  };

  // Array of store items
  const storeItems: StoreItem[] = [
    {
      id: 1,
      img: "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlfGVufDB8fDB8fHww",
      price: 50,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1578589385251-045f05a6faa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGltYWdlfGVufDB8fDB8fHww",
      price: 50,
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlfGVufDB8fDB8fHww",
      price: 50,
    },
  ];

  return (
    <>
      {/* Cart icon with item count */}
      <div className="fixed top-5 right-5">
        <div className="relative">
          <FaShoppingCart size={30} className="text-gray-800" />
          {cart.length > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs font-bold">
              {cart.length}
            </span>
          )}
        </div>
      </div>

      {storeItems.map((item) => (
        <div
          key={item.id}
          className="bg-red-500 flex flex-col md:flex-row items-center p-10 border-2 border-gray-300 rounded-lg space-y-6 md:space-y-0 md:space-x-6"
        >
          <div className="border-2 border-gray-400 rounded-lg overflow-hidden w-full md:w-1/3">
            <img
              className="w-full h-auto object-cover"
              src={item.img}
              alt="Store Item"
            />
          </div>
          <div className="flex flex-col items-start justify-between">
            <span className="text-xl font-semibold text-gray-800">Price: ${item.price}</span>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
              onClick={() => addItemToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}

      {/* Display the cart */}
      <div className="p-5 mt-5">
        <h2 className="text-xl font-bold">Cart Items:</h2>
        {cart.length > 0 ? (
          <ul className="list-disc ml-5">
            {cart.map((cartItem, index) => (
              <li key={index}>
                Item {cartItem.id} - Price: ${cartItem.price}
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
}
