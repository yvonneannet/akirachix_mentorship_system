// "use client";
// import { useState } from 'react';
// import { useRouter, usePathname } from 'next/navigation';
// import Link from 'next/link';
// import { ABeeZee } from 'next/font/google';

// const abeezee = ABeeZee({
//   weight: '400',
//   subsets: ['latin'],
// });

// interface LayoutProps {
//   children: React.ReactNode;
//   userProfile?: {
//     email: string;
//     location: string;
//   };
// }

// const Layout: React.FC<LayoutProps> = ({ children, userProfile }) => {
//   const router = useRouter();
//   const pathname = usePathname();

//   const [showProfileMenu, setShowProfileMenu] = useState(false);
//   const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
//   const [showMobileMenu, setShowMobileMenu] = useState(false);

//   const isActive = (path: string) => {
//     return pathname === path
//       ? 'text-white bg-blue-500 px-4 py-2 rounded-md transition-all'
//       : 'text-black hover:bg-gray-200 px-4 py-2 rounded-md transition-all';
//   };

//   const toggleProfileMenu = () => {
//     setShowProfileMenu(!showProfileMenu);
//   };

//   const toggleMobileMenu = () => {
//     setShowMobileMenu(!showMobileMenu);
//   };

//   const handleLogout = () => {
//     setShowProfileMenu(false);
//     setShowLogoutConfirmation(true);
//   };

//   const confirmLogout = () => {
//     localStorage.removeItem('userToken');
//     router.push('/login');
//   };

//   const cancelLogout = () => {
//     setShowLogoutConfirmation(false);
//   };

//   return (
//     <div className={`flex flex-col min-h-screen ${abeezee.className}`}>
//       <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
//         <p className="text-3xl font-abeezee text-black italic ml-6">
//           <span className="text-black">Akira</span>
//           <span className="text-blue-500">Chix</span>
//         </p>

//         <div className="md:hidden">
//           <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>

//         <div className="hidden md:flex justify-between w-1/2 text-lg font-abeezee items-center">
//           <Link href="/homepage" className={isActive('/homepage')}>Home</Link>
//           <Link href="/mentorsProfile" className={isActive('/mentorsProfile')}>
//             Mentor&apos;s Profile
//           </Link>
//           <Link href="/to-do" className={isActive('/to-do')}>To-Do</Link>
//           <Link href="/goals" className={isActive('/goals')}>Goals</Link>
//           <Link href="/achievements" className={isActive('/achievements')}>
//             Achievements
//           </Link>
//         </div>

//         <div className="relative mr-6">
//           <button
//             onClick={toggleProfileMenu}
//             className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className="w-6 h-6 text-gray-700"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z"
//               />
//             </svg>
//           </button>

//           {showProfileMenu && (
//             <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
//               {userProfile && (
//                 <div className="mb-4">
//                   <p className="text-sm text-gray-700">{userProfile.email}</p>
//                   <p className="text-sm text-gray-500">{userProfile.location}</p>
//                 </div>
//               )}
//               <button
//                 onClick={handleLogout}
//                 className="w-full text-left text-red-600 hover:bg-gray-100 p-2 rounded-md"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </nav>

//       {showMobileMenu && (
//         <div className="md:hidden bg-white shadow-md">
//           <div className="flex flex-col items-start px-6 py-4">
//             <Link href="/homepage" className={isActive('/homepage')} onClick={() => setShowMobileMenu(false)}>Home</Link>
//             <Link href="/mentorsProfile" className={isActive('/mentorsProfile')} onClick={() => setShowMobileMenu(false)}>
//               Mentor&apos;s Profile
//             </Link>
//             <Link href="/to-do" className={isActive('/to-do')} onClick={() => setShowMobileMenu(false)}>To-Do</Link>
//             <Link href="/goals" className={isActive('/goals')} onClick={() => setShowMobileMenu(false)}>Goals</Link>
//             <Link href="/achievements" className={isActive('/achievements')} onClick={() => setShowMobileMenu(false)}>
//               Achievements
//             </Link>
//           </div>
//         </div>
//       )}

//       <main className="flex-grow">{children}</main>

//       <footer className="bg-gray-900 text-white p-6 text-center text-sm flex flex-col items-center space-y-2">
//         <p>
//           © <span className="text-blue-500">AkiraChix</span> 2024. All Rights Reserved
//         </p>
//         {userProfile && (
//           <p>
//             Signed in as: <span className="text-blue-500">{userProfile.email}</span>
//             <br />
//             Geolocation: {userProfile.location}
//           </p>
//         )}
//       </footer>

//       {showLogoutConfirmation && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
//             <p className="mb-4">Are you sure you want to log out?</p>
//             <div className="flex justify-end space-x-4">
//               <button
//                 onClick={cancelLogout}
//                 className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={confirmLogout}
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Layout;







"use client";
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { ABeeZee } from 'next/font/google';

const abeezee = ABeeZee({
  weight: '400',
  subsets: ['latin'],
});

interface LayoutProps {
  children: React.ReactNode;
  userProfile?: {
    email: string;
    location: string;
  };
}

const Layout: React.FC<LayoutProps> = ({ children, userProfile }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const isActive = (path: string) => {
    return pathname === path
      ? 'text-white bg-blue-500 px-4 py-2 rounded-md transition-all'
      : 'text-black hover:bg-gray-200 px-4 py-2 rounded-md transition-all';
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleLogout = () => {
    setShowProfileMenu(false);
    setShowLogoutConfirmation(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('userToken');
    router.push('/login');
  };

  const cancelLogout = () => {
    setShowLogoutConfirmation(false);
  };

  return (
    <div className={`flex flex-col min-h-screen ${abeezee.className}`}>
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <p className="text-3xl font-abeezee text-black italic">
          <span className="text-black">Akira</span>
          <span className="text-blue-500">Chix</span>
        </p>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-700 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg font-abeezee items-center">
          <Link href="/homepage" className={isActive('/homepage')}>Home</Link>
          <Link href="/mentorsProfile" className={isActive('/mentorsProfile')}>Mentor&apos;s Profile</Link>
          <Link href="/to-do" className={isActive('/to-do')}>To-Do</Link>
          <Link href="/goals" className={isActive('/goals')}>Goals</Link>
          <Link href="/achievements" className={isActive('/achievements')}>Achievements</Link>
        </div>

        {/* Profile Icon */}
        <div className="relative">
          <button
            onClick={toggleProfileMenu}
            className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z"
              />
            </svg>
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
              {userProfile && (
                <div className="mb-4">
                  <p className="text-sm text-gray-700">{userProfile.email}</p>
                  <p className="text-sm text-gray-500">{userProfile.location}</p>
                </div>
              )}
              <button
                onClick={handleLogout}
                className="w-full text-left text-red-600 hover:bg-gray-100 p-2 rounded-md"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-start px-6 py-4 space-y-2">
            <Link href="/homepage" className={isActive('/homepage')} onClick={() => setShowMobileMenu(false)}>Home</Link>
            <Link href="/mentorsProfile" className={isActive('/mentorsProfile')} onClick={() => setShowMobileMenu(false)}>
              Mentor&apos;s Profile
            </Link>
            <Link href="/to-do" className={isActive('/to-do')} onClick={() => setShowMobileMenu(false)}>To-Do</Link>
            <Link href="/goals" className={isActive('/goals')} onClick={() => setShowMobileMenu(false)}>Goals</Link>
            <Link href="/achievements" className={isActive('/achievements')} onClick={() => setShowMobileMenu(false)}>
              Achievements
            </Link>
          </div>
        </div>
      )}

      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-6 text-center text-sm flex flex-col items-center space-y-2">
        <p>
          © <span className="text-blue-500">AkiraChix</span> 2024. All Rights Reserved
        </p>
        {userProfile && (
          <p>
            Signed in as: <span className="text-blue-500">{userProfile.email}</span>
            <br />
            Geolocation: {userProfile.location}
          </p>
        )}
      </footer>

      {showLogoutConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Logout</h2>
            <p className="mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={cancelLogout}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
