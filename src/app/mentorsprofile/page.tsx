// import Image from 'next/image';

// export default function MentorProfile() {
//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       {/* Header */}
//       <header className="flex justify-between items-center border-b-2 border-gray-200 pb-4">
//         <div className="text-2xl font-bold">
//           <span className="text-blue-600">Akira</span><span className="text-orange-500">Chix</span>
//         </div>
//         <nav className="space-x-4 text-blue-600">
//           <a href="#" className="hover:underline">Mentor’s Profile</a>
//           <a href="#" className="hover:underline">To-Do</a>
//           <a href="#" className="hover:underline">Goals</a>
//           <a href="#" className="hover:underline">Achievements</a>
//         </nav>
//         <div className="w-8 h-8">
//           <Image
//             src="/icons/user.svg"
//             alt="User Icon"
//             width={32}
//             height={32}
//             className="rounded-full"
//           />
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="text-center mt-10">
//         <div className="flex flex-col items-center">
//           <Image
//             src="/images/rose.png" // Replace with the actual image path
//             alt="Ms. Rose Kivuva"
//             className="rounded-full border-4 border-gray-200"
//             width={150}
//             height={150}
//           />
//           <h2 className="mt-4 text-3xl font-bold">
//             Ms. Rose <span className="text-blue-600">Kivuva</span>
//           </h2>

//           <div className="mt-6 text-left space-y-2">
//             <p><span className="font-bold text-blue-600">Profession:</span> Software Developer</p>
//             <p><span className="font-bold text-blue-600">Place of Work:</span> Parksmith Limited</p>
//             <p><span className="font-bold text-blue-600">Nationality:</span> Kenyan</p>
//             <p><span className="font-bold text-blue-600">Interests:</span> Designing, Singing, Hiking</p>
//           </div>

//           <p className="mt-6 text-lg leading-relaxed max-w-2xl">
//             I pay close attention to detail as a software developer. What truly captivates me is
//             crafting immersive experiences that go beyond barriers and deliver meaningful encounters
//             for diverse audiences.
//           </p>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="mt-16 border-t-2 border-gray-200 pt-4 text-center">
//         <p className="text-gray-500">&copy; AkiraChix 2024. All Rights Reserved</p>
//         <p className="text-sm text-gray-500 mt-2">
//           Signed in as: <a href="mailto:info@akirachix.org" className="text-blue-600 hover:underline">info@akirachix.org</a> <br />
//           Geolocation: Nairobi, Kenya
//         </p>
//       </footer>

//       {/* Tailwind CSS Classes for Responsiveness */}
//       <style jsx>{`
//         @media (min-width: 640px) {
//           .main-content {
//             margin-top: 20px;
//           }
//         }
//         @media (min-width: 768px) {
//           .main-content {
//             margin-top: 30px;
//           }
//         }
//         @media (min-width: 1024px) {
//           .main-content {
//             margin-top: 40px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



import Layout from '../components/layout';
import Image from 'next/image';

export default function MentorProfile() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl mb-6">Mentor's Profile</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6">
            <Image
              src="/mentor-profile.jpg"
              alt="Ms. Rose Kivuva"
              width={192}
              height={192}
              layout="responsive"
            />
          </div>
          <div>
            <h2 className="text-xl mb-2">Ms. Rose Kivuva</h2>
            <p className="mb-2"><strong>Profession:</strong> Software Developer</p>
            <p className="mb-2"><strong>Place of Work:</strong> Parksmith Limited</p>
            <p className="mb-2"><strong>Nationality:</strong> Kenyan</p>
            <p className="mb-2"><strong>Interests:</strong> Designing, Singing, Hiking</p>
            <p className="mt-4">
              I pay close attention to detail as a software developer. What truly captivates me is
              crafting immersive experiences that go beyond barriers and deliver meaningful
              encounters for diverse audiences.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}