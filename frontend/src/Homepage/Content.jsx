import image from "../assets/image-shopping.jpg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Content() {
  const navigate = useNavigate();

  const stats = [
    { number: "200+", label: "International Brands" },
    { number: "2000+", label: "High Quality Products" },
    { number: "30,000+", label: "Happy Customers" },
  ];

  const brands = ["VERSACE", "ZARA", "GUCCI", "PRADA", "CALVIN KLEIN"];

  return (
    <>
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-5 sm:px-8 lg:px-12 py-10 lg:py-16 gap-12 overflow-hidden">

        {/* LEFT CONTENT */}
        <motion.div
          className="w-full lg:w-[50%]"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.4 }}
        >

          {/* HEADING */}
          <h1 className="text-4xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black leading-tight text-center lg:text-left">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-500 mt-5 text-center lg:text-left text-sm sm:text-base leading-7 max-w-xl">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense
            of style.
          </p>

          {/* BUTTON */}
          <div className="flex justify-center lg:justify-start">

            <motion.button
              className="mt-7 bg-black text-white px-10 py-3 rounded-full text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </motion.button>

          </div>

          {/* STATS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-5 sm:gap-10 mt-10 text-center">

            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2
                }}
                viewport={{ amount: 0.4 }}
                className="w-25 sm:w-auto"
              >

                <h2 className="text-xl sm:text-3xl font-bold">
                  {stat.number}
                </h2>

                <p className="text-gray-500 text-xs sm:text-base leading-5">
                  {stat.label}
                </p>

              </motion.div>
            ))}

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="w-full lg:w-[45%] flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.4 }}
        >

          <img
            src={image}
            alt="Shopping"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl h-105 sm:h-125 lg:h-87 rounded-3xl object-cover"
          />

        </motion.div>
      </div>

      {/* BRANDS SECTION */}
      <div className="bg-black text-white py-6 px-4">

        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-6 sm:gap-10 lg:gap-16">

          {brands.map((brand, index) => (
            <motion.h2
              key={index}
              className="text-lg sm:text-2xl font-bold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15
              }}
              viewport={{ amount: 0.4 }}
            >
              {brand}
            </motion.h2>
          ))}

        </div>
      </div>
    </>
  );
}

export default Content;