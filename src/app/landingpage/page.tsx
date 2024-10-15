import Image from 'next/image'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <Image
        src="/images/mentorship2.avif"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the AkiraChix Mentorship System</h1>
        <p className="mb-8 max-w-2xl">
          This program enhances the student experience by linking them one-on-one with an alumni who acts as a
          peer mentor. Get paired with someone invested in your success —
          a person ready to listen, inspire, help navigate challenges, and recognize opportunities.
        </p>
        <Link href="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Get Started
        </Link>
      </div>
    </div>
  )
}