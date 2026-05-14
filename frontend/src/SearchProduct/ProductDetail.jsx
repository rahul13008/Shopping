import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../Cart/Cardcontext";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-6 text-center">Loading...</p>;
  if (!product) return <p className="p-6 text-center">Product not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-10">
      <div className="bg-white shadow-lg rounded-xl max-w-4xl w-full p-6 flex flex-col md:flex-row gap-8">


        <div className="md:w-1/2 flex justify-center items-center bg-gray-100 rounded-lg p-6">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-50 max-h-50 object-contain mix-blend-multiply select-none"
          />
        </div>


        <div className="md:w-1/2 flex flex-col">
          <h2 className="text-2xl font-bold mb-3">{product.title}</h2>

          <p className="text-3xl font-semibold text-green-600 mb-4">
            ${product.price}
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>


          <button
            className="mt-auto bg-black text-white py-3 rounded-lg cursor-pointer hover:bg-gray-800 transition active:scale-95"
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.title,
                price: product.price,
                image: product.image,
                size: "M",
                color: "Black",
              })
            }
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetail;

