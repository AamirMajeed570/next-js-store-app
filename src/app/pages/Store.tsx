"use client"
export default function Store() {
    const addItemToCart = () =>{
        try {
            console.log("11111111");
        } catch (error) {
            
        }
    }
    return (
      <>
        <div className="bg-red-500 flex flex-col md:flex-row items-center p-10 border-2 border-gray-300 rounded-lg space-y-6 md:space-y-0 md:space-x-6">
          <div className="border-2 border-gray-400 rounded-lg overflow-hidden w-full md:w-1/3">
            <img
              className="w-full h-auto object-cover"
              src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlfGVufDB8fDB8fHww"
              alt="Store Item"
            />
          </div>
          <div className="flex flex-col items-start justify-between">
            <span className="text-xl font-semibold text-gray-800">Price: $50</span>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-red-500 flex flex-col md:flex-row items-center p-10 border-2 border-gray-300 rounded-lg space-y-6 md:space-y-0 md:space-x-6">
          <div className="border-2 border-gray-400 rounded-lg overflow-hidden w-full md:w-1/3">
            <img
              className="w-full h-auto object-cover"
              src="https://images.unsplash.com/photo-1578589385251-045f05a6faa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGltYWdlfGVufDB8fDB8fHww"
              alt="Store Item"
            />
          </div>
          <div className="flex flex-col items-start justify-between">
            <span className="text-xl font-semibold text-gray-800">Price: $50</span>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-red-500 flex flex-col md:flex-row items-center p-10 border-2 border-gray-300 rounded-lg space-y-6 md:space-y-0 md:space-x-6">
          <div className="border-2 border-gray-400 rounded-lg overflow-hidden w-full md:w-1/3">
            <img
              className="w-full h-auto object-cover"
              src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlfGVufDB8fDB8fHww"
              alt="Store Item"
            />
          </div>
          <div className="flex flex-col items-start justify-between">
            <span className="text-xl font-semibold text-gray-800">Price: $50</span>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" onClick={addItemToCart}>
              Add to Cart
            </button>
          </div>
        </div>
        <div className="bg-red-500 flex flex-col md:flex-row items-center p-10 border-2 border-gray-300 rounded-lg space-y-6 md:space-y-0 md:space-x-6">
          <div className="border-2 border-gray-400 rounded-lg overflow-hidden w-full md:w-1/3">
            <img
              className="w-full h-auto object-cover"
              src="https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlfGVufDB8fDB8fHww"
              alt="Store Item"
            />
          </div>
          <div className="flex flex-col items-start justify-between">
            <span className="text-xl font-semibold text-gray-800">Price: $50</span>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </>
    );
  }
  