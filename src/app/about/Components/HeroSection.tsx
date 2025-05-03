"use client";
import Image from "next/image";
import "@/app/about/Components/about.css";

const HeroSection = () => {
    return (
        <section className="relative pt-16 pb-20 overflow-hidden">
            {/* Decorative Circle */}
            <div className="hidden 3xl:block top-0 left-0 absolute">
                <div className="border-2 border-yellow-400 rounded-full w-12 h-12"></div>
            </div>

            {/* Container */}
            <div className="mx-auto px-4 max-w-7xl">
                {/* Title Section */}
                <div className="flex flex-col justify-center text-center">
                <div className="vs-circle"></div>
                        <div className="text-center">
                            <span className="block text-gray-500 text-lg uppercase tracking-wide">
                                WELCOME TO GLOBAL EDUCATION
                            </span>
                            <h2 className="mt-2 font-bold text-gray-900 text-3xl md:text-4xl">
                                Elevate Your Career with Minerva Institute of Paramedical Science
                            </h2>
                        </div>
                    
                </div>

                {/* Content Section */}
                <div className="flex flex-wrap gap-10 mt-10">
                    {/* Image Section */}
                    <div className="relative lg:w-7/12 2xl:w-7/12">
                        <div className="relative shadow-lg rounded-lg overflow-hidden mega-hover">
                            <Image
                            
                                src="/about-1-1.webp" 
                                alt="About Img"
                                width={700}
                                height={500}
                                className="w-full"
                            />
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="self-center lg:w-5/12 2xl:w-1/3">
                        <p className="text-gray-700 text-lg">
                            At Minerva Institute of Paramedical Science, we believe in shaping
                            the future of healthcare professionals by providing top-notch
                            education and hands-on training. Our commitment to excellence
                            ensures that students are equipped with the skills and knowledge
                            necessary to succeed in the ever-evolving healthcare industry.
                        </p>
                        <p className="mt-4 text-gray-700 text-lg">
                            We ensure that every student is prepared to meet the dynamic
                            challenges of the healthcare industry.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
