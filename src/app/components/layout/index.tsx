"use client";
import { useState, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { UserProfile } from '@/app/utils/types';

interface LayoutProps {
  children: ReactNode;
  userProfile?: UserProfile;
}

const Layout: React.FC<LayoutProps> = ({ children, userProfile }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const isActive = (path: string): string => {
    return pathname === path ? 'text-blue-400' : 'text-black';
  };

  const handleLogout = () => {
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
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-between items-center p-4 bg-white">
        <Link href="/" className="text-2xl italic font-abeezee">
          AkiraChix
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/mentorsProfile" className={`${isActive('/mentorsprofile')}`}>
            Mentor's Profile
          </Link>
          <Link href="/to-do" className={`${isActive('/todo')}`}>
            To-Do
          </Link>
          <Link href="/goals" className={`${isActive('/goals')}`}>
            Goals
          </Link>
          <Link href="/achievements" className={`${isActive('/achievements')}`}>
            Achievements
          </Link>
        </div>
        <div className="relative">
          <button onClick={handleLogout} className="w-8 h-8 bg-gray-300 rounded-full"></button>
        </div>
      </nav>
      <main className="flex-grow p-4">
        {children}
      </main>
      <footer className="bg-white p-4 text-center text-sm">
        <p>© AkiraChix 2024. All Rights Reserved</p>
        {userProfile && (
          <>
            <p>Signed in as: {userProfile.email}</p>
            <p>Geolocation: {userProfile.location}</p>
          </>
        )}
      </footer>

      {/* Logout Confirmation Modal */}
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