"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./about.css";

const faqs = [
  {
    question: "What are the eligibility criteria for paramedical courses?",
    answer:
      "The eligibility criteria may vary depending on the course, but generally, you need to have completed high school with science subjects and meet minimum grade requirements.",
  },
  {
    question: "What is the duration of paramedical courses?",
    answer:
      "Paramedical courses typically range from 6 months to 2 years, depending on the level of the program and the specialization you choose.",
  },
  {
    question: "How can I apply for paramedical courses?",
    answer:
      "You can apply online through the Minerva Institute of Paramedical Science official portal or visit the campus for offline application submission.",
  },
  {
    question: "Is there any scholarship available for paramedical students?",
    answer:
      "Yes, we offer various scholarships based on merit and financial need. You can apply for scholarships during the admission process.",
  },
  {
    question:
      "What career opportunities are available after completing paramedical courses?",
    answer:
      "Graduates of paramedical courses can work in hospitals, clinics, rehabilitation centers, health insurance companies, or even as independent healthcare practitioners in various specializations.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(2);
  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-cover bg-center py-16 px-4 sm:px-6 md:px-10"
      style={{ backgroundImage: "url('/assets/img/bg/testi-bg-1-1.jpg')" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-8">
            <div className="mb-8 text-center lg:text-left">
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-widest">
                ASKED QUESTIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
                Academic Faq's
              </h2>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="accordion-item border border-gray-300 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggle(index)}
                    className={`w-full flex items-center gap-3 text-left p-4 font-medium text-base md:text-lg transition-all ${
                      openIndex === index ? "bg-gray-100" : "bg-gray-50"
                    }`}
                  >
                    <span className="text-gray-600">
                      {openIndex === index ? <FaMinus /> : <FaPlus />}
                    </span>
                    {faq.question}
                  </button>
                  {openIndex === index && (
                    <div className="p-4 text-gray-700 bg-white text-sm md:text-base">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-700 text-center lg:text-left">
              Have more questions?{" "}
              <Link href="/contact" className="text-blue-600 underline">
                Contact us
              </Link>
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-8">
            {/* Image Box */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-[250px] md:h-[300px]">
              <Image
                src="/about-2-4.webp"
                alt="About"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-6 text-center">
                <h3 className="text-lg md:text-xl font-semibold mb-4">
                  Online Course Registration
                </h3>
                <Link
                  href="/contact"
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm md:text-base"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-indigo-900 rounded-2xl p-6 text-white relative overflow-hidden">
              <div className="absolute  right-6 bg-yellow-400 rounded-full h-14 w-14 flex items-center justify-center shadow-md">
                <Image
                  src="/user-icon.svg"
                  alt="Icon"
                  width={30}
                  height={30}
                />
              </div>
              <h5 className="text-2xl font-bold mb-6 mt-6">Admission Process</h5>
              <a
                href="tel:+919585965000"
                className="block font-semibold mb-4 hover:underline"
              >
                +91 9585965000
              </a>
              <a
                href="mailto:academicdirector.minerva@gmail.com"
                className="block hover:underline text-sm md:text-base"
              >
                academicdirector.minerva@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
