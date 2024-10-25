

"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ABeeZee } from "next/font/google";

const aBeeZee = ABeeZee({ weight: '400', subsets: ['latin'] });

type User = {
  username: string;
  password: string;
};

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type FormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setErrorMessage('');

    try {
      const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: User) => u.username === data.username && u.password === data.password);

      if (user) {
        console.log('Login successful');
        localStorage.setItem('username', user.username); 
        router.push('/homepage');
      } else {
        throw new Error('Invalid username or password');
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={`min-h-screen bg-white flex flex-col items-center justify-center space-y-5 px-6 py-12 ${aBeeZee.className}`}>
        <div className="max-w-2xl w-full"></div>

        {/* Header Section */}
        <div className="text-left absolute top-10 left-10">
          <h1 className="text-4xl font-bold text-cyan-500 italic tracking-tight">
            <span className="text-black">Akira</span>
            <span className="text-blue-500">Chix</span>
          </h1>
        </div>

        {/* Login Form Container */}
        <div className="bg-white shadow-lg rounded-lg px-8 py-10 max-w-md w-full space-y-24">
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">Welcome Back!</h2>

          {errorMessage && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{errorMessage}</span>
            </div>
          )}

          <form className="space-y-12" onSubmit={handleSubmit(onSubmit)}>
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                {...register("username")}
                type="text"
                className="w-full px-3 py-2 border border-blue-500 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
              />
              {errors.username && <p className="text-red-500 text-xs mt-2">{errors.username.message}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                {...register("password")}
                type="password"
                className="w-full px-3 py-2 border border-blue-500 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-red-500 text-xs mt-2">{errors.password.message}</p>}
            </div>

            {/* Login Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-48 py-3 text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>

          {/* Sign-up Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
