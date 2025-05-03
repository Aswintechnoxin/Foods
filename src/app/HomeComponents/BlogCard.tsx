import Image from 'next/image';
import Link from 'next/link';
import { FaRegUserCircle, FaCalendarAlt, FaLongArrowAltRight } from 'react-icons/fa';

const blogs = [
    {
        title: 'Popular Paramedical Courses',
        name: 'BLOG BY',
        date: '10 November, 2024',
        image: '/home/c1.webp',
    },
];

export default function BlogCard() {
    return (
        <section className='blog-bg'>
            <div className="mx-auto px-4 text-center container">
                {/* Top subtitle with lines */}
                <div className="flex justify-center items-center mb-3 pt-[40px]">
                    <div className="bg-red-700 w-10 h-[4px]" />
                    <span className="mx-3 font-bold text-red-700 text-xs uppercase tracking-widest">
                        BLOG AND UPDATES
                    </span>
                    <div className="bg-red-700 w-10 h-[4px]" />
                </div>

                {/* Main heading */}
                <h2 className="pb-5 font-bold text-slate-800 text-3xl md:text-4xl">
                    News & Articles
                </h2>
            </div>

            <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-5 pb-[40px]">
                {blogs.map((blog, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-sm hover:shadow-md p-4 rounded-2xl h-[380px] transition-all duration-300"
                    >
                        <div className="relative mb-4 rounded-xl h-[200px] overflow-hidden mega-hover">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill={true}
                                className="rounded-xl object-cover"
                            />
                        </div>
                        <div className="flex items-center pb-[10px]">
                            <div className='flex items-center gap-2'>
                                <div className="text-red-700 blog-icon">
                                    <FaRegUserCircle />
                                </div>
                                <div>
                                    <p className='pr-[10px] border-gray-400 border-r h-[20px] text-[14px] text-gray-300 blog-margin'>{blog.name}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-1'>
                                <div className="pl-[16px] text-red-700 blog-icon">
                                    <FaCalendarAlt />
                                </div>
                                <div>
                                    <p className='text-[14px] text-gray-300 blog-margin'>{blog.date}</p>
                                </div>
                            </div>
                        </div>
                        <Link href="#3">
                            <h5 className="mt-2 font-semibold text-slate-800">
                                {blog.title}
                            </h5>
                        </Link>

                        <div className="border-gray-300 border-t"></div>

                        <Link href="#3" className='flex items-center gap-3 pt-3'>
                            <span className='font-semibold'>
                                Read More
                            </span>
                            <span className='text-red-700'>
                                <FaLongArrowAltRight />
                            </span>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
