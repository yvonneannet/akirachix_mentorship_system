

// "use client";

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { ABeeZee } from 'next/font/google';



// const aBeeZee = ABeeZee({ weight: '400', subsets: ['latin'] });
// const loginSchema = z.object({
//   username: z.string().min(1, "Username is required"),
//   password: z.string().min(1, "Password is required"),
// });

// type FormData = z.infer<typeof loginSchema>;

// export default function LoginPage() {
//   const [loading, setLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: zodResolver(loginSchema),
//   });

//   const onSubmit = async (data: FormData) => {
//     setLoading(true);
//     setErrorMessage('');

//     try {
//       const users = JSON.parse(localStorage.getItem('users') || '[]');
//       const user = users.find((u: any) => u.username === data.username && u.password === data.password);

//       if (user) {
//         console.log('Login successful');
//         localStorage.setItem('username', user.username); 
//         router.push('/homepage');
//       } else {
//         throw new Error('Invalid username or password');
//       }
//     } catch (error) {
//       setErrorMessage(error instanceof Error ? error.message : 'An error occurred during login. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8" >
//       <div className="max-w-md w-full space-y-8">
        
      
//         <div className="text-left">
//         <h1 className="text-3xl sm:text-4xl font-bold text-cyan-500 italic">
//             <span className="text-black">Akira</span><span className="text-blue-500">Chix</span>
//           </h1>
//         </div>

//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Welcome Back!
//         </h2>
        
        
//         {errorMessage && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
//             <span className="block sm:inline">{errorMessage}</span>
//           </div>
//         )}
        
      
//         <form className="mt-8 space-y-10" onSubmit={handleSubmit(onSubmit)}>
//           <input type="hidden" name="remember" value="true" />
          
         
//           <div className="space-y-10">
//             <div>
//               <label htmlFor="username" className="sr-only">Username</label>
//               <input
//                 id="username"
//                 {...register("username")}
//                 type="text"
//                 className="w-full px-3 py-2 border border-blue-500 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Username"
//               />
//               {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
//             </div>
//             <div>
//               <label htmlFor="password" className="sr-only">Password</label>
//               <input
//                 id="password"
//                 {...register("password")}
//                 type="password"
//                 autoComplete="current-password"
//                 className="w-full px-3 py-2 border border-blue-500 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Password"
//               />
//               {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
//             </div>
//           </div>

          
//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="group relative w-48 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//               disabled={loading}
//             >
//               {loading ? "Logging in..." : "Login"}
//             </button>
//           </div>
//         </form>

        
//         <div className="text-center">
//           <p className="text-sm text-gray-600">
//             Don't have an account?{' '}
//             <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-cyan-500 italic">
            <span className="text-black">Akira</span><span className="text-blue-500">Chix</span>
          </h1>
        </div>

        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Welcome Back!
        </h2>
        
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}
      
        <form className="mt-8 space-y-10" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" name="remember" value="true" />
          
          <div className="space-y-10">
            <div>
              <label htmlFor="username" className="sr-only">Username</label>
              <input
                id="username"
                {...register("username")}
                type="text"
                className="w-full px-3 py-2 border border-blue-500 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Username"
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>}
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                {...register("password")}
                type="password"
                autoComplete="current-password"
                className="w-full px-3 py-2 border border-blue-500 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="group relative w-48 flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{' '}
            <Link href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
