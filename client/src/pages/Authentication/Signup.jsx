import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import{User, Mail, KeyRound } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  console.log(formData);
  return (
    <div className="flex flex-col justify-center items-center p-4 min-h-screen">
      <div className="mb-4 text-center">
        <h2 className=" text-3xl font-bold ">Create Your Account</h2>
      </div>
      <form
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        onSubmit={handleSubmit}
      >
        <div>
          <span className="label mb-1">Name</span>
          <label className="input validator rounded-xl">
            <User />
            <input
              type="text"
              placeholder="Enter your username"
              name="username"
              onChange={handleChange}
              value={formData.username}
              required
            />
            <span className="validator-hint hidden">Required</span>
          </label>
        </div>

        <div>
          <span className="label mb-1">Email</span>
          <label className="input validator rounded-xl">
            <Mail />
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <span className="validator-hint hidden">Required</span>
          </label>
        </div>

        <div>
          <span className="label mb-1">Password</span>
          <label className="input validator rounded-xl">
            <KeyRound />
          <input
            type="password"
            placeholder="Enter your Password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <span className="validator-hint hidden">Required</span>
          </label>
        </div>
        <p className="mt-2">
          Already have an account? <NavLink to="/login">Login</NavLink>
        </p>
        <button
          className="btn btn-neutral mt-4 w-full rounded-xl"
          type="submit"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
