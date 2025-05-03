import Image from "next/image";

export default function StudentExperiences() {
    return (
        <>
            <div className="mx-auto px-4 py-16 container">
                <h6 className="student-sub-title">STUDENT EXPERIENCES</h6>
                <h3 className="student-title">What Our Students Are <br></br> Saying</h3>


                <div className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="person">
                        <div className="group flex items-center bg-gray-300 hover:bg-blue-950 mb-5 rounded-2xl lg:w-[550px] transition-colors duration-300 name-card">
                            <div className="p-3">
                                <Image src="/home/t1.webp" alt="name" width={100} height={100} />
                            </div>
                            <div className="p-3 text-[20px]">
                                <h3 className="text-gray-800 transition-colors duration-300 name-text">Vishnu</h3>
                            </div>
                        </div>

                        <div className="group flex items-center bg-gray-300 hover:bg-blue-950 mb-5 rounded-2xl lg:w-[550px] transition-colors duration-300 name-card">
                            <div className="p-3">
                                <Image src="/home/t4.webp" alt="name" width={100} height={100} />
                            </div>
                            <div className="p-3 text-[20px]">
                                <h3 className="text-gray-800 transition-colors duration-300 name-text">Shiny Prassana</h3>
                            </div>
                        </div>

                        <div className="group flex items-center bg-gray-300 hover:bg-blue-950 mb-5 rounded-2xl lg:w-[550px] transition-colors duration-300 name-card">
                            <div className="p-3">
                                <Image src="/home/t2.webp" alt="name" width={100} height={100} />
                            </div>
                            <div className="p-3 text-[20px]">
                                <h3 className="text-gray-800 transition-colors duration-300 name-text">Sridhar</h3>
                            </div>
                        </div>

                    </div>

                    <div className="flex flex-col justify-center items-center border-[2px] rounded-2xl h-80 text-center">
                        <div className="pb-5 icon">
                            <Image src="/home/quote.png" alt="" width={100} height={100} />
                        </div>
                        <div className="content">
                            <p className="p-4 text-[20px]">
                                The training provided at this institution helped me grow both personally and professionally. The
                                practical experience was invaluable in enhancing my skills.
                            </p>

                            <h5>Vishnu</h5>
                        </div>
                    </div>
                </div>


            </div>
        </>
    );
}