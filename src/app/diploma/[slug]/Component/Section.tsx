import Image from "next/image";
import { CiUser } from "react-icons/ci";

export default function Section() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4">
      {/* Left: Form */}
      <div className="md:col-span-4">
        <div className="bg-white shadow-md rounded-[2.2rem] p-8 text-black space-y-6 max-w-md mx-auto">
          <h3 className="text-2xl font-semibold leading-snug text-center">
            Enroll today and don’t<br />miss out!
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Enter Course"
              className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="tel"
              placeholder="Phone No"
              className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-3 rounded-full"
            >
              Apply Today
            </button>
          </form>
        </div>
      </div>

      {/* Right: Content */}
      <div className="md:col-span-8">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white">
            <div className="rounded-lg overflow-hidden shadow-lg relative w-full h-[300px]">
              <Image
                src="/banner.jpg"
                alt="Popular Paramedical Courses"
                fill
                className="object-cover rounded-t-lg"
              />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">Popular Paramedical Courses</h2>

              <div className="flex flex-wrap text-sm text-gray-500 mb-4 gap-4">
                <span className="flex items-center gap-1">
                  <CiUser /> By Admin
                </span>
                <span className="flex items-center gap-1">
                  <i className="far fa-calendar" /> 2/4/2025
                </span>
              </div>

              <p className="mb-4 text-gray-700">
                Paramedical courses focus on providing theoretical knowledge and practical training in medical fields other than medicine and nursing...
              </p>

              <h4 className="text-xl font-semibold mb-2">Why Choose a Career in Paramedics?</h4>
              <ul className="pl-5 space-y-1 mb-4 text-gray-700 list-disc">
                <li>High Demand – Increasing opportunities with expanding healthcare systems</li>
                <li>Diverse Career Opportunities – Work in labs, hospitals, emergency units, and more</li>
                <li>Job Satisfaction – Help others and make a difference</li>
                <li>Global Scope – Opportunities abroad due to global recognition</li>
              </ul>

              <h4 className="text-xl font-semibold mb-2">Popular Career Paths in Paramedics</h4>
              <ul className="pl-5 space-y-1 mb-4 text-gray-700 list-disc">
                <li><b>Medical Laboratory Technician</b> – Analyzes samples to help diagnose diseases</li>
                <li><b>Radiology Technician</b> – Specializes in imaging like X-rays, MRIs</li>
                <li><b>Emergency Medical Technician (EMT)</b> – Provides emergency care and transport</li>
                <li><b>Physiotherapist</b> – Helps patients recover through therapy and exercise</li>
                <li><b>Occupational Therapist</b> – Helps regain functional daily living skills</li>
              </ul>

              <h4 className="text-xl font-semibold mb-2">Advantages of Paramedical Courses</h4>
              <ul className="pl-5 space-y-1 mb-4 text-gray-700 list-disc">
                <li>Shorter course duration compared to medical degrees</li>
                <li>Affordable fees with high return on investment</li>
                <li>Hands-on training and real-world experience</li>
                <li>Wide variety of specializations</li>
              </ul>

              <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-600">
                <p>&quot;To care for those who once cared for us is one of the highest honors.&quot;</p>
                <p className="text-sm font-light mt-1">– Tia Walker</p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
