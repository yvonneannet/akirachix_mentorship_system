
"use client";

import Layout from '../components/layout';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ABeeZee } from 'next/font/google';

const aBeeZee = ABeeZee({ weight: '400', subsets: ['latin'] });

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
      <div className={`${aBeeZee.className}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-10 px-6 mt-10">
          {/* Text section */}
          <div className="flex flex-col space-y-2 mb-6 md:mb-0 md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-normal text-black">
              {greeting}, <span className="font-bold text-blue-500">{username || 'Guest'}.</span>
            </h1>
          </div>

          {/* Image */}
          <div className="relative w-full h-64 md:w-1/2 md:h-96 rounded-xl overflow-hidden">
            <Image
              src="/mentoring women.webp"
              alt="Mentorship session"
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
          </div>
        </div>

        <p className="text-center text-lg mt-8 leading-7 max-w-2xl mx-auto">
          &quot;Mentorship is the key to unlocking potential in each individual. A guide through life&apos;s twists and turns.&quot;
        </p>
      </div>
    </Layout>
  );
}


