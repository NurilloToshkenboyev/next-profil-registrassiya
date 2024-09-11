"use client";
import { NextPage } from "next";
import React from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



interface Inputs {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit = async (data: Inputs) => {
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
        callbackUrl: "/profile",
      });

      if (result?.error) {
        toast.error(result.error);
      } else {
        toast.success("Login successful!");
        window.location.href = "/profile";
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="mx-auto max-w-[400px] mt-20 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <input
            type="email"
            className={`w-full p-3 border rounded-md ${errors.email ? 'border-red-500' : 'bg-blue-100'} focus:bg-white focus:border-blue-500 focus:outline-none shadow-sm hover:bg-blue-200 hover:border-blue-400 transition-all duration-300`}
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
            className={`w-full p-3 border rounded-md ${errors.password ? 'border-red-500' : 'bg-blue-100'} focus:bg-white focus:border-blue-500 focus:outline-none shadow-sm hover:bg-blue-200 hover:border-blue-400 transition-all duration-300`}
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
