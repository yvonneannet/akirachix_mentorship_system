

import Layout from '../components/layout';
import Image from 'next/image';
import { ABeeZee } from 'next/font/google';

const aBeeZee = ABeeZee({ weight: '400', subsets: ['latin'] });

export default function MentorsProfile() {
  return (
    <Layout userProfile={undefined}>
      <div className="max-w-4xl mx-auto py-10">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-medium mt-20 text-black">Mentor’s Profile</h1>
        </div>

        
        <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-36">
       
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400 mb-4">
              <Image
                src="/images/roseKivuva.jpeg"
                alt="Ms. Rose Kivuva"
                layout="fill"
                objectFit="cover"
              />
            </div>

         
            <h2 className="text-2xl font-medium text-center md:text-left">
              Ms. <span className="text-black">Rose</span>{' '}
              <span className="text-blue-400">Kivuva</span>
            </h2>
          </div>

         
          <div className="text-lg md:text-left text-center mt-7">
            <p className="mb-2">
              <span className="font-semibold text-blue-400">Profession:</span>{' '}
              Software Developer
            </p>
            <p className="mb-2">
              <span className="font-semibold text-blue-400">Place of Work:</span>{' '}
              Parksmith Limited
            </p>
            <p className="mb-2">
              <span className="font-semibold text-blue-400">Nationality:</span>{' '}
              Kenyan
            </p>
            <p className="mb-2">
              <span className="font-semibold text-blue-400">Interests:</span>{' '}
              Designing, Singing, Hiking
            </p>
          </div>
        </div>

        
        <div className="mt-10">
          <p className="text-center leading-7 max-w-2xl mx-auto">
            “I pay close attention to detail as a software developer. What truly captivates me is crafting 
            immersive experiences that go beyond barriers and deliver meaningful encounters for diverse audiences.”
          </p>
        </div>
      </div>
    </Layout>
  );
}




