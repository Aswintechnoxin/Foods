"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, ChevronRight, ChevronLeft, Menu } from "lucide-react";

export default function MobileHeader() {
  const [submenuOpen, setSubmenuOpen] = useState<string | null>(null);
  const [subSubmenuOpen, setSubSubmenuOpen] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(true)} className="lg:hidden text-black">
        <Menu size={24} />
      </button>

      {/* Mobile Nav (No Changes) */}
      {isOpen && (
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -200, opacity: 0 }}
          className="z-50 fixed inset-0 bg-opacity-50"
        >
          <motion.div className="relative bg-white shadow-lg p-5 w-64 h-full text-black">
            <button
              onClick={() => setIsOpen(false)}
              className="top-4 right-4 absolute text-black text-2xl"
            >
              <X size={24} />
            </button>

            {/* Back Buttons */}
            {submenuOpen && !subSubmenuOpen && (
              <button
                onClick={() => setSubmenuOpen(null)}
                className="top-4 left-4 absolute text-black text-2xl"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {subSubmenuOpen && (
              <button
                onClick={() => setSubSubmenuOpen(null)}
                className="top-4 left-4 absolute text-black text-2xl"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}
            <nav className="flex flex-col space-y-4 mt-12">
              {!submenuOpen && !subSubmenuOpen && (
                <>
                  <Link href="/" className="mobile-nav-link">
                    Home
                  </Link>
                  <Link href="/about" className="mobile-nav-link">
                    About Us
                  </Link>
                  <button
                    onClick={() => setSubmenuOpen("services")}
                    className="flex justify-between items-center mobile-nav-link"
                  >
                    Services <ChevronRight size={16} />
                  </button>
                  <button
                    onClick={() => setSubmenuOpen("products")}
                    className="flex justify-between items-center mobile-nav-link"
                  >
                    Products <ChevronRight size={16} />
                  </button>
                  <Link href="/portfolio" className="mobile-nav-link">
                    Portfolio
                  </Link>
                  <Link href="/blog" className="mobile-nav-link">
                    Blogs
                  </Link>
                  <Link href="/contact" className="mobile-nav-link">
                    Contact Us
                  </Link>
                </>
              )}

              {/* Services Submenu */}
              {submenuOpen === "services" && !subSubmenuOpen && (
                <>
                  <Link href="/service-1" className="submenu-link">
                    Service 1
                  </Link>
                  <Link href="/service-2" className="submenu-link">
                    Service 2
                  </Link>
                  <button
                    onClick={() => setSubSubmenuOpen("service-details")}
                    className="flex justify-between items-center submenu-link"
                  >
                    Service 3 <ChevronRight size={16} />
                  </button>
                </>
              )}

              {/* Products Submenu */}
              {submenuOpen === "products" && !subSubmenuOpen && (
                <>
                  <Link href="/product-1" className="submenu-link">
                    Product 1
                  </Link>
                  <Link href="/product-2" className="submenu-link">
                    Product 2
                  </Link>
                  <button
                    onClick={() => setSubSubmenuOpen("product-details")}
                    className="flex justify-between items-center submenu-link"
                  >
                    Product 3 <ChevronRight size={16} />
                  </button>
                </>
              )}

              {/* Nested Services Submenu */}
              {subSubmenuOpen === "service-details" && (
                <>
                  <Link href="/service-3-1" className="submenu-link">
                    Service 3.1
                  </Link>
                  <Link href="/service-3-2" className="submenu-link">
                    Service 3.2
                  </Link>
                </>
              )}

              {/* Nested Products Submenu */}
              {subSubmenuOpen === "product-details" && (
                <>
                  <Link href="/product-3-1" className="submenu-link">
                    Product 3.1
                  </Link>
                  <Link href="/product-3-2" className="submenu-link">
                    Product 3.2
                  </Link>
                </>
              )}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
