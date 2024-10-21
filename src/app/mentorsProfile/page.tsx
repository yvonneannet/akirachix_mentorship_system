// import Layout from '../components/layout';
// import Image from 'next/image';
// import { ABeeZee } from 'next/font/google';

// const aBeeZee = ABeeZee({ weight: '400', subsets: ['latin'] });

// export default function MentorsProfile() {
//   return (
//     <Layout userProfile={undefined}>
//       <div className={`max-w-4xl mx-auto py-10 ${aBeeZee.className}`}>
        
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-medium mt-20 text-black">Mentor's Profile</h1>
//         </div>

        
//         <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-36">
       
//           <div className="flex flex-col items-center md:items-start">
//             <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400 mb-4">
//               <Image
//                 src="/images/roseKivuva.jpeg"
//                 alt="Ms. Rose Kivuva"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>

         
//             <h2 className="text-2xl font-medium text-center md:text-left">
//               Ms. <span className="text-black">Rose</span>{' '}
//               <span className="text-blue-400">Kivuva</span>
//             </h2>
//           </div>

         
//           <div className="text-lg md:text-left text-center mt-7">
//             <p className="mb-2">
//               <span className="font-semibold text-blue-400">Profession:</span>{' '}
//               Software Developer
//             </p>
//             <p className="mb-2">
//               <span className="font-semibold text-blue-400">Place of Work:</span>{' '}
//               Parksmith Limited
//             </p>
//             <p className="mb-2">
//               <span className="font-semibold text-blue-400">Nationality:</span>{' '}
//               Kenyan
//             </p>
//             <p className="mb-2">
//               <span className="font-semibold text-blue-400">Interests:</span>{' '}
//               Designing, Singing, Hiking
//             </p>
//           </div>
//         </div>

        
//         <div className="mt-10">
//           <p className="text-center leading-7 max-w-2xl mx-auto">
//             "I pay close attention to detail as a software developer. What truly captivates me is crafting 
//             immersive experiences that go beyond barriers and deliver meaningful encounters for diverse audiences."
//           </p>
//         </div>
//       </div>
//     </Layout>
//   );
// }





import Layout from '../components/layout';
import Image from 'next/image';
import { ABeeZee } from 'next/font/google';

const aBeeZee = ABeeZee({ weight: '400', subsets: ['latin'] });

export default function MentorsProfile() {
  return (
    <Layout userProfile={undefined}>
      <div className={`max-w-4xl mx-auto py-10 ${aBeeZee.className}`}>
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-medium mt-20 text-black">Mentor&apos;s Profile</h1>
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
            &quot;I pay close attention to detail as a software developer. What truly captivates me is crafting 
            immersive experiences that go beyond barriers and deliver meaningful encounters for diverse audiences.&quot;
          </p>
        </div>
      </div>
    </Layout>
  );
}









// import Layout from '../components/layout';
// import Image from 'next/image';
// import { ABeeZee } from 'next/font/google';

// const aBeeZee = ABeeZee({ weight: '400', subsets: ['latin'] });

// export default function MentorsProfile() {
//   return (
//     <Layout userProfile={undefined}>
//       <div className="max-w-4xl mx-auto py-10">
        
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-medium mt-20 text-black">Mentor’s Profile</h1>
//         </div>

        
//         <div className="flex flex-col md:flex-row items-center justify-center md:items-start gap-36">
       
//           <div className="flex flex-col items-center md:items-start">
//             <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-400 mb-4">
//               <Image
//                 src="/images/roseKivuva.jpeg"
//                 alt="Ms. Rose Kivuva"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>

         
//             <h2 className="text-2xl font-medium text-center md:text-left">
//               Ms. <span className="text-black">Rose</span>{' '}
//               <span className="text-blue-400">Kivuva</span>
//             </h2>
//           </div>

         
//           <div className="text-lg md:text-left text-center mt-7">
//             <p className="mb-2">
//               <span className="font-semibold text-blue-400">Profession:</span>{' '}
//               Software Developer
//             </p>
//             <p className="mb-2">
//               <span className="font-semibold text-blue-400">Place of Work:</span>{' '}
//               Parksmith Limited
//             </p>
//             <p className="mb-2">
//               <span className="font-semibold text-blue-400">Nationality:</span>{' '}
//               Kenyan
//             </p>
//             <p className="mb-2">
//               <span className="font-semibold text-blue-400">Interests:</span>{' '}
//               Designing, Singing, Hiking
//             </p>
//           </div>
//         </div>

        
//         <div className="mt-10">
//           <p className="text-center leading-7 max-w-2xl mx-auto">
//             “I pay close attention to detail as a software developer. What truly captivates me is crafting 
//             immersive experiences that go beyond barriers and deliver meaningful encounters for diverse audiences.”
//           </p>
//         </div>
//       </div>
//     </Layout>
//   );
// }



// "use client";

// import Layout from '../components/layout';
// import Image from 'next/image';

// export default function MentorsProfile() {
//   return (
//     <Layout>
//       <div className="max-w-7xl mx-auto flex flex-col items-center py-10 px-6 mt-10 space-y-8">
//         <h1 className="text-4xl font-normal text-black">Mentor&apos;s Profile</h1>

//         <div className="w-full flex justify-between items-center">
//           <div className="relative w-1/3 h-64 rounded-xl overflow-hidden">
//             <Image
//               src="/mentor-photo.jpg"
//               alt="Mentor"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>

//           <div className="flex flex-col space-y-4 w-2/3">
//             <p className="text-lg">
//               Meet our mentor, who has been guiding and supporting students through their learning journey.
//             </p>
//             <p className="text-lg">With extensive experience in tech, they bring valuable insights to help you grow.</p>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// }




