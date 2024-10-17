"use client";

import Layout from '../components/layout';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [greeting, setGreeting] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }

    const hours = new Date().getHours();
    if (hours < 12) {
      setGreeting('Good Morning');
    } else if (hours < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-10 px-6 mt-10">
        {/* Text section */}
        <div className="flex flex-col space-y-2">
          <h1 className="text-4xl font-normal text-black">
            {greeting}, <span className="font-bold text-blue-500">{username || 'Guest'}.</span>
          </h1>
        </div>

        {/* Image */}
        <div className="relative w-1/2 h-96 rounded-xl overflow-hidden">
          <Image
            src="/illustration.png"
            alt="Welcome"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </Layout>
  );
}
