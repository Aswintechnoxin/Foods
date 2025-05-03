'use client';

import Image from 'next/image';

const courses = [
    {
        title: 'Certificate In Blood Collection Assistant',
        type: 'Certificate',
        image: '/home/c1.webp',
    },
    {
        title: 'Certificate In First Aid & Emergency',
        type: 'Certificate',
        image: '/home/c2.webp',
    },
    {
        title: 'Diploma In Medical Lab Technician',
        type: 'Diploma',
        image: '/home/c20.webp',
    },
    {
        title: 'Certificate In Blood Collection Assistant',
        type: 'Certificate',
        image: '/home/c1.webp',
    },
    {
        title: 'Certificate In Blood Collection Assistant',
        type: 'Certificate',
        image: '/home/c1.webp',
    },
];

export default function Course() {
    return (
        <section className='bg-course'>
            <div className="mx-auto px-4 text-center container">
                {/* Top subtitle with lines */}
                <div className="flex justify-center items-center mb-3 pt-[40px]">
                    <div className="bg-red-700 w-10 h-[4px]" />
                    <span className="mx-3 font-bold text-red-700 text-xs uppercase tracking-widest">
                        Top-Rated Courses
                    </span>
                    <div className="bg-red-700 w-10 h-[4px]" />
                </div>

                {/* Main heading */}
                <h2 className="pb-5 font-bold text-slate-800 text-3xl md:text-4xl">
                    Find Your Perfect Course
                </h2>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5 pb-[40px] container mx-auto">
                {courses.map((course, index) => (
                    <div key={index} className="bg-white shadow-sm hover:shadow-md p-4 border border-red-400 border-dashed rounded-2xl h-[380px] transition-all duration-300">
                        <div className="relative mb-4 rounded-xl overflow-hidden">
                            <Image
                                src={course.image}
                                alt={course.title}
                                width={400}
                                height={400}
                                className="rounded-xl w-full h-auto object-cover"
                            />
                            <span className="top-3 left-3 absolute bg-yellow-400 px-3 py-1 rounded-full font-semibold text-black text-xs uppercase">
                                {course.type}
                            </span>
                        </div>
                        <h5 className="text-slate-800 course-title">
                            {course.title}
                        </h5>
                    </div>
                ))}
            </div>
        </section>
    );
}
