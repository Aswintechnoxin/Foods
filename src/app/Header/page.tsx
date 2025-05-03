import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, GraduationCap } from 'lucide-react'
import MobileMenu from '../Mobilemenu/page'

export default function Header () {
  return (
    <header className='top-0 z-50 sticky bg-white shadow-md w-full'>
      <div className='flex justify-between items-center mx-auto px-4 py-3'>
        <Link href='/' className='font-bold text-xl'>
          <Image
            src='/logo/logo.webp'
            alt='Logo'
            width={150}
            height={150}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <nav className='hidden md:flex space-x-6 mt-2'>
          <Link href='/' className='pt-4 hover:text-blue-600'>
            Home
          </Link>
          <Link href='/about' className='pt-4 hover:text-blue-600'>
            About Us
          </Link>
          <div className='group relative'>
            <button className='flex items-center pt-4 hover:text-blue-600'>
              Courses <ChevronDown size={16} className='ml-1' />
            </button>
            <div className='hidden left-0 absolute group-hover:flex flex-col bg-white shadow-lg mt-1 py-1 rounded-md w-40'>
              <Link
                href='/certificate'
                className='block hover:bg-gray-100 px-4 py-2'
              >
                Certificate
              </Link>
              <Link
                href='/diploma'
                className='block hover:bg-gray-100 px-4 py-2'
              >
                Diploma
              </Link>
            </div>
          </div>
          <Link href='/blog' className='pt-4 hover:text-blue-600'>
            Blog
          </Link>
          <Link href='/gallery' className='pt-4 hover:text-blue-600'>
            Gallery
          </Link>
          <Link href='/contact' className='pt-4 hover:text-blue-600'>
            Contact Us
          </Link>

          <Link
            href='/allcourse'
            className='flex gap-3 bg-red-700 mb-2 pt-3 pr-[30px] pb-3 pl-[30px] rounded-[30px] text-white'
          >
            <div>
              <GraduationCap />
            </div>
            <div className='pl-2 border-l'> Find Program</div>
          </Link>
        </nav>

        {/* Mobile Menu Button (handled in client component) */}
        <MobileMenu />
      </div>
    </header>
  )
}
