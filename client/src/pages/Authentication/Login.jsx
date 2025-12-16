import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Mail, KeyRound } from "lucide-react";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  console.log(formData);
  return (
    <div className="flex flex-col justify-center items-center p-4 min-h-screen">
      <div className="mb-4 text-center">
        <h2 className=" text-3xl mb-2 font-bold ">Welcome Back</h2>
        <p className="text-sm">Please login to your account</p>
      </div>

      <form
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        onSubmit={handleSubmit}
      >
        <div>
          <span className="label mb-1">Email</span>
          <label className="input validator rounded-xl outline-none border border-gray-300 focus-within:border-2 focus-within:border-[#1FB854]">
            <Mail />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
            <span className="validator-hint hidden">Required</span>
          </label>
        </div>

        <div>
          <span className="label mb-1">Password</span>
          <label className="input validator rounded-xl outline-none border border-gray-300 focus-within:border-2 focus-within:border-[#1FB854]">
            <KeyRound />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              onChange={handleChange}
              value={formData.password}
            />
            <span className="validator-hint hidden">Required</span>
          </label>
        </div>

        <p className="mt-2">
          Don't have an account? <NavLink to="/signup">Register</NavLink>
        </p>

        <button
          className="btn btn-primary mt-4 w-full rounded-xl"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
