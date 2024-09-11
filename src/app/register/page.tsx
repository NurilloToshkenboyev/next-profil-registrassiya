"use client";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

interface Inputs {
  name: string;
  email: string;
  password: string;
}

const Register: NextPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const router = useRouter();

  const onSubmit = async (data: Inputs) => {
    try {
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success("Registration successful!");
        router.push("/login");
      } else {
        const result = await response.json();
        toast.error(result.message || "Registration failed.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="mx-auto max-w-md mt-20 p-8 bg-white shadow-2xl rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <input
            type="text"
            className={`w-full p-3 border rounded-md ${errors.name ? 'border-red-500' : 'bg-blue-200'} focus:bg-white focus:border-blue-500 focus:outline-none shadow-sm hover:bg-blue-300 hover:border-green-400 transition-all duration-300`}
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <input
            type="email"
            className={`w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : 'bg-blue-200'} focus:bg-white focus:border-blue-500 focus:outline-none shadow-sm hover:bg-blue-300 hover:border-green-400 transition-all duration-300`}
            placeholder="Email"
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[^@]+@[^@]+\.[^@]+$/,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <input
            type="password"
            className={`w-full p-3 border rounded-md ${errors.password ? 'border-red-500' : 'bg-blue-200'} focus:bg-white focus:border-blue-500 focus:outline-none shadow-sm hover:bg-blue-300 hover:border-green-400 transition-all duration-300`}
            placeholder="Password"
            {...register("password", { 
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long"
              }
            })}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <div>
          <button
            className="w-full p-3 bg-green-400 hover:bg-green-500 text-white font-semibold rounded-md shadow-lg transition-all duration-300 transform hover:scale-105"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
``
