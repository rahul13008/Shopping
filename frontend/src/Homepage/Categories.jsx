import image1 from "../assets/Frame 61.png";
import image2 from "../assets/Frame 62.png";
import image3 from "../assets/Frame 64.png";
import image4 from "../assets/Frame 63.png";

const styles = [
  { title: "Casual", img: image1 },
  { title: "Formal", img: image2 },
  { title: "Party", img: image3 },
  { title: "Gym", img: image4 },
];

const DressStyle = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-8">

      {/* HEADING */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-gray-900">
          BROWSE BY DRESS STYLE
        </h2>

        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Discover fashion categories made for every occasion
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 p-8 bg-gray-50 sm:grid-cols-2 lg:grid-cols-4 gap-6 rounded-3xl">

        {styles.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-3xl group shadow-md hover:shadow-2xl transition duration-300"
          >

            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-62.5 sm:h-70 lg:h-80 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition duration-300"></div>

            {/* TEXT */}
            <div className="absolute bottom-5 left-5">
              <h3 className="text-white text-2xl font-bold">
                {item.title}
              </h3>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default DressStyle;