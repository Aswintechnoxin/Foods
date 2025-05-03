'use client';

import Image from 'next/image';
import Link from 'next/link';

const courses = [
  {
    title: 'Certificate In Blood Collection Assistant',
    type: 'Certificate',
    image: '/home/c1.webp',
  }
];

export default function Cards() {
  return (
    <section className="bg-course py-10">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 container mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="rounded-3xl overflow-hidden shadow-md bg-white flex flex-col h-full transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Image */}
            <div className="relative w-full h-56">
              <Image
                src={course.image}
                alt={course.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-3xl h-[100px]"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h5 className="font-semibold mb-2">
                  {course.title}
                </h5>
                <p className="text-gray-600 mb-4">
                  Paramedical courses are designed to train students in specialized areas of healthcare.
                </p>
              </div>

              {/* Button */}
              <Link href="/courses" className="inline-flex items-center gap-2 px-5 py-2 border border-red-600 rounded-full text-sm font-semibold text-red-600 hover:bg-red-600 hover:text-white transition">
                <span className="bg-blue-900 text-white rounded-full p-2">
                  &gt;
                </span>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
