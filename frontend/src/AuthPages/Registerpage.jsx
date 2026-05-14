import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert("Passwords do not match");
    }

    const fetching = await fetch("http://localhost:5000/auth/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FullName: name,
        Email: email,
        Password: password,
      }),
    });

    const data = await fetching.json()
    alert(data.message)

    if(data.success){
      navigate("/login")
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10 overflow-hidden">


      <div className="w-full max-w-md bg-white p-6 md:p-8 rounded-2xl shadow-lg">


        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Register
        </h2>


        <form className="space-y-5" onSubmit={handleSubmit}>


          <div>

            <label className="block text-gray-600 mb-2 text-sm md:text-base">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
            />

          </div>


          <div>

            <label className="block text-gray-600 mb-2 text-sm md:text-base">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
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
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
            />

          </div>


          <div>

            <label className="block text-gray-600 mb-2 text-sm md:text-base">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-black text-sm md:text-base"
            />

          </div>


          <button
            type="submit"
            className="w-full bg-black text-white px-4 py-3 rounded-xl font-medium text-sm md:text-base hover:opacity-90 cursor-pointer transition active:scale-95"
          >
            Register
          </button>

        </form>


        <p className="text-center text-gray-500 text-sm md:text-base mt-6">

          Already have an account?{" "}

          <span
            onClick={() => navigate("/Login")}
            className="text-black font-semibold hover:underline cursor-pointer"
          >
            Login
          </span>

        </p>

      </div>
    </div>
  );
};

export default Register