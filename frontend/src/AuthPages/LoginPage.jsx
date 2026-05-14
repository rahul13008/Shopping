import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fetching = await fetch("http://localhost:5000/auth/api/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: email,
        Password: password
      })
    })

    const data = await fetching.json()
    alert(data.message);

    if (data.success) {
      navigate("/")
    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10 overflow-hidden">


      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-2xl shadow-lg">


        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Login
        </h2>


        <form className="space-y-5" onSubmit={handleSubmit}>


          <div>

            <label className="block text-gray-600 mb-2 text-sm md:text-base">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
            />

          </div>


          <div>

            <label className="block text-gray-600 mb-2 text-sm md:text-base">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
            />

          </div>


          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">


            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 cursor-pointer transition active:scale-95 w-full sm:w-auto"
            >
              Login
            </button>


            <button
              type="button"
              onClick={() => alert("Reset password link sent!")}
              className="text-black hover:underline cursor-pointer text-sm md:text-base text-center"
            >
              Forgot Password?
            </button>

          </div>
        </form>


        <p className="text-center text-gray-500 text-sm md:text-base mt-8">

          Don't have an account?{" "}

          <span
            onClick={() => navigate("/Register")}
            className="text-black font-semibold hover:underline cursor-pointer"
          >
            Sign Up
          </span>

        </p>

      </div>
    </div>
  );
};

export default Login