import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";

function FooterNewsletter() {
  return (
    <>
     
      <div className="px-4 md:px-10 mt-10">

        <div className="bg-black text-white rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">

       
          <h2 className="text-2xl md:text-4xl font-bold leading-tight text-center md:text-left">
            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
          </h2>

         
          <div className="w-full md:w-96 flex flex-col gap-4">

           
            <div className="bg-white rounded-full px-4 py-3 flex items-center gap-3 w-full overflow-hidden">

              <span className="text-black text-lg">
                ✉
              </span>

              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full outline-none text-black bg-transparent text-sm"
              />

            </div>

           
            <button className="bg-white text-black rounded-full py-3 px-6 font-semibold hover:opacity-90 transition w-full">
              Subscribe to Newsletter
            </button>

          </div>
        </div>
      </div>


      <footer className="bg-gray-100 mt-16 px-6 md:px-12 py-14">

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10">


          <div className="col-span-2 md:col-span-1">

            <h2 className="text-3xl font-bold">
              SHOP.CO
            </h2>

            <p className="text-gray-600 mt-4 leading-7 text-sm">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>


            <div className="flex gap-4 mt-5 text-xl">

              <FaTwitter className="cursor-pointer hover:scale-110 transition" />

              <FaFacebookF className="cursor-pointer hover:scale-110 transition" />

              <FaInstagram className="cursor-pointer hover:scale-110 transition" />

              <FaGithub className="cursor-pointer hover:scale-110 transition" />

            </div>
          </div>


          <div>

            <h4 className="font-bold mb-4">
              COMPANY
            </h4>

            <div className="space-y-2 text-gray-600 text-sm">
              <p>About</p>
              <p>Features</p>
              <p>Works</p>
              <p>Career</p>
            </div>

          </div>


          <div>

            <h4 className="font-bold mb-4">
              HELP
            </h4>

            <div className="space-y-2 text-gray-600 text-sm">
              <p>Customer Support</p>
              <p>Delivery Details</p>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
            </div>

          </div>


          <div>

            <h4 className="font-bold mb-4">
              FAQ
            </h4>

            <div className="space-y-2 text-gray-600 text-sm">
              <p>Account</p>
              <p>Manage Deliveries</p>
              <p>Orders</p>
              <p>Payments</p>
            </div>

          </div>


          <div>

            <h4 className="font-bold mb-4">
              RESOURCES
            </h4>

            <div className="space-y-2 text-gray-600 text-sm">
              <p>Free eBooks</p>
              <p>Development Tutorial</p>
              <p>How to - Blog</p>
              <p>Youtube Playlist</p>
            </div>

          </div>

        </div>
      </footer>
    </>
  );
}

export default FooterNewsletter;