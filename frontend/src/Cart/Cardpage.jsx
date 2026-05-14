import { useContext } from "react";
import { CartContext } from "./Cardcontext";
import { motion } from "framer-motion";

const Cart = () => {
  const {
    cartItems = [],
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useContext(CartContext);

  if (!cartItems.length) {
    return (
      <h2 className="text-center text-xl font-semibold mt-20 text-gray-600">
        Your Cart is Empty 🛒
      </h2>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 overflow-hidden">

      
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5 }}
      >
        Your Cart
      </motion.h1>

     
      <div className="space-y-6">

        {cartItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition flex flex-col md:flex-row md:items-center justify-between gap-6"
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            viewport={{ amount: 0.3 }}
            whileHover={{ scale: 1.01 }}
          >

           
            <div className="flex items-center gap-4">

         
              <div className="w-24 h-24 md:w-28 md:h-28 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center shrink-0">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />

              </div>

             
              <div>

                <h3 className="font-semibold text-gray-800 text-sm md:text-lg">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Size: {item.size || "M"}
                </p>

                <p className="text-sm text-gray-500">
                  Color: {item.color || "Black"}
                </p>

              </div>
            </div>

           
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 md:gap-8">

              
              <div className="flex items-center gap-3">

                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-lg cursor-pointer active:scale-95 transition"
                >
                  -
                </button>

                <span className="font-medium w-6 text-center select-none">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 text-lg cursor-pointer active:scale-95 transition"
                >
                  +
                </button>

              </div>

             
              <p className="font-semibold text-gray-800 text-lg">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full text-sm cursor-pointer active:scale-95 transition"
              >
                Remove
              </button>

            </div>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Cart;