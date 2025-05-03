'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MobileMenu () {
  const [isOpen, setIsOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null)
  const [subSubmenuOpen, setSubSubmenuOpen] = useState<string | null>(null)

  return (
    <>
      <button onClick={() => setIsOpen(true)} className='md:hidden'>
        <Menu size={24} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          className='z-50 fixed inset-0 bg-black bg-opacity-50'
        >
          <motion.div className='relative bg-white shadow-lg p-5 w-64 h-full text-black'>
            <button
              onClick={() => setIsOpen(false)}
              className='top-4 right-4 absolute text-black text-2xl'
            >
              <X size={24} />
            </button>

            {/* Navigation Links */}
            <nav className='flex flex-col space-y-4 mt-12'>
              {!submenuOpen && !subSubmenuOpen && (
                <>
                  <Link href='/' className='nav-link'>
                    Home
                  </Link>
                  <Link href='/about' className='nav-link'>
                    About Us
                  </Link>
                  <button
                    onClick={() => setSubmenuOpen('services')}
                    className='flex justify-between items-center nav-link'
                  >
                    Services <ChevronRight size={16} />
                  </button>
                  <Link href='/blog' className='nav-link'>
                    Blogs
                  </Link>
                  <Link href='/contact' className='nav-link'>
                    Contact Us
                  </Link>
                </>
              )}

              {submenuOpen === 'services' && !subSubmenuOpen && (
                <>
                  <Link href='/service-1' className='nav-link'>
                    Service 1
                  </Link>
                  <Link href='/service-2' className='nav-link'>
                    Service 2
                  </Link>
                  <button
                    onClick={() => setSubSubmenuOpen('service-details')}
                    className='flex justify-between items-center nav-link'
                  >
                    Service 3 <ChevronRight size={16} />
                  </button>
                </>
              )}

              {subSubmenuOpen === 'service-details' && (
                <>
                  <Link href='/service-3-1' className='nav-link'>
                    Service 3.1
                  </Link>
                  <Link href='/service-3-2' className='nav-link'>
                    Service 3.2
                  </Link>
                </>
              )}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
