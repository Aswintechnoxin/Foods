
import { FaAngleRight, FaRegClock, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6'; 
import Link from 'next/link';


export default function ContactSection() {
    return (
        <section className="bg-white py-12 px-6 md:px-20">
            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
                    <p className="text-gray-600 mb-6">
                        Join us and take the first step toward a rewarding career!
                    </p>
                    

                    <h3 className="text-xl font-semibold text-gray-900 mb-4 underline underline-offset-4">
                        Campus Location
                    </h3>

                    <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-4">
                            <span className="text-white text-xl  bg-red-700 p-2 rounded-full">
                            <FaRegClock />
                            </span>
                            <p className="text-gray-700">
                                
                                Working hours are 9am – 8pm<br />
                                Every Monday – Saturday.
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="text-white text-xl bg-red-700 p-2 rounded-full">
                            <FaLocationDot />
                            </span>
                            <p className="text-gray-700">
                                no:416/4, Swami Building, Sathy Rd, near CMS Matriculation School, Ganapathy, Coimbatore, Tamil Nadu 641006
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <span className="text-white text-xl bg-red-700 p-2 rounded-full">
                            <FaEnvelope />
                            </span>
                            <p className="text-gray-700">
                                principal@minervagroups.com
                            </p>
                        </div>
                    </div>

                    <div className="rounded-xl overflow-hidden shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6721812881345!2d76.9940652748072!3d10.835374089324894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857f11e407cd9%3A0x449ad9ea43a5e0aa!2sMINERVA%20INSTITUTE%20OF%20PARAMEDICAL%20SCIENCES!5e0!3m2!1sen!2sin!4v1713691345153!5m2!1sen!2sin"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-xl p-8 border border-dashed border-gray-300">
                    <h2 className="text-2xl font-bold mb-2 text-gray-900">Any Questions?</h2>
                    <p className="text-gray-600 mb-6">
                        Feel free to reach out! We're here to help and guide you
                    </p>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                        />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                        />
                        <input
                            type="tel"
                            placeholder="Phone No"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                        />
                        <textarea
                            placeholder="Write your message"
                            rows="4"
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                        ></textarea>

                         <Link
                                  href='#'
                                  className='inline-flex items-center gap-4 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold text-white transition home-about-btn'
                                >
                                  <div className='bg-blue-700 p-3 rounded-full text-white home-about-btn-icon'>
                                    <FaAngleRight />
                                  </div>
                                  Send Message
                                </Link>
                    </form>
                </div>
            </div>
        </section>
    );
}
