import Link from "next/link";
import "./Error.css";
import Image from "next/image";

export default function ErrorSection() {
  return (
    <section className="flex items-center px-4 py-12 min-h-screen vs-error-wrapper">
      <div className="mx-auto container">
        {/* Set layout to column by default, row only on lg (1024px+) */}
        <div className="flex lg:flex-row flex-col lg:text-left text-center">
          {/* Image Section */}
          <div className="flex justify-center lg:order-2 mb-8 lg:mb-0 w-full lg:w-1/2">
            <div className="mx-auto max-w-md error-img">
              <Image src="/images/error-1-1.png" alt="error image" className="w-full h-auto" />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex justify-center items-center lg:order-1 w-full lg:w-1/2">
            <div className="mx-auto max-w-lg error-content">
              <h1 className="mb-4 font-bold text-red-600 text-6xl error-title">oops!</h1>
              <h2 className="mb-4 font-semibold text-gray-800 text-3xl error-title2">Page Not Found</h2>
              <p className="mb-6 text-gray-500 error-text">
                The resource you are looking for might have been removed, had its name changed, or is temporarily unavailable.
              </p>
              <Link
                href="/"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white transition vs-btn"
              >
                <i className="me-2 pe-1 fas fa-home"></i> Back To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
