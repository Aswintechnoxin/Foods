import Image from 'next/image'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUniversity,
  FaAngleRight
} from 'react-icons/fa'

export default function Footer() {
  return (
    <>
      <footer className='bg-white mt-10 px-6 py-8'>
        <div className='gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto text-[15px] container-fluid'>
          {/* Left Section */}
          <div>
            <Image src='/logo/logo.webp' alt='Minerva Logo' width={150} height={150} className='mb-4 h-12' />
            <p className='mb-4 text-gray-600'>
              Enhance Your Skills With A Fresh Approach To Learning.
            </p>
            <div className='flex items-center mb-2'>
              <div className='bg-red-500 mr-2 p-2 rounded-full text-white'>
                <FaPhoneAlt />
              </div>
              <span className='text-gray-700'>+91 9585965000</span>
            </div>
            <div className='flex items-center'>
              <div className='bg-red-500 mr-2 p-2 rounded-full text-white'>
                <FaEnvelope />
              </div>
              <span className='text-gray-700'>
                academicdirector.minerva@gmail.com
              </span>
            </div>
          </div>

          {/* Middle Section */}
          <div>
            <h3 className='inline-block mb-2 border-red-500 border-b-2 font-semibold text-lg'>
              Quick Links
            </h3>
            <ul className='space-y-2 mt-2 text-[15px] text-gray-600'>
              <li className='flex items-center'>
                <FaAngleRight className='mr-2 text-gray-600' />
                <a href='#' className='hover:text-red-500'>
                  Home
                </a>
              </li>
              <li className='flex items-center'>
                <FaAngleRight className='mr-2 text-gray-600' />
                <a href='#' className='hover:text-red-500'>
                  About Us
                </a>
              </li>
              <li className='flex items-center'>
                <FaAngleRight className='mr-2 text-gray-600' />
                <a href='#' className='hover:text-red-500'>
                  Courses
                </a>
              </li>
              <li className='flex items-center'>
                <FaAngleRight className='mr-2 text-gray-600' />
                <a href='#' className='hover:text-red-500'>
                  Blog
                </a>
              </li>
              <li className='flex items-center'>
                <FaAngleRight className='mr-2 text-gray-600' />
                <a href='#' className='hover:text-red-500'>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className='inline-block mb-2 border-red-500 border-b-2 font-semibold text-lg'>
              Address
            </h3>
            <div className='flex items-center mb-2 text-[15px] text-gray-600'>
              <FaMapMarkerAlt className='mr-2 text-red-500' />
              <span>
                416/4, Sathy Main Road, Ganapathy, Coimbatore, Tamil Nadu –
                641006.
              </span>
            </div>
            <div className='flex items-center text-[15px] text-gray-600'>
              <FaUniversity className='mr-2 text-red-500' />
              <span>Land Mark: Near C.M.S Matriculation School, Ganapathy.</span>
            </div>
            <div className='mt-4 text-[15px]'>
              <a href='#' className='text-gray-600 hover:text-red-500'>
                Privacy Policy
              </a>{' '}
              |
              <a href='#' className='text-gray-600 hover:text-red-500'>
                {' '}
                Terms and Conditions
              </a>
            </div>
          </div>
        </div>

      </footer>
      {/* Bottom Section */}
      <div className='flex justify-between bg-gray-100 mt-6 p-2 pt-4 text-[15px] text-gray-600 text-center'>
        <p className='lg:pl-[30px]'>
          Copyright &copy; 2025. All Rights Reserved By
          <span className='font-semibold text-dark underline'> Minerva</span>
        </p>
        <p className='lg:pr-[30px] text-[15px] text-sm'>
          Designed by
          <span className='font-semibold text-dark'>
            <a href='https://technox.in/' className='underline' target='_blank'>
              Technox
            </a>
          </span>
        </p>
      </div>
    </>
  )
}
