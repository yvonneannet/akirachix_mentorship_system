
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ABeeZee } from "next/font/google";

const aBeeZee = ABeeZee({ weight: '400', subsets: ['latin'] });

const signUpSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  studentId: z.string().min(1, "Student ID/Code is required"),
  confirmPassword: z.string().min(6, "Password must be at least 6 characters long"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof signUpSchema>;

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
      if (existingUsers.some((user: FormData) => user.email === data.email)) {
        throw new Error('Email already registered');
      }

      existingUsers.push(data);
      localStorage.setItem('users', JSON.stringify(existingUsers));

      setSuccessMessage('Registration successful! Redirecting to login...');
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred during registration. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8 ${aBeeZee.className}`}>
      <div className="max-w-2xl w-full">
        
        <div className="text-left absolute top-10 left-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-cyan-500 italic">
            <span className="text-black">Akira</span><span className="text-blue-500">Chix</span>
          </h1>
        </div>

      
        <div className="text-center -mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-500">
            Join the <span className="text-black">Akira</span>Chix <br /> Mentorship Community
          </h2>
          <hr className="border-t-4 border-gray-900 mt-6 sm:mt-12 w-28 sm:w-36 mb-8 sm:mb-12 mx-auto" />
        </div>

        
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span>{errorMessage}</span>
          </div>
        )}

        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span>{successMessage}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-y-8 sm:gap-x-6">
          <div className="flex flex-col">
            <label htmlFor="full-name" className="block text-sm font-medium">Full Name</label>
            <input
              id="full-name"
              {...register("fullName")}
              type="text"
              className="w-full px-3 py-2 border border-blue-500 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Full Name"
            />
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email-address" className="block text-sm font-medium">Email</label>
            <input
              id="email-address"
              {...register("email")}
              type="email"
              className="w-full px-3 py-2 border border-blue-500 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="username" className="block text-sm font-medium">Username</label>
            <input
              id="username"
              {...register("username")}
              type="text"
              className="w-full px-3 py-2 border border-blue-500 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username"
            />
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              id="password"
              {...register("password")}
              type="password"
              className="w-full px-3 py-2 border border-blue-500 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="student-id" className="block text-sm font-medium">Student ID/Code</label>
            <input
              id="student-id"
              {...register("studentId")}
              type="text"
              className="w-full px-3 py-2 border border-blue-500 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Student ID/Code"
            />
            {errors.studentId && <p className="text-red-500 text-xs mt-1">{errors.studentId.message}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirm-password" className="block text-sm font-medium">Confirm Password</label>
            <input
              id="confirm-password"
              {...register("confirmPassword")}
              type="password"
              className="w-full px-3 py-2 border border-blue-500 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>

          {/* Sign Up Button */}
          <div className="col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="w-32 py-3 px-4 bg-black text-white rounded-md font-medium hover:bg-gray-800"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
          </div>
        </form>

        {/* Bottom Text */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-700">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}




