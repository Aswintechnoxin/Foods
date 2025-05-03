import "./about.css";
import Image from "next/image";

export default function MinervaBenefits() {
    return (
        <section className="bg-white py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <p className="uppercase text-sm tracking-widest text-gray-500 mb-2">
                    A Modern Learning Environment
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                    Explore the Benefits of Choosing Minerva
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    {/* Left Items */}
                    <div className="flex flex-col gap-12">
                        <div className="flex items-start gap-4 text-left">
                            <div className="bg-red-600 text-white rounded-full w-13 h-10 flex items-center justify-center font-bold text-lg">
                                1
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Flexible Learning Options</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    Learn at your own pace, anytime, anywhere, with flexibility.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 text-left">
                            <div className="bg-red-600 text-white rounded-full w-13 h-10 flex items-center justify-center font-bold text-lg">
                                2
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Global Exposure</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    International collaborations expand healthcare career opportunities.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Center Image */}
                    <div className="relative flex justify-center items-center">
                        <div className="img-box1 style2">
                            <div className="vs-circless">
                                <div className="mega-hover">
                                    <Image
                                        src="/about-2.webp"
                                        alt="banner"
                                        width={800}
                                        height={800}
                                        className="image"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Items */}
                    <div className="flex flex-col gap-12">
                        <div className="flex items-start gap-4 text-left">
                            <div className="bg-red-600 text-white rounded-full w-13 h-10 flex items-center justify-center font-bold text-lg">
                                3
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Hands-on Training</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    Gain practical experience through internships and clinical practice
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 text-left">
                            <div className="bg-red-600 text-white rounded-full w-13 h-10 flex items-center justify-center font-bold text-lg">
                                4
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Comprehensive Courses</h3>
                                <p className="text-gray-600 text-sm mt-1">
                                    Wide range of paramedical courses for diverse healthcare career paths.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
