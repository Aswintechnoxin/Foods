import Image from 'next/image'
import Link from 'next/link'
import { FaPhoneAlt, FaAngleRight } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section className='mx-auto px-4 py-16 container'>
      <div className='items-center gap-10 grid md:grid-cols-2'>
        {/* Left: Image */}
        <div className='mega-hover'>
          <Image
            src='/home/about.webp'
            alt='Student'
            width={600}
            height={500}
            className='rounded-lg w-full'
          />
        </div>

        {/* Right: Content */}
        <div>
          {/* Small Heading */}
          <h5 className='mb-2 font-bold text-red-600 text-sm uppercase'>
            Welcome to Minerva Institute of Paramedical Science
          </h5>

          {/* Big Heading */}
          <h2 className='mb-4 font-bold text-gray-900 text-4xl md:text-5xl leading-tight'>
            Online Coaching <span className='text-red-600'>Class</span>
            <br />
            Next Level
          </h2>

          {/* Description */}
          <p className='mb-6 text-gray-600 text-base leading-relaxed'>
            Our platform offers expert-led courses designed to equip you with
            the skills and knowledge needed for a successful career in the
            paramedical field.
          </p>

          {/* Phone Box */}
          <div className='flex items-center bg-blue-50 shadow-sm mb-6 p-4 border-red-600 border-l-4 rounded-r w-60'>
            <div className='bg-black mr-4 p-3 border-[5px] border-white rounded-full text-white text-lg'>
              <FaPhoneAlt />
            </div>
            <div>
              <p className='text-gray-500 text-sm about-call'>
                Call Anytime 24/7
              </p>
              <Link
                href='tel:9585965000'
                className='font-semibold text-gray-800 text-lg hover:underline'
              >
                +91 9585965000
              </Link>
            </div>
          </div>

          {/* Bullet Points */}
          <div className='space-y-2 mb-6'>
            <div className='flex items-center gap-2 font-medium'>
              <div className='bg-blue-800 p-1 rounded-2xl text-white'>
                <FaAngleRight />
              </div>
              <span>Trusted by Students</span>
            </div>
            <div className='flex items-center gap-2 font-medium'>
              <div className='bg-blue-800 p-1 rounded-2xl text-white'>
                <FaAngleRight />
              </div>
              <span>Expert Instructor</span>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href='#'
            className='inline-flex items-center gap-4 bg-red-700 hover:bg-red-700 px-6 py-3 rounded-full font-semibold text-white transition home-about-btn'
          >
            <div className='bg-blue-700 p-3 rounded-full text-white home-about-btn-icon'>
              <FaAngleRight />
            </div>
            Get More Info
          </Link>
        </div>
      </div>
    </section>
  )
}
