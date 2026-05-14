import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

 
  const handleNavigate = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <>
     
      <div className="bg-black text-white text-xs text-center py-2 px-2">
        Sign Up and get 20% off{" "}
        <span
          onClick={() => handleNavigate("/Login")}
          className="underline cursor-pointer"
        >
          Sign Up Now
        </span>
      </div>

     
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 md:px-4 py-4 flex items-center justify-between gap-3">

        
          <span
            className="text-lg md:text-2xl font-bold cursor-pointer"
            onClick={() => handleNavigate("/")}
          >
            SHOP.CO
          </span>

         
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            <li onClick={() => handleNavigate("/shop")} className="cursor-pointer">Shop</li>
            <li className="cursor-pointer">On Sale</li>
            <li className="cursor-pointer">New Arrivals</li>
            <li onClick={() => handleNavigate("/Brands")} className="cursor-pointer">Brands</li>
          </ul>

       
          <div className="relative flex-1 max-w-xs md:max-w-md">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border rounded-full px-3 py-2 text-sm"
            />

            {search && (
              <div className="absolute w-full bg-white border mt-2 rounded-lg max-h-60 overflow-y-auto">
                {filteredProducts.map((item) => (
                  <p
                    key={item.id}
                    onClick={() => {
                      handleNavigate(`/product/${item.id}`);
                      setSearch("");
                    }}
                    className="px-3 py-2 hover:bg-gray-100 text-sm cursor-pointer"
                  >
                    {item.title}
                  </p>
                ))}
              </div>
            )}
          </div>

     
          <div className="flex items-center gap-3">

        
            <div
              onClick={() => handleNavigate("/Cart")}
              className="text-2xl cursor-pointer"
            >
              🛒
            </div>

          
            <div
              className="md:hidden text-2xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </div>
          </div>
        </div>

        
        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-4 px-4 pb-4 text-sm font-medium">
            <li onClick={() => handleNavigate("/shop")} className="cursor-pointer">Shop</li>
            <li className="cursor-pointer">On Sale</li>
            <li className="cursor-pointer">New Arrivals</li>
            <li onClick={() => handleNavigate("/Brands")} className="cursor-pointer">Brands</li>
          </ul>
        )}
      </header>
    </>
  );
}

export default Header;