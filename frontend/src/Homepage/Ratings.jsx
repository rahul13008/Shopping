function Ratings() {

  const reviews = [
    {
      name: "Sarah M.",
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Alex K.",
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      name: "James L.",
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
    {
      name: "Sarah M.",
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    },
    {
      name: "Alex K.",
      text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    },
    {
      name: "James L.",
      text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-5 bg-white overflow-hidden">

      {/* HEADING */}
      <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center mb-12">
        OUR HAPPY CUSTOMERS
      </h1>

      {/* REVIEWS */}
      <div className="flex flex-wrap justify-center gap-6">

        {reviews.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-80 border border-gray-200 rounded-2xl p-6 bg-white hover:shadow-lg transition duration-300"
          >

            {/* STARS */}
            <div className="text-yellow-500 text-lg">
              ⭐⭐⭐⭐⭐
            </div>

            {/* NAME */}
            <h3 className="text-xl font-semibold mt-3">
              {item.name}
            </h3>

            {/* REVIEW TEXT */}
            <p className="text-gray-500 text-sm leading-7 mt-3">
              {item.text}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Ratings
