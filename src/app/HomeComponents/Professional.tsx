import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export default function Professional() {
    return (
        <>
            <section className="professional-bg">
                <div className="mx-auto px-4 py-16 container">
                    <div className="flex gap-5">
                        <div className="professional-icon">
                            <Image src="/home/cta-ico-3-1.svg" alt="" width={120} height={120} />
                        </div>
                        <div className="content-professional">
                            <h2>Interested in Becoming a <br></br> Paramedical Professional</h2>
                            <p>You're in the right place! To find out more.</p>
                            <Link
                                href='#'
                                className='inline-flex items-center gap-4 bg-red-700 hover:bg-red-700 px-6 py-3 rounded-full font-semibold text-white transition home-about-btn'
                            >
                                <div className='bg-blue-700 p-3 rounded-full text-white home-about-btn-icon'>
                                    <FaAngleRight />
                                </div>
                                Get More Info
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}