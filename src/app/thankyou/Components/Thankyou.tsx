import Link from 'next/link';
import './Thankyou.css';


export default function ThankyouPage() {
  return (
    <section className="flex justify-center items-center bg-white px-4 min-h-screen vs-thankyou-wrapper">
      <div className="w-full max-w-2xl text-center">
        <div className="thankyou-content">
          <h1 className="mb-4 font-bold text-gray-800 text-4xl thankyou-title breadcumb-title">
            Thank You!
          </h1>
          <h2 className="mb-4 text-gray-600 text-2xl thankyou-title2">
            Your Submission is Successful
          </h2>
          <p className="mb-8 text-gray-500 thankyou-text">
            We appreciate your response. Our team will get back to you as soon as possible.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-white transition vs-btn"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </section>
  );
}
