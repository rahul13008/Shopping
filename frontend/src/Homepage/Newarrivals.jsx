import img1 from "../assets/pexels-cristian-rojas-8030178.jpg";
import img2 from "../assets/pexels-ron-lach-8386654.jpg";
import img3 from "../assets/pexels-ron-lach-8387134.jpg";
import img4 from "../assets/pexels-ron-lach-9853469.jpg";
import { useContext } from "react";
import { CartContext } from "../Cart/Cardcontext";

export const items = [
  {
    id: 1,
    image: img1,
    name: "T-shirt with Tape Details",
    rating: 5,
    price: 120,
  },
  {
    id: 2,
    image: img2,
    name: "Skinny Fit Jeans",
    rating: 5,
    price: 240,
    discount: 260,
  },
  {
    id: 3,
    image: img3,
    name: "Checkered Shirt",
    rating: 4,
    price: 180,
  },
  {
    id: 4,
    image: img4,
    name: "Sleeve Striped T-shirt",
    rating: 5,
    price: 130,
    discount: 160,
  },
];

function Product() {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    });
  };

  return (
    <div className="w-full py-10 bg-white">

      {/* HEADING */}
      <div className="text-center px-4 mb-10 mt-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          NEW ARRIVALS
        </h2>

        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Explore the newest fashion trends crafted to upgrade your style
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-10 bg-gray-50 py-8 rounded-3xl mx-4 sm:mx-6 lg:mx-10">

        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden group"
          >

            {/* IMAGE */}
            <div className="overflow-hidden flex justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-70 sm:h-80 group-hover:scale-105 transition duration-500 "
               style={{ width: "280px" }}
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 text-center">

              {/* NAME */}
              <h2 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h2>

              {/* RATING */}
              <div className="mt-3 flex items-center justify-center gap-2">
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-md">
                  {item.rating} ★
                </span>

                <span className="text-sm text-gray-500">
                  Ratings
                </span>
              </div>

              {/* PRICE */}
              <div className="flex items-center justify-center gap-3 mt-3">

                <p className="text-xl font-bold text-gray-900">
                  ₹{item.price}
                </p>

                {item.discount && (
                  <p className="text-gray-400 line-through">
                    ₹{item.discount}
                  </p>
                )}

              </div>

              {/* BUTTON */}
              <button
                className="mt-5 w-full bg-[#ffb84d] hover:bg-[#ffa31a] text-white py-3 rounded-xl font-semibold transition duration-300"
                onClick={() => handleAddToCart(item)}
              >
                ADD TO CART
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Product;