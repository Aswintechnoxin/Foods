import Image from "next/image";
import Link from "next/link";
import { CiUser } from "react-icons/ci";

export default function Section() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
      <div className="md:col-span-8">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white">
            <div className="rounded-lg overflow-hidden shadow-lg relative w-full h-100">
              <Image
                src="/banner.jpg"
                alt="Popular Paramedical Courses"
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Popular Paramedical Courses</h2>

              <div className="flex flex-wrap text-sm text-gray-500 mb-4 gap-4">
                <span className="flex items-center gap-1">
                  <CiUser />By Admin
                </span>
                <span className="flex items-center gap-1">
                  <i className="far fa-calendar"></i> 2/4/2025
                </span>
              </div>

              <p className="mb-4 text-gray-700">
                Paramedical courses focus on providing theoretical knowledge and practical training in medical fields other than medicine and nursing. These courses cover a wide range of healthcare services, including diagnostics, rehabilitation, therapy, and emergency medical care. Paramedics are highly skilled professionals who work alongside doctors to diagnose diseases, conduct tests, and provide immediate treatment in emergencies.
              </p>

              <h4 className="text-xl font-semibold mb-2">Why Choose a Career in Paramedics?</h4>
              <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700">
                <li>✔️ High Demand – Increasing opportunities with expanding healthcare systems</li>
                <li>✔️ Diverse Career Opportunities – Work in labs, hospitals, emergency units, and more</li>
                <li>✔️ Job Satisfaction – Help others and make a difference</li>
                <li>✔️ Global Scope – Opportunities abroad due to global recognition</li>
              </ul>

              <h4 className="text-xl font-semibold mb-2">Popular Career Paths in Paramedics</h4>
              <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700">
                <li><b>Medical Laboratory Technician</b> – Analyzes samples to help diagnose diseases</li>
                <li><b>Radiology Technician</b> – Specializes in imaging like X-rays, MRIs</li>
                <li><b>Emergency Medical Technician (EMT)</b> – Provides emergency care and transport</li>
                <li><b>Physiotherapist</b> – Helps patients recover through therapy and exercise</li>
                <li><b>Occupational Therapist</b> – Helps regain functional daily living skills</li>
              </ul>

              <h4 className="text-xl font-semibold mb-2">Advantages of Paramedical Courses</h4>
              <ul className="list-disc pl-5 space-y-1 mb-4 text-gray-700">
                <li>⭐ Shorter course duration compared to medical degrees</li>
                <li>⭐ Affordable fees with high return on investment</li>
                <li>⭐ Hands-on training and real-world experience</li>
                <li>⭐ Wide variety of specializations</li>
              </ul>

              <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600">
                <p>&quot;To care for those who once cared for us is one of the highest honors.&quot;</p>
                <p className="text-sm font-light mt-1">– Tia Walker</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className="md:col-span-4">
        <div className="lg:col-span-4 space-y-8">
          {/* Image Card with Overlay */}
          <div className="relative rounded-[2.2rem] overflow-hidden shadow-lg">
            <Image
              src="/about-2-4.webp"
              alt="About"
              width={500}
              height={300}
              className="w-full h-auto object-cover"
              priority={false}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Online Course Registration</h3>
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="contactinfo bg-white shadow-md rounded-[2.2rem] p-6 relative text-black">
            <div className="absolute right-[33px] text-center bg-yellow-500 rounded-full h-[60px] w-[60px] flex items-center justify-center shadow-md">
              <Image
                src="/user-icon.svg"
                alt="Icon"
                width={40}
                height={40}
              />
            </div>
            <h5 className="font-bold text-3xl mb-[25px]">Admission Process</h5>
            <a href="tel:+919585965000" className="block font-semibold mb-[25px]">
              +91 9585965000
            </a>
            <a href="mailto:academicdirector.minerva@gmail.com" className="block mb-[25px]">
              academicdirector.minerva@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
