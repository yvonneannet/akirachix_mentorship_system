


// "use client";
// import Image from 'next/image';
// import Link from 'next/link';
// import { Menu, MenuItem, MenuButton, MenuItems } from '@headlessui/react';
// import { BsPersonCircle } from 'react-icons/bs';
// import { ABeeZee } from 'next/font/google';

// const aBeeZee = ABeeZee({ weight: '400', subsets: ['latin'] });

// export default function LandingPage() {
//   return (
//     <div className={`relative h-screen flex items-center justify-center ${aBeeZee.className}`}>
      
     
//       <Image
//         src="/images/mentorship2.avif"
//         alt="Background"
//         layout="fill"
//         objectFit="cover"
//         quality={100}
//         className="z-0"
//       />

     
//       <div className="absolute inset-0 bg-black opacity-50"></div>

//       {/* Logo */}
//       <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-10">
//         <Link href="/" className="text-2xl sm:text-3xl text-white italic font-bold">
//           <span className="italic">Akira</span>
//           <span className="text-blue-500">Chix</span>
//         </Link>
//       </div>

     
//       <div className="z-10 text-white text-center max-w-lg sm:max-w-2xl px-4">
//         <h1 className="text-3xl sm:text-5xl italic font-bold mb-4 sm:mb-6 leading-tight">
//           Welcome to the <span className="italic">Akira</span>
//           <span className="text-blue-500 italic">Chix</span> Mentorship System
//         </h1>
//         <p className="mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
//           This program enhances the student experience by linking them one-on-one with an alumni who acts as a 
//           <br className="hidden sm:block" />
//           peer mentor. Get paired with someone invested in your success — 
//           <br className="hidden sm:block" />
//           a person ready to listen, inspire, help navigate challenges, and recognize opportunities.
//         </p>
//         <Link href="/signup">
//           <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-6 w-36 sm:w-44 text-md sm:text-lg">
//             Get Started
//           </button>
//         </Link>
//       </div>

      
//       <div className="absolute top-6 right-6 sm:top-10 sm:right-10 z-10">
//         <Menu as="div" className="relative inline-block text-left">
//           <div>
//             <MenuButton className="flex items-center">
//               <BsPersonCircle className="text-white text-4xl sm:text-5xl" />
//             </MenuButton>
//           </div>

//           <MenuItems className="absolute right-0 mt-2 w-28 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//             <div className="py-1">
//               <MenuItem>
//                 {({ close }) => (
//                   <Link href="/login">
//                     <span
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
//                     >
//                       Login
//                     </span>
//                   </Link>
//                 )}
//               </MenuItem>
//             </div>
//           </MenuItems>
//         </Menu>
//       </div>
//     </div>
//   );
// }




"use client";

import Layout from '../components/layout';

export default function LandingPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-10 px-6 mt-10">
        <div className="flex flex-col space-y-2">
          <h1 className="text-4xl font-normal text-black">
            Welcome to the AkiraChix Platform
          </h1>
        </div>
      </div>
    </Layout>
  );
}

