import { useContext } from "react";
import { CartContext } from "../Cart/Cardcontext";

import image from "../assets/Herrenmantel.jpg";
import image2 from "../assets/Mens Wool Coats Winter Padded Trench Coat(1).jpg";
import image3 from "../assets/Mens Wool Coats Winter Padded Trench Coat.jpg";
import image4 from "../assets/Herrenmantel.jpg";

function Topproducts() {
  const { addToCart } = useContext(CartContext);

  const clothes = [
    {
      id: 1,
      image,
      title: "Herrenmental",
      rating: 4,
      item_price: 220,
      discount_price: 190,
    },
    {
      id: 2,
      image: image2,
      title: "A Jacket of Elegance",
      rating: 4,
      item_price: 220,
    },
    {
      id: 3,
      image: image3,
      title: "Mens Wool Coat",
      rating: 4,
      item_price: 220,
    },
    {
      id: 4,
      image: image4,
      title: "Hoodie Mockup",
      rating: 4,
      item_price: 220,
    },
  ];

  const handleAddToCart = (cloth) => {
    addToCart({
      id: cloth.id,
      name: cloth.title,
      price: cloth.item_price,
      image: cloth.image,
      quantity: 1,
    });
  };

  return (
    <div className="w-full pt-5 pb-10 bg-white">

      {/* HEADING */}
      <div className="text-center px-4 mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          TOP SELLING
        </h2>

        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Discover our most loved outfits chosen by fashion enthusiasts
        </p>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">

        {clothes.map((cloth) => (
          <div
            key={cloth.id}
            className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
          >

            {/* IMAGE */}
            <div className="bg-white flex justify-center pt-4">
              <img
                src={cloth.image}
                alt={cloth.title}
                className="w-full h-75"
                style={{ width: "280px" }}
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 text-center">

              {/* TITLE */}
              <h2 className="text-xl font-semibold text-gray-900">
                {cloth.title}
              </h2>

              {/* RATING */}
              <div className="flex items-center justify-center gap-2 mt-3">
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-md">
                  {cloth.rating} ★
                </span>

                <span className="text-sm text-gray-500">
                  Ratings
                </span>
              </div>

              {/* PRICE */}
              <div className="flex items-center justify-center gap-3 mt-3">

                <p className="text-2xl font-bold text-gray-900">
                  ₹{cloth.item_price}
                </p>

                {cloth.discount_price && (
                  <p className="text-gray-400 line-through text-lg">
                    ₹{cloth.discount_price}
                  </p>
                )}

              </div>

              {/* BUTTON */}
              <button
                onClick={() => handleAddToCart(cloth)}
                className="mt-5 w-full bg-[#ffb84d] hover:bg-[#ffa31a] text-white py-3 rounded-xl font-semibold transition duration-300"
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

export default Topproducts;