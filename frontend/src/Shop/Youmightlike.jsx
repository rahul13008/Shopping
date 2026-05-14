import img1 from "../assets/Frame 32.png";
import img2 from "../assets/Frame 33.png";
import img3 from "../assets/Frame 34.png";
import img4 from "../assets/Frame 38.png";
import img5 from "../assets/download (1).jpg";
import img6 from "../assets/download.jpg";
import img7 from "../assets/Men Color Block Shirt Without Tee.jpg";
import img8 from "../assets/Men Contrast Collar Shirt Without Tee For Summer.jpg";
import img9 from "../assets/download (4).jpg";
import img10 from "../assets/download (5).jpg";
import img11 from "../assets/download (6).jpg";
import img12 from "../assets/download (7).jpg";

import { useContext } from "react";
import { CartContext } from "../Cart/Cardcontext";

function Youmightlike() {
  const { addToCart } = useContext(CartContext);

  const items = [
    { id: 1, image: img1, title: "Polo with Contrast Trims", rating: 5, item_price: 212, item_discount: 242 },
    { id: 2, image: img2, title: "Gradient Graphic T-shirts", rating: 5, item_price: 142 },
    { id: 3, image: img3, title: "Polo with Tipping T-shirts", rating: 4, item_price: 180 },
    { id: 4, image: img4, title: "Black Striped T-shirt", rating: 5, item_price: 120, item_discount: 150 },
    { id: 5, image: img5, title: "Men's Shirt", rating: 5, item_price: 212, item_discount: 190 },
    { id: 6, image: img6, title: "Men's Stylish Shirt", rating: 5, item_price: 212 },
    { id: 7, image: img10, title: "Boys styles and fashionable shirt", rating: 5, item_price: 300, item_discount: 270 },
    { id: 8, image: img8, title: "Men Collar Shirt Without Tee For Summer", rating: 5, item_price: 212 },
    { id: 9, image: img9, title: "Men Contrast Collar Shirt", rating: 5, item_price: 212 },
    { id: 10, image: img7, title: "Best Men's Shirt", rating: 5, item_price: 200, item_discount: 160 },
    { id: 11, image: img11, title: "Men Collar Shirt", rating: 5, item_price: 212 },
    { id: 12, image: img12, title: "Best Shirt", rating: 5, item_price: 265, item_discount: 200 },
  ];

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.title,
      price: item.item_price,
      image: item.image,
      quantity: 1,
    });
  };

  return (
    <section className="w-full py-10 bg-white">

      {/* HEADING */}
      <div className="text-center px-4 mt-3 mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          CLOTHES SHOP
        </h1>

        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Discover premium outfits crafted for modern fashion lovers
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">

        {items.map((item) => (
          <div
            key={item.id}
            className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
          >

            {/* IMAGE */}
            <div className="bg-white flex justify-center pt-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-75 object-contain"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 text-center">

              {/* TITLE */}
              <h2 className="text-lg font-semibold text-gray-900 min-h-13.75">
                {item.title}
              </h2>

              {/* RATING */}
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-md">
                  {item.rating} ★
                </span>

                <span className="text-sm text-gray-500">
                  Ratings
                </span>
              </div>

              {/* PRICE */}
              <div className="flex items-center justify-center gap-3 mt-3">

                <p className="text-2xl font-bold text-gray-900">
                  ₹{item.item_price}
                </p>

                {item.item_discount && (
                  <p className="text-gray-400 line-through text-lg">
                    ₹{item.item_discount}
                  </p>
                )}

              </div>

              {/* BUTTON */}
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-5 w-full bg-[#ffb84d] hover:bg-[#ffa31a] text-white py-3 rounded-xl font-semibold transition duration-300"
              >
                ADD TO CART
              </button>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Youmightlike;