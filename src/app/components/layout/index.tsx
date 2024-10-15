import { useState, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { UserProfile } from '../utils/types';

interface LayoutProps {
  children: ReactNode;
  userProfile: UserProfile;
}

const Layout: React.FC<LayoutProps> = ({ children, userProfile }) => {
  const router = useRouter();
  const [showLogout, setShowLogout] = useState(false);

  const isActive = (path: string): string => {
    return router.pathname === path ? 'text-blue-400' : 'text-black';
  };

  const handleLogout = () => {
    setShowLogout(true);
  };

  const confirmLogout = () => {
    // Implement logout logic here
    router.push('/login');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-between items-center p-4 bg-white">
        <Link href="/">
          <a className="text-2xl italic font-abeezee">AkiraChix</a>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/mentor-profile">
            <a className={`${isActive('/mentor-profile')}`}>Mentor's Profile</a>
          </Link>
          <Link href="/todo">
            <a className={`${isActive('/todo')}`}>To-Do</a>
          </Link>
          <Link href="/goals">
            <a className={`${isActive('/goals')}`}>Goals</a>
          </Link>
          <Link href="/achievements">
            <a className={`${isActive('/achievements')}`}>Achievements</a>
          </Link>
        </div>
        <div className="relative">
          <button onClick={handleLogout} className="w-8 h-8 bg-gray-300 rounded-full"></button>
          {showLogout && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              <button onClick={confirmLogout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                Logout
              </button>
              <button onClick={() => setShowLogout(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                Cancel
              </button>
            </div>
          )}
        </div>
      </nav>
      <main className="flex-grow p-4">
        {children}
      </main>
      <footer className="bg-white p-4 text-center text-sm">
        <p>© AkiraChix 2024. All Rights Reserved</p>
        <p>Signed in as: {userProfile.email}</p>
        <p>Geolocation: {userProfile.location}</p>
      </footer>
    </div>
  );
};

export default Layout;