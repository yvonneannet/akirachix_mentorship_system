// import Image from 'next/image'
// import Link from 'next/link'

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <header className="bg-white shadow">
//         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between h-16">
//             <div className="flex">
//               <div className="flex-shrink-0 flex items-center">
//                 <span className="text-2xl font-bold text-blue-600">AkiraChix</span>
//               </div>
//               <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
//                 <Link href="/mentorsprofile" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
//                   Mentor's Profile
//                 </Link>
//                 <Link href="/todo" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
//                   To-Do
//                 </Link>
//                 <Link href="/goals" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
//                   Goals
//                 </Link>
//                 <Link href="/achievements" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
//                   Achievements
//                 </Link>
//               </div>
//             </div>
//             <div className="hidden sm:ml-6 sm:flex sm:items-center">
//               <div className="ml-3 relative">
//                 <div>
//                   <button type="button" className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" id="user-menu" aria-expanded="false" aria-haspopup="true">
//                     <span className="sr-only">Open user menu</span>
//                     <Image className="h-8 w-8 rounded-full" src="/placeholder-avatar.jpg" alt="" width={32} height={32} />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>

//       <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//         <div className="px-4 py-6 sm:px-0">
//           <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex items-center justify-center">
//             <h2 className="text-2xl font-semibold text-gray-700">Good Afternoon, Ouella.</h2>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }






import Layout from '../components/Layout';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl mb-4">Good Afternoon, Quella.</h1>
        <p className="text-blue-400 mb-6">Glad to have you back</p>
        <div className="rounded-lg overflow-hidden">
          <Image
            src="/placeholder-image.jpg"
            alt="Mentorship session"
            width={800}
            height={400}
            layout="responsive"
          />
        </div>
      </div>
    </Layout>
  );
}